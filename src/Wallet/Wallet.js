import React, { useState } from 'react';
import Web3 from 'web3';

const ConnectWallet = () => {
  const [connectionStatus, setConnectionStatus] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        setConnectionStatus(`Connected to MetaMask: ${address}`);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        setConnectionStatus('Error connecting to MetaMask. Please try again.');
      }
    } else {
      setConnectionStatus('MetaMask is not installed. Please install MetaMask extension.');
    }
  };

  return (
    <div style={{textAlign: 'center'}}>
        <p>Connect MetaMask Wallet</p>
      <button onClick={connectWallet} style={{backgroundColor: 'green', padding: '20px', color: 'white'}}>Connect Wallet</button>
      <h1>{connectionStatus}</h1>
    </div>
  );
};

export default ConnectWallet;
