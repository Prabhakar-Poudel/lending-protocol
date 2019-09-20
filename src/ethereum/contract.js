import cDaiAbi from './abis/cDaiAbi';
import daiAbi from './abis/daiAbi';
import web3 from './web3';
import { cDaiKovanAddress, daiKovanAddress } from './config';

export const cDaiContract = new web3.eth.Contract(cDaiAbi, cDaiKovanAddress);
export const daiContract = new web3.eth.Contract(daiAbi, daiKovanAddress)

