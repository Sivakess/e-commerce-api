import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';


// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App';
// import Login from './Component/Login';
// import Register from './Component/Register';
// import Home from './Component/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ShopContextProvider>
    <App />
    </ShopContextProvider>
  </BrowserRouter>,

  
    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/" element={<App />}>
    //             <Route path="login" element={<Login />} />
    //             <Route path="register" element={<Register />} />
    //             <Route path="home" element={<Home />} />
    //         </Route>
    //     </Routes>
    // </BrowserRouter>,
  
  
);
// try {
//   reportWebVitals();
// } catch (error) {
//   console.error('Error reporting web vitals:', error);
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
