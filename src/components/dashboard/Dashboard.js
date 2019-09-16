import React, { Component } from 'react';
import Chip from '../wallet-chip/Chip';
import ActionCard from '../card/ActionCard';
import SummaryCard from '../card/SummaryCard';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="account-name">Helis Account</div>
        <div className="main-balance">$0.121</div>
        <div className="wallet">0x01a957896989a4ca8075c5cac87d5425ce61d32db</div>
        <Chip logo="[@]" currency="DAI" balance="$0.121" className="wallet-chip" />
        <div className="card-container">
          <SummaryCard />
          <ActionCard />
        </div>
      </div>
    );
  }
}

export default Dashboard;
