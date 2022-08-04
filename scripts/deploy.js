const hre = require("hardhat");


async function main() {
  const CyberqueensNFT = await hre.ethers.getContractFactory(
    "CyberqueensNFT"
  );
  const cyberqueensNFT = await CyberqueensNFT.deploy();

  await cyberqueensNFT.deployed();

  console.log("CyberqueensNFT deployed to:", cyberqueensNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// DEPLOY ADDRESSES
/*
1 - 0xA7188d1460e2E4Fd6Dc0A25099bE5CC863B074c7
*/