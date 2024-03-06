import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import location from "../images/icons8-location-51.png";
//import logo from '../images/logo.png';
import logo from "../images/icons8-amazon-51.png";
//import logo from '../images/amazon_logo.png'
import search_icon from "../images/search-icon.png";
import cart_icon from "../images/cart-icon2.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="logo">
            <Link to='/'><img src={logo} alt="logo" /></Link>
          
        </div>
        <div className="location-div">
          <img src={location} alt="location" />
          <p>
            Deliver to
            <br /> India
          </p>
        </div>
      </div>
      <div className="nav-center">
        <select name="category" id="">
          <option value="all">All</option>
          <option value="cloths">Cloths</option>
          <option value="electronics">Electronics</option>
          <option value="baby">Baby</option>
          <option value="mens">Mens</option>
          <option value="womens">Womens</option>
        </select>
        <input type="text" />
        <button>
          <img src={search_icon} alt="serch-logo" />
        </button>
      </div>
      <div className="nav-right">
        <select name="language" id="">
          <option value="eng">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <div className="login">
            <Link to='/login-signup'>
            <p>Hello, Sign in</p>
          <h3>Accounts & Lists</h3>
            </Link>
          
        </div>
        <div className="return-order">
        <Link to='return-orders'>
        <p>Returns</p>
          <h3>& Orders</h3>
        </Link>
          
        </div>
        <div className="cart">
            
            <span>7</span>
          
          <Link to = '/cart'><img src={cart_icon} alt="cart" /></Link>
          
          <p>Cart</p>
        
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
