import React, { Component } from 'react';
import './Chip.css';

class Chip extends Component {
  render() {
    return (
      <div className="chip">
        <div className="chip-logo">
          <span>{this.props.logo}</span>
        </div>
        <div className="chip-info">
          <div className="currency-name">{this.props.currency}</div>
          <div className="balance">Available: {this.props.balance}</div>
        </div>
      </div>
    );
  }
}

export default Chip;