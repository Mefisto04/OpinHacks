import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './payment.css'; 

const Payment = () => {
  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [doctorWallet, setDoctorWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
   
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          setUserAddress(accounts[0]);
        })
        .catch((error) => {
          console.error('Error connecting to Metamask:', error);
        });
    } else {
      console.error('Metamask is not installed.');
    }
  }, []);

  const handlePayment = () => {
    if (!web3) {
      console.error('Metamask not connected.');
      return;
    }

    // if (!doctorWallet || !amount || !reason) {
    //   console.error('Please fill in all fields.');
    //   return;
    // }

    web3.eth.sendTransaction({
      to: doctorWallet,
      from: userAddress,
      value: web3.utils.toWei(amount, 'ether'),
    })
      .on('transactionHash', (hash) => {
        console.log('Transaction Hash:', hash);
        alert('Payment successful!');
      })
      .on('error', (error) => {
        console.error('Payment error:', error);
        alert('Payment failed. Please try again.');
      });
  };

  return (
    <div className='er'>
    <div className="payment-container"> 
      <h1>Payment Gateway</h1>
      <p>Your Ethereum Address: {userAddress}</p>
      <input
        type="text"
        placeholder="Doctor's Ethereum Address"
        value={doctorWallet}
        onChange={(e) => setDoctorWallet(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Payment Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <button onClick={handlePayment} className='btn3'>Make Payment</button>
    </div>
    </div>
  );
};

export default Payment;
