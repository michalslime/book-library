// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function deployLibraryContract() {
  await hre.run('compile'); // We are compiling the contracts using subtask
  const [deployer] = await ethers.getSigners(); // We are getting the deployer

  console.log('Deploying contracts with the account:', deployer.address); // We are printing the address of the deployer
  console.log('Account balance:', (await deployer.getBalance()).toString()); // We are printing the account balance

  const library = await ethers.getContractFactory("Library"); // 
  const libraryContract = await library.deploy();
  await libraryContract.deployed();

//   await hre.run("verify:verify", {
//     address: libraryContract.address,
//     constructorArguments: [
//      // if any
//     ],
//   });

  console.log('Library Contract address: ', libraryContract.address);
  console.log('Done!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// deployLibraryContract().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

module.exports = deployLibraryContract;