import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png"
import toggleClose from "../../assets/menu-close.png"
import "./HeaderComponent.scss"

const Header = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="navigation">
          <img src={logoImage} alt="Logo" className="logo" />
          <input type="checkbox" className="toggle-check" />
          <ul className="menu">
            <div className="menu-item toggle-close">
              <label htmlFor="toggle-check">
                <img src={toggleClose} alt="Close" />
              </label>
            </div>
            <li className="menu-item">
              <Link className="menu-link" to="#">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="#">
                Device
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="#">
                Service
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="#">
                Blog
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="#">
                Contact
              </Link>
            </li>
            <li className="auth">
              <Link className="button-login" to="#">
                LogIn
              </Link>
              <Link className="button-signup" to="#">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
