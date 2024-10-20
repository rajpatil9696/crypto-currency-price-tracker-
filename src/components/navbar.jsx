import React, { useContext } from 'react';
import './navbar.css';
import logo from '../../cryptoplace_assets/logo.png';
import arrow_icon from '../../cryptoplace_assets/arrow_icon.png';
import { CoinContext } from '../context/coinContext';
import { Link } from 'react-router-dom';

const navbar = () => {

   const{setCurrency}=useContext(CoinContext)

   const currencyHandler=(event)=>{
        switch(event.target.value){
          case "usd":{
            setCurrency({name:"usd", symbol : "$"  });
            break;
          }
          case "eur":{
            setCurrency({name:"eur", symbol : "ē"  });
            break;
          }
          case "inr":{
            setCurrency({name:"inr", symbol : "₹"  });
            break;
          }
          default:{
            setCurrency({name:"usd", symbol : "$"  });
            break;
          }
    
        }
   }


  return (
    <div className='navbar'>
      <Link to={`/`}>
      <img src={logo} className='logo'></img>
      </Link>
      <ul>
        <Link to={`/`}>
        <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className='nav-right'>
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option  value="eur" >EUR</option>
            <option  value="inr" >INR</option>
        </select>
        <button >Sing UP <img src={arrow_icon}></img> </button>
      </div>
    </div>
  )
}

export default navbar
