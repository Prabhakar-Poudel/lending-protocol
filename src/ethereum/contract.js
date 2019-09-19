import ABI from './abi';
import web3 from './web3';
import { cDaiKovanAddress } from './config';

const contract = new web3.eth.Contract(ABI, cDaiKovanAddress);

export default contract;
