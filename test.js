const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ArtToken", function () {
  it("Should mint and set URI", async function () {
    const ArtToken = await ethers.getContractFactory("ArtToken");
    const nft = await ArtToken.deploy();
    await nft.deployed();

    const [owner] = await ethers.getSigners();
    const tokenURI = "https://example.com/metadata.json";

    await nft.mintNFT(owner.address, tokenURI);

    expect(await nft.tokenURI(1)).to.equal(tokenURI);
    expect(await nft.ownerOf(1)).to.equal(owner.address);
  });
});
