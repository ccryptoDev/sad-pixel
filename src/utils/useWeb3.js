import Web3 from 'web3';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import ToadABI from './abi.json';
import { CONTRACT_ADDRESS, INFURA_KEY } from './constants'

let contract;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_KEY
    }
  }
};

const web3modal = new Web3Modal({
  cacheProvider: false, // optional
  providerOptions // required
});

/** @return connecting to web3 via modal */
async function connectWeb3() {
  const connection = await web3modal.connect();
  // const provider = new ethers.providers.Web3Provider(connection);
  // const signer = provider.getSigner();
  return connection
}

/** @return if browser is running MetaMask. */
function getMetaMaskInstalled() {
  return typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask;
}

/** @return whether MetaMask connected successfuly. */
async function connectMetamask() {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
  } catch (err) {
    console.error(err);
    return false;
  }
}

/** @return the first `userAddress` from the list of connected addresses. */
async function getUserAddress() {
  const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  return accounts[0] || "";
}

/** Connects to the contract at `CONTRACT_ADDRESS`. */
async function loadContract() {
  if (typeof contract === 'undefined') {
    window.web3 = new Web3(window.ethereum);
    contract = await new window.web3.eth.Contract(ToadABI, CONTRACT_ADDRESS);
  }
}

async function getCurrentIndex() {
  try {
    return (await contract.methods.getCurrentIndex().call()) - 1;
  } catch (err) {
    return -1;
  }
}

async function hasSaleStarted() {
  try {
    return (await contract.methods.hasSaleStarted().call());
  } catch (err) {
    console.log("Fail");
  }
}

async function purchaseToad(numBought, totalAmount) {
  const connection = await web3modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ToadABI, signer);
  const price = ethers.utils.parseUnits(`${totalAmount}`, 'ether');
  
  let transaction = await contract.mintToad(numBought, {
    value: price
  });

  return transaction
}

export { connectWeb3, getCurrentIndex, getUserAddress, getMetaMaskInstalled, connectMetamask, purchaseToad, hasSaleStarted, loadContract };
