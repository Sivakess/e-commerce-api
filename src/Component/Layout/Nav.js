import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../Layout/CartContext'; // Use the custom hook

const Nav = () => {
  const { getCartCount } = useCart(); // Get the cart count from the context

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          MyApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" activeClassName="active">
                PRODUCTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/login" className="btn btn-outline-dark ms-2">
              <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Sign Up
            </Link>

            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i> Cart
              <span className="badge bg-dark ms-1">
                {getCartCount()}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
