import React, { Component } from 'react';
import Card from '../card/Card';

class ActionCard extends Component {
  render() {
    return (
      <Card>
      <div className="card-header">
        actions
      </div>
      <div className="card-body action-body">
        <div className="action-item">
          <input className="action-input" placeholder="Enter Amount" />
          <button className="action-button deposit-button">Deposit ></button>
        </div>
        <hr />
        <div className="action-item">
          <input className="action-input" placeholder="Enter Amount" />
          <button className="action-button withdraw-button">Withdraw ></button>
        </div>
      </div>
    </Card>
    );
  }
}

export default ActionCard;