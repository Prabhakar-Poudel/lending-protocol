import React, { Component } from 'react';
import Chip from '../wallet-chip/Chip';
import ActionCard from '../card/ActionCard';
import SummaryCard from '../card/SummaryCard';
import './Dashboard.css';
import daiLogo from '../../images/dai-logo.svg';

import { getAccountDetails, withdrawAsset, depositAsset } from '../../ethereum/utils';
import { web3ws } from '../../ethereum/web3';

import { store } from 'react-notifications-component';

const ethereum = window.ethereum;
const WITHDRAW = 'WITHDRAW';
const DEPOSIT = 'DEPOSIT';

class Dashboard extends Component {

  notification = {
    message: "",
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  }
  
  state = {
    accountAddress: ethereum ? ethereum.selectedAddress : undefined,
    totalBalance: 0,
    interestRate: 0,
    daiBalance: 0,
  }

  subscription = null

  subscribeBlockHeaders = () => {
    if (this.subscription) {
      return;
    }
    this.subscription = web3ws.eth.subscribe('newBlockHeaders')
      .on("data", () => {
          this.updateState();
      });
  }

  updateState = async () => {
    if (ethereum && ethereum.selectedAddress) {
      const address = ethereum.selectedAddress
      getAccountDetails(address)
      .then(details => {
        this.setState({
          accountAddress: address,
          totalBalance: details.underlyingBalance,
          interestRate: details.interestRate,
          daiBalance: details.daiBalance,
        });
      });
    }
  }

  componentDidMount() {
    this.updateState();
    this.subscribeBlockHeaders();
  }

  componentWillUnmount() {
    if (this.subscription) {
      // unsubscribes the subscription
      this.subscription.unsubscribe();
    }
  }

  linkMetaMask = async () => {
    if (ethereum) {
      try {
        await ethereum.enable();
        this.updateState()
      } catch (error) {
        store.addNotification({
          ...this.notification,
          message: 'Failed connecting to MetaMask.',
        });
      }
    } else {
      store.addNotification({
        ...this.notification,
        type: 'info',
        meaage: 'Please install MetaMask extension.',
      });
    }
  }

  handleFailedTxn = err => {
    store.addNotification({
      ...this.notification,
      type: 'danger',
      title: 'Failed transaction!',
      message: err.message
    });
  }

  handleSuccessTxn = (type, amount) => {
    store.addNotification({
      ...this.notification,
      type: 'success',
      message: `Transaction to ${type.toLowerCase()} ${amount} completed.`
    });
  }

  makeTransaction = (amount, type) => {
    const { accountAddress, totalBalance } = this.state;
    if (!accountAddress) {
      store.addNotification({
        ...this.notification,
        type: 'info',
        message: 'Please link your wallet to make transactions.',
      });
      return;
    }
    if (type === WITHDRAW) {
      if (amount > totalBalance) {
        store.addNotification({
          ...this.notification,
          message: 'You do not have sufficient balance to withdraw.',
        });
        return;
      }
      withdrawAsset(accountAddress, amount)
      .then(() => this.handleSuccessTxn(WITHDRAW, amount))
      .catch(this.handleFailedTxn);
    } else if (type === DEPOSIT) {
      depositAsset(accountAddress, amount)
      .then(() => this.handleSuccessTxn(DEPOSIT, amount))
      .catch(this.handleFailedTxn);
    }
    store.addNotification({
      ...this.notification,
      type: 'success',
      message: 'Transaction submitted.',
    });
  }

  render() {
    const { accountAddress, totalBalance, daiBalance, interestRate } = this.state;
    return (
      <div className="dashboard">
        <div className="account-name">Helis Account</div>
        <div className="main-balance">${totalBalance}</div>
        <div className="wallet">{ accountAddress ? (
          accountAddress
        ) : (
          <button className="link-address" onClick={this.linkMetaMask}>Link MetaMask wallet</button>
        )}</div>
        <Chip logo={daiLogo} currency="DAI" balance={daiBalance} className="wallet-chip" />
        <div className="card-container">
          <SummaryCard balance={totalBalance} interestRate={interestRate} />
          <ActionCard handleTransaction={this.makeTransaction} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
