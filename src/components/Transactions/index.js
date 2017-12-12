import React, { Component } from 'react';
import { 
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import DEFAULTS from "./defaults"
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

const newTransactionDefault = DEFAULTS

class Transactions extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            transactions: props.transactions,
            newTransaction: newTransactionDefault
        }

        this.columns = Object.keys(this.state.transactions[0]).map(key => {
            return {
                key: key,
                display: key.toUpperCase(),
                type: key
            }
        })
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

    updateNewEntry = (newVal, which) => {
        let newState = Object.assign({}, this.state.newTransaction) 
        newState[which] = newVal
        this.setState({ newTransaction: newState })
    }  
  
    render() {
      return (
          <div>
              <form onSubmit={this.handleAddRow}>
                    {this.columns.map(col => (
                        <TextField 
                            key={col.key}
                            hintText={col.display}
                            value={this.state.newTransaction[col.type]}
                            onChange={(e, newVal) => {
                                this.updateNewEntry(newVal, col.type)
                            }}
                        />
                    ))}
                    <FlatButton onClick={this.handleAddRow}>Add</FlatButton>                    
              </form>
              <Table>
                  <TableHeader displaySelectAll={false}>
                      <TableRow>                        
                          {this.columns.map(col => (
                              <TableHeaderColumn key={col.key}>{col.display}</TableHeaderColumn>
                          ))}
                          <TableHeaderColumn></TableHeaderColumn>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      {this.state.transactions
                          .sort((txnA, txnB) => { return txnA.date < txnB.date })
                          .map((txn) => (
                          <TableRow key={txn.date}>
                              {this.columns.map(col => (
                                  <TableRowColumn key={col.key}>{txn[col.type]}</TableRowColumn>
                              ))}
                              <TableRowColumn></TableRowColumn>
                          </TableRow>
                      ))}                
                  </TableBody>
              </Table>
          </div>
      );
    }
}

export default Transactions;
