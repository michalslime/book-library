// import { ethers, run } from "hardhat";

// async function main() {
//   await run('compile');
//   const [deployer] = await ethers.getSigners();
//   console.log('Account balance:', (await deployer.getBalance()).toString());
//   const Library = await ethers.getContractFactory("Library");
//   const library = await Library.deploy();
//   await library.deployed();
//   console.log("Library deployed to:", library.address);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// // main().catch((error) => {
// //   console.error(error);
// //   process.exitCode = 1;
// // });

// export default main;