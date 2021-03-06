require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-web3");
require('@nomiclabs/hardhat-ethers');
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("hardhat-gas-reporter");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
  solidity: {
    compilers: [{
      version: "0.7.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }],
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_URL_MAINNET,
        accounts: [process.env.PRIVATE_KEY],
        blockNumber: 13177700
      }
    }, 
    mainnet: {
      url: `https://api.harmony.one`,
      // url: process.env.ALCHEMY_URL_MAINNET,
      accounts: [process.env.PRIVATE_KEY],
    },
    /** 
    testnet: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [process.env.PRIVATE_KEY]
    },
    */
  },
  gasReporter: {
    enabled: true
  },
  mocha: {
    timeout: 50000
  },
};
