import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Routes,Route } from 'react-router-dom';

// import Home from './pages/Home';
// import Collection from './pages/Collection';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Product from './pages/Product';
// import Cart from './pages/Cart';
// import Login from './pages/Login';
// import PlaceOrder from './pages/PlaceOrder';
// import Orders from './pages/Orders';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
// import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

import Nav from './Component/Layout/Nav';
import Home from './Component/Layout/Home';
import Products from './Component/Layout/Products';
import Footer from './Component/Layout/Footer';
import Login from './Component/Layout/Login';
import SignInSuccess from './Component/Layout/SignInSuccess';
import SignUpSuccess from './Component/Layout/SignUpSuccess';
import Cart from './Component/Layout/Cart';
import { CartProvider } from './Component/Layout/CartContext';
import { Routes, Route } from 'react-router-dom';




const App = () => {

  

  return (
   
  //   <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
  //     <ToastContainer />
  //     <Navbar />  
  //     <SearchBar/>
  //     <Routes>
  //        <Route path='/' element={<Home/>} /> 
  //        <Route path='/collection' element={<Collection/>}  />
  //        <Route path='/about' element={<About/>}/>
  //        <Route path='/contact' element={<Contact/>}/>
  //        <Route path='/product/:productId' element={<Product/>}/>
  //        <Route path='/cart' element={<Cart/>}/>
  //        <Route path='/login' element={<Login/>}/>
  //        <Route path='/place-order' element={<PlaceOrder/>}/>
  //        <Route path='/orders' element={<Orders/>}/>   
  //     </Routes>
  //     <Footer/>
  // </div>

  <CartProvider>
  <div>
    <Nav />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup-success" element={<SignUpSuccess />} />
      <Route path="/signin-success" element={<SignInSuccess />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>

    <Footer />
  </div>
</CartProvider>

);
}

export default App;
