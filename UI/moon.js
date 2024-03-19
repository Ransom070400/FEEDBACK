const { ethers } = require("ethers");

// Replace with your own contract ABI and address
const contractABI = [
  // Your contract ABI here
];
const contractAddress = "0x6bd66c18bC1a24e939BCa1a578bF461856a75bd7";

// Replace with your own Ethereum node URL
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR-INFURA-API-KEY");

// Connect to the contract using the provider and ABI
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Function to run when the button is clicked
async function run() {
  try {
    // Replace with your own function name and parameters
    const result = await contract.yourFunctionName("runtime");
    console.log("Transaction sent:", result.hash);
    const receipt = await result.wait();
    console.log("Transaction mined:", receipt);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the run function when the button is clicked
document.getElementById("runButton").addEventListener("click", run);