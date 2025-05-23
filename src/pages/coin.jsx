import React, { useContext, useEffect, useState } from 'react'
import './coin.css'
import { useParams } from 'react-router-dom';
import { CoinContext } from '../context/coinContext';
import LineChart from '../components/lineChart';

const coin = () => {

  const{coinId}=useParams();
  const[coinData,setCoinData]=useState();
  const[historicalData,setHistoricalData]=useState();
  const{currency}= useContext(CoinContext);

  const fetchHistoricalData=async()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-q7z6gd6XanC8rZRVu6U3rbNc'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));
  }

  const fetchCoinData= async()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-q7z6gd6XanC8rZRVu6U3rbNc'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetchCoinData();
    fetchHistoricalData();
  },[currency])

  if(coinData && historicalData){
    return (
      <div className='coin'>
       <div className='coin-name'>
        <img src={coinData.image.large}></img>
        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()}) </b></p>
       </div>
       <div className='coin-chart'>
        <LineChart historicalData={historicalData}/>
       </div>

       <div className='coin-info'>
        <ul> 
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul> 
          <li>Current Price </li>
          <li>{currency.symbol}{coinData.market_data.current_price[currency.name]}</li>
        </ul>
        <ul> 
          <li>Market Cap </li>
          <li>{currency.symbol}{coinData.market_data.market_cap[currency.name]}</li>
        </ul>
        <ul> 
          <li> 24 Hour High </li>
          <li>{currency.symbol}{coinData.market_data.high_24h[currency.name]}</li>
        </ul>
        <ul> 
          <li> 24 Hour Low </li>
          <li>{currency.symbol}{coinData.market_data.low_24h[currency.name]}</li>
        </ul>
       </div>
      </div>
    )
  }
  else{
    return(
      <div className='spinner'>
        <div className='spin'></div>
      </div>
    )
  }

}

export default coin

