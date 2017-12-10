import React, { Component } from 'react';
import { 
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

const newTransactionDefault =  {
    date: '1/1/2018',
    account: '',
    amount: 0.0
}

class Transactions extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            transactions: props.transactions,
            newTransaction: newTransactionDefault
        }
    }
  handleAddRow = () => {
      this.setState({
          transactions: [
              ...this.state.transactions,
              this.state.newTransaction
          ],
          newTransaction: newTransactionDefault
      })
  }

  updateNewEntryDate = (e, newVal) => {
      this.setState({
        newTransaction: { 
            ...this.state.newTransaction,
            date: newVal
        }
      })
  }
  
    updateNewEntryAcct = (e, newVal) => {
        this.setState({
          newTransaction: { 
              ...this.state.newTransaction,
              account: newVal
          }
        })
    }
    
      updateNewEntryAmt= (e, newVal) => {
          this.setState({
            newTransaction: { 
                ...this.state.newTransaction,
                amount: newVal
            }
          })
      }

  render() {
    return (
        <div>
            <form onSubmit={this.handleAddRow}>
                <TextField 
                    hintText="Date"
                    value={this.state.newTransaction.date}
                    onChange={this.updateNewEntryDate}
                />                  
                <TextField
                    hintText="Account"
                    value={this.state.newTransaction.account}
                    onChange={this.updateNewEntryAcct}
                />                
                <TextField
                    hintText="Amount"
                    value={this.state.newTransaction.amount}
                    onChange={this.updateNewEntryAmt}
                />
                <FlatButton onClick={this.handleAddRow}>Add</FlatButton>
                  
            </form>
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Account</TableHeaderColumn>
                        <TableHeaderColumn>Amount</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.state.transactions
                        .sort((txnA, txnB) => { return txnA.date < txnB.date })
                        .map((txn) => (
                        <TableRow>
                            <TableRowColumn>{txn.date}</TableRowColumn>
                            <TableRowColumn>{txn.account}</TableRowColumn>
                            <TableRowColumn>{txn.amount}</TableRowColumn>
                        </TableRow>
                    ))}                
                </TableBody>
            </Table>
        </div>
    );
  }
}

export default Transactions;
