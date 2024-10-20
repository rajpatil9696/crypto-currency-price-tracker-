import React from 'react';
import Navbar from './components/navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Coin from './pages/coin';
import Footer from './components/footer';


const App = () => {
  return (
    <div className='app'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>

      <Route path='/coin/:coinId' element={<Coin></Coin>}></Route>
    </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App

















