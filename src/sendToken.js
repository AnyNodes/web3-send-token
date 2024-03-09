const { ethers } = require('ethers');
const config = require('./config.json');

async function sendToken() {
  const provider = new ethers.providers.JsonRpcProvider(config.providerUrl);
  const wallet = new ethers.Wallet(config.privateKey, provider);
  const tokenContract = new ethers.Contract(config.tokenContractAddress, tokenABI, wallet);

  for (const recipient of config.recipients) {
    const amountToSend = ethers.utils.parseUnits(recipient.amount, config.tokenDecimals);
    try {
      const tx = await tokenContract.transfer(recipient.address, amountToSend);
      console.log(`Sending ${recipient.amount} tokens to ${recipient.address}. Transaction hash:`, tx.hash);
      const receipt = await tx.wait();
      console.log(`Transaction confirmed in block`, receipt.blockNumber);
    } catch (error) {
      console.error(`Error sending tokens to ${recipient.address}:`, error);
    }
  }
}

sendToken();
