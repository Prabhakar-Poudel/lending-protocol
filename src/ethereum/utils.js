import { cDaiContract, daiContract } from './contract';
import { cTokenInterestMultiplyer } from './config';

const scaleFactor = 1e18;
const decimalPlaces = 3;

export const getUnderlyingBalance = (account) => {
  return cDaiContract.methods.balanceOfUnderlying(account).call()
  .then(balance => (balance / scaleFactor).toFixed(decimalPlaces));
};

export const depositAsset = (account, amount) => {
  return cDaiContract.methods.mint(String(amount * scaleFactor)).send({from: account})
};

export const withdrawAsset = (account, amount) => {  
  return cDaiContract.methods.redeemUnderlying(String(amount * scaleFactor)).send({from: account})
};

export const getCurrentInterestRate = () => {
  return cDaiContract.methods.supplyRatePerBlock().call()
  .then(supplyRate => (supplyRate / scaleFactor * 100 * cTokenInterestMultiplyer).toFixed(2));
};

export const getDaiBalance = (account) => {
  return daiContract.methods.balanceOf(account).call()
  .then(balance => (balance / scaleFactor).toFixed(decimalPlaces));
};

export const getAccountDetails = account => {
  const intRt = getCurrentInterestRate();
  const underlyingBalace = getUnderlyingBalance(account);
  const daiBalance = getDaiBalance(account);
  return Promise.all([intRt, underlyingBalace, daiBalance])
  .then(data => {
    return {
      interestRate: data[0],
      underlyingBalance: data[1],
      daiBalance: data[2]
    };
  })
};
