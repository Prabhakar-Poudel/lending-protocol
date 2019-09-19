import contract from './contract';

export const getUserBalance = (account) => {
  return contract.methods.balanceOfUnderlying(account).call()
  .then(balance => (balance / 1e18).toFixed(4));
};

export const depositAsset = (account, amount) => {
  return contract.methods.mint(String(amount * 1e18)).send({from: account})
};

export const withdrawAsset = (account, amount) => {  
  return contract.methods.redeemUnderlying(String(amount * 1e18)).send({from: account})
};

export const getCurrentInterestRate = () => {
  const currentExchangeRate =  contract.methods.exchangeRateCurrent().call();
  const supplyRate = contract.methods.supplyRatePerBlock().call();
  const reducer = 1e18;
  return Promise.all([currentExchangeRate, supplyRate])
  .then(result => {
    const CER = result[0] / reducer;
    const SRPB = result[1] / reducer;
    return CER * SRPB;
  });
};
