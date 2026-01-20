// CONFIGURATION
const CONTRACT_ADDRESS = "YOUR_DEPLOYED_ADDRESS_HERE";
const ABI = [
    "function mintNFT(address recipient, string memory tokenURI) public returns (uint256)",
    "function owner() public view returns (address)"
];

let provider, signer, contract;

const connectBtn = document.getElementById("connectBtn");
const mintBtn = document.getElementById("mintBtn");
const consoleDiv = document.getElementById("console");
const mintArea = document.getElementById("mintArea");

function log(msg) { consoleDiv.innerText = `> ${msg}`; }

connectBtn.addEventListener("click", async () => {
    if (!window.ethereum) return log("MetaMask not found!");
    
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const addr = await signer.getAddress();
    log(`Connected: ${addr.substring(0,6)}...`);
    connectBtn.classList.add("hidden");
    mintArea.classList.remove("hidden");
});

mintBtn.addEventListener("click", async () => {
    const uri = document.getElementById("tokenURI").value;
    if (!uri) return log("Enter a URI first!");

    try {
        log("Minting... (Please confirm in Wallet)");
        const tx = await contract.mintNFT(await signer.getAddress(), uri);
        log("Transaction sent! Waiting...");
        await tx.wait();
        log("Success! NFT Minted.");
    } catch (err) {
        log("Error: " + err.message.substring(0, 50));
    }
});
