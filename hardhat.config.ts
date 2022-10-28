import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/7c4090b24e6f458bbb026743f6140e1e",
      accounts: ['dbcfe59c3d94960e994afec103b4fc752c700d12209fb19f9a9a22d294105cd2']
    }
  },
  etherscan: {
    apiKey: "AEEYIT1EIC898EMMX5I8ZWB3ANFRGZQHYI"
  }
};

task("deploy-testnets2", "Deploys contract on a provided network")
  .setAction(async (taskArguments, hre, runSuper) => {
    const deployLibraryContract = require("./scripts/deploy");
    await deployLibraryContract(taskArguments);
  });

export default config;
