import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import device from "../../assets/ModuleESP.png";
import "./HeaderComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isActiveCart, setIsActiveCart] = useState(false);
  const [isActiveUser, setIsActiveUser] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleToggleSearch = () => {
    setIsActiveSearch((prevVisible) => !prevVisible);
  };

  const handleToggleCart = () => {
    setIsActiveCart((prevVisible) => !prevVisible);
  };

  const handleToggleUser = () => {
    setIsActiveUser((prevVisible) => !prevVisible);
  };

  const handleToggleMenu = () => {
    setIsActiveMenu((prevVisible) => !prevVisible);
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link className="logo" to={"#"}>
        <img src={logoImage} alt="logo" />
      </Link>

      {/* Navbar */}
      <nav className="navbar">
        <Link className="menu-link" to={"#"}>
          Home
        </Link>
        <Link className="menu-link" to={"#"}>
          Device
        </Link>
        <Link className="menu-link" to={"#"}>
          Service
        </Link>
        <Link className="menu-link" to={"#"}>
          Blog
        </Link>
        <Link className="menu-link" to={"#"}>
          Contact
        </Link>
      </nav>

      {/* Icon */}
      <div className="icons">
        {/* Menu Icon */}
        <div className="items" id="menu-btn" onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Navbar Form */}
        {isActiveMenu && (
          <form className="navbar-form">
            <Link className="menu-link" to={"#"}>
              Home
            </Link>
            <Link className="menu-link" to={"#"}>
              Device
            </Link>
            <Link className="menu-link" to={"#"}>
              Service
            </Link>
            <Link className="menu-link" to={"#"}>
              Blog
            </Link>
            <Link className="menu-link" to={"#"}>
              Contact
            </Link>
          </form>
        )}

        {/* Search Icon */}
        <div className="items" id="search-btn" onClick={handleToggleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        {/* Search Form */}
        {isActiveSearch && (
          <form action="" className={"search-form"}>
            <input type="search" id="search-btn" placeholder="Search Here..." />
            <label for="search-box" className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
          </form>
        )}

        {/* Cart Icon */}
        <div className="items" id="cart-btn" onClick={handleToggleCart}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>

        {/* Cart Form */}
        {isActiveCart && (
          <form className="shopping-cart">
            <div className="box">
              <FontAwesomeIcon icon={faTrashCan} className="trash" />
              <img src={device} alt="device" className="device" />
              <div className="content">
                <h3>Sensor Circuit</h3>
                <span className="price">$2.99</span>
                <span className="quantity">Qty: 1</span>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faTrashCan} className="trash" />
              <img src={device} alt="device" className="device" />
              <div className="content">
                <h3>Sensor Circuit</h3>
                <span className="price">$2.99</span>
                <span className="quantity">Qty: 1</span>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faTrashCan} className="trash" />
              <img src={device} alt="device" className="device" />
              <div className="content">
                <h3>Sensor Circuit</h3>
                <span className="price">$2.99</span>
                <span className="quantity">Qty: 1</span>
              </div>
            </div>
            <div className="total">Total: $2.99</div>
            <Link to={"#"} className="btn">
              Checkout
            </Link>
          </form>
        )}

        {/* User Icon */}
        <div className="items" id="user-btn" onClick={handleToggleUser}>
          <FontAwesomeIcon icon={faUser} />
        </div>

        {/* User Form */}
        {isActiveUser && (
          <form action="" className="user-form">
            <h3>Your Name</h3>
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
