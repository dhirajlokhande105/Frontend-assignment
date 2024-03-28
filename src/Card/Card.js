import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css'; 

const CryptoCards = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setCryptoData(response.data.bpi);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div>
        <p>
            Bitcoin Prices in different currencies
        </p>
    <div className="crypto-card-container">
      {cryptoData && (
        <>
          {Object.keys(cryptoData).map(currency => (
            <div style={{backgroundColor: 'black', margin: '20px', borderRadius: '20px'}}>
            <div className="crypto-card" key={currency}>
              <h2>{currency}</h2>
              <h2>{cryptoData[currency].rate}</h2>
            </div>
            </div>
          ))}
        </>
      )}
    </div>
    </div>
  );
};

export default CryptoCards;
