import React, { Component } from 'react';
import Transactions from '../Transactions';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Budget App</h1>
        <Transactions transactions={this.props.transactions} />
      </div>
    );
  }
}

export default App;
