import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || process.env.REACT_APP_HTTP_PROVIDER);
export const web3ws = new Web3(process.env.REACT_APP_WS_PROVIDER);

export default web3;
