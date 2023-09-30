import React, { useState } from 'react';
import './payment.css'; 

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [doctorAddress, setDoctorAddress] = useState('');
  const [message, setMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');

  // Function to connect to Metamask wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        setMessage('Connected to Metamask');
        // Get and set the user's wallet address
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setUserAddress(accounts[0]);
      } catch (error) {
        console.error(error);
        setMessage('Connection to Metamask failed');
      }
    } else {
      setMessage('Metamask not detected');
    }
  };

  // Function to handle the payment transaction
  const handlePayment = async () => {
    if (isConnected) {
      // Your payment transaction code here
      // ...
    } else {
      setMessage('Please connect your Metamask wallet first');
    }
  };

  return (
    <div className='bg'>
    <div className="container">
      <div className="payment-form">
        <h1>Payment Gateway</h1>
        {isConnected ? (
          <div>
            <p>Your Wallet Address: {userAddress}</p>
          </div>
        ) : (
          <div>
            <button className="connect-button" onClick={connectWallet}>
              Connect Wallet
            </button>
          </div>
        )}
        <div>
          <label>
            Doctor's Wallet Address:
            <input
              type="text"
              value={doctorAddress}
              onChange={(e) => setDoctorAddress(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Reason:
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </label>
        </div>
        {isConnected && (
          <div>
            <button className="payment-button" onClick={handlePayment}>
              Make Payment
            </button>
          </div>
        )}
        <div className="message">{message}</div>
      </div>
    </div>
    </div>
  );
};

export default Payment;
