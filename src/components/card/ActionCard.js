import React, { Component } from 'react';
import Card from '../card/Card';

class ActionCard extends Component {

  getValueFrom = (id) => {
    return Number.parseFloat(document.getElementById(id).value)
  }

  withdrawBalance = () => {
    const val = this.getValueFrom('withdraw-amount');
    console.log(val);
  }

  depositBalance = () => {
    const val = this.getValueFrom('deposit-amount');
    console.log(val);
  }

  render() {  
    return (
      <Card>
      <div className="card-header">
        actions
      </div>
      <div className="card-body action-body">
        <div className="action-item">
          <input
            type="number"
            step="0.000001"
            className="action-input" 
            id="deposit-amount" 
            placeholder="Enter Amount"
          />
          <button
            className="action-button deposit-button"
            onClick={this.depositBalance}
          >
          Deposit >
          </button>
        </div>
        <hr />
        <div className="action-item">
          <input
            type="number"
            step="0.000001"
            className="action-input"
            id="withdraw-amount"
            placeholder="Enter Amount"
          />
          <button
            className="action-button withdraw-button" 
            onClick={this.withdrawBalance}
          >
          Withdraw >
          </button>
        </div>
      </div>
    </Card>
    );
  }
}

export default ActionCard;