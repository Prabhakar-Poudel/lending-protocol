import React, { Component } from 'react';
import Card from '../card/Card';

class SummaryCaed extends Component {

  state = {
    depositedAmount: '...',
    interestEarned: '...',
  }

  render() {
    const { depositedAmount, interestEarned } = this.state;
  
    return (
      <Card>
        <div className="card-header">
          summary
        </div>
        <div className="card-body">
          <div className="summary-item">
            <div>Deposited Amount</div>
            <div>{depositedAmount}</div>
          </div>
          <div className="summary-item">
            <div>Interest Earned</div>
            <div>{interestEarned}</div>
          </div>
          <div className="summary-item">
            <div>Protocol Selected</div>
            <div>{this.props.interestRate}% via Compound</div>
          </div>
          <div className="summary-item">
            <div>Total</div>
            <div>${this.props.balance}</div>
          </div>
        </div>
      </Card>
    );
  }
}

export default SummaryCaed;