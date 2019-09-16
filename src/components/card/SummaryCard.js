import React, { Component } from 'react';
import Card from '../card/Card';

class SummaryCaed extends Component {
  render() {
    return (
      <Card>
        <div className="card-header">
          summary
        </div>
        <div className="card-body">
          <div className="summary-item">
            <div>Deposited Amount</div>
            <div>$0.120</div>
          </div>
          <div className="summary-item">
            <div>Interest Earned</div>
            <div>$0.001</div>
          </div>
          <div className="summary-item">
            <div>Protocol Selected</div>
            <div>14.21% via Compound</div>
          </div>
          <div className="summary-item">
            <div>Total</div>
            <div>$0.121</div>
          </div>
        </div>
      </Card>
    );
  }
}

export default SummaryCaed;