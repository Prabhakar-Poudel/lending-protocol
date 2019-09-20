# Compound Protocol Interface
This project is meant to test the interactions with [Compound protocol](https://compound.finance/).
For simplicity, the app only tests cDAI tokens via Compound.
It connects to [Kovan](https://kovan.etherscan.io/) test network. It can be just as easily updated to connect to main Ethereum network by changing the contract ABI, contract address and set the provider accordingly.

## Requirements
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/) (optional)
- An account that you can sign transactions with and holds your assets.
- [Metamask](https://metamask.io) Browser Extension or any Web3 supporting browser/browser tool
- Some Ethers in Kovan test network to make transactions. You can get some [here](https://faucet.kovan.network/).
- Some initial DAI in your account to convert to cDAI. You can get some [here](https://app.compound.finance/asset/cDAI) after connecting your account with "compound.finance".

Note: You can simply create an account with MetaMask if you already don't have one.

## Installation
### Clone first certainly
via SSH
```git clone git@github.com:Prabhakar-Poudel/lending-protocol.git```
or via HTTPS
```https://github.com/Prabhakar-Poudel/lending-protocol.git```

### Next install dependencies
```npm install```
or
```yarn install```

If you need to have a real-time update which you should. Follow these steps:
- Sign up at [infura](https://infura.io/).
- Create a new project and get the project's Websocket link. It should be something like `wss://kovan.infura.io/ws/v3/YOUR-PROJECT-ID`
- Create a new file `.env.local` in the project root.
- Add your link as `REACT_APP_WS_PROVIDER="wss://kovan.infura.io/ws/v3/a8c3..."`
- Also add your https link to the file as `REACT_APP_HTTP_PROVIDER="https://kovan.infura.io/v3/a8c3..."`, in case you see any errors around "REACT_APP_HTTP_PROVIDER".

## Start project
```npm start```
or
```yarn start```

visit [localhost:3000](localhost:3000) and Voilà!


