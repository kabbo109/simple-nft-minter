const hre = require("hardhat");

async function main() {
  const ArtToken = await hre.ethers.getContractFactory("ArtToken");
  const nft = await ArtToken.deploy();

  await nft.deployed();

  console.log("ArtToken deployed to:", nft.address);
  console.log("Paste this address into app.js!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
