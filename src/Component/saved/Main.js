import React from 'react';
import Nav from '../Layout/Nav';
import Header from '../Layout/Header';
import Home from '../Layout/Home';
import Products from '../Layout/Products';
import Footer from '../Layout/Footer';
 import Login from './Login';
import { Routes,  Route } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Nav/>
      <Header />
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/products' element= {<Products/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Main
