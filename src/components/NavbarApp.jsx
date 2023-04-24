import React from 'react';
import "../components/css/NavbarKorzinka.css"
import { Link } from "react-router-dom";
const NavbarApp = () => {
    return (
      <div className="Magazin">
        <div className="header">
          <h1>UseReducer</h1>
          <span className="Korzinka">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className="total-phone">0</p>
          </span>
          <Link className="LoginBtn" to="/Login">
            Login
          </Link>
        </div>
      </div>
    );
};

export default NavbarApp;