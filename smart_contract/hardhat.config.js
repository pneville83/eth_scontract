// https://eth-goerli.g.alchemy.com/v2/pYGyVvR5b_SwrZ75Z7qITtnKJ22x2xyy

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/pYGyVvR5b_SwrZ75Z7qITtnKJ22x2xyy',
      accounts: ['06c3be5f416f15cc5c95f186eaa66a6918ad67580361ad97324d972077d9a196']
    }

  }
}