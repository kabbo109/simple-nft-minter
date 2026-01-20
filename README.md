# Simple NFT Minter

A flat-structure NFT minting machine. This repository removes the complexity of modern frontend frameworks, focusing strictly on the interaction between a web page, a wallet (MetaMask), and the Ethereum blockchain.

## 🎨 Features
- **ERC-721 Standard**: Fully compliant Non-Fungible Token contract.
- **URI Storage**: Supports custom metadata URIs (IPFS/Arweave).
- **Owner Minting**: Restricted functionality for contract owners.
- **Zero-Config**: All files located in the root directory.

## 📐 Architecture
[Image of ERC721 smart contract interaction diagram]

1. **User** connects Wallet via `index.html`.
2. **User** inputs Metadata URI (image/json link).
3. **App.js** calls `safeMint()` on the blockchain.
4. **Contract** mints token and assigns it to the user.

## 🚀 Setup & Deploy

1. **Install Dependencies**
   ```bash
   npm install
