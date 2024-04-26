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
  const [isActiveAuth, setIsActiveAuth] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleSearchClick = () => {
    setIsActiveSearch((prevVisible) => !prevVisible);
    setIsActiveAuth(false);
    setIsActiveCart(false);
    setIsActiveMenu(false);
  };

  const handleCartClick = () => {
    setIsActiveCart((prevVisible) => !prevVisible);
    setIsActiveAuth(false);
    setIsActiveSearch(false);
    setIsActiveMenu(false);
  };

  const handleAuthClick = () => {
    setIsActiveAuth((prevVisible) => !prevVisible);
    setIsActiveSearch(false)
    setIsActiveCart(false);
    setIsActiveMenu(false);
  };

  const handleMenuClick = () => {
    setIsActiveMenu((prevVisible) => !prevVisible);
    setIsActiveAuth(false);
    setIsActiveCart(false);
    setIsActiveSearch(false)
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link className="logo" to={"#"}>
        <img src={logoImage} alt="logo" />
      </Link>

      {/* Navbar */}
      <nav className={`navbar ${isActiveMenu ? "active" : ""}`}>
        <Link className="menu-link" to={"/"}>
          Home
        </Link>
        <Link className="menu-link" to={"/shop"}>
          Shop
        </Link>
        <Link className="menu-link" to={"#"}>
          Service
        </Link>
        <Link className="menu-link" to={"#"}>
          Review
        </Link>
        <Link className="menu-link" to={"*"}>
          Blog
        </Link>
        <Link className="menu-link" to={"/about"}>
          About
        </Link>
        <Link className="menu-link" to={"#"}>
          Contact
        </Link>
      </nav>

      {/* Icon */}
      <div className="icons">
        {/* Menu Icon */}
        <div className="items" id="menu-btn" onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Search Icon */}
        <div className="items" id="search-btn" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        {/* Cart Icon */}
        <div className="items" id="cart-btn" onClick={handleCartClick}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>

        {/* User Icon */}
        <div className="items" id="user-btn" onClick={handleAuthClick}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      {/* Search Form */}
      <form action="" className={`search-form ${isActiveSearch ? "active" : ""}`}>
        <input type="search" placeholder="Search here..." id="search-box" />
        <label htmlFor="search-box" className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
      </form>

      {/* Shopping Cart */}
      <div className={`shopping-cart ${isActiveCart ? "active" : ""}`}>
        <div className="box">
          <FontAwesomeIcon icon={faTrashCan} className="trash" />
          <img src={device} alt="device" />
          <div className="content">
            <h3>Module Sensor</h3>
            <span className="quantity">2</span>
            <span className="multiply">x</span>
            <span className="price">$12.99</span>
          </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faTrashCan} className="trash" />
          <img src={device} alt="device" />
          <div className="content">
            <h3>Module Sensor</h3>
            <span className="quantity">2</span>
            <span className="multiply">x</span>
            <span className="price">$12.99</span>
          </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faTrashCan} className="trash" />
          <img src={device} alt="device" />
          <div className="content">
            <h3>Module Sensor</h3>
            <span className="quantity">2</span>
            <span className="multiply">x</span>
            <span className="price">$12.99</span>
          </div>
        </div>
        <h3 className="total">
          Total: <span>$38.97</span>
        </h3>
        <Link to={"#"} className="btn">
          Check Out
        </Link>
      </div>

      {/* Auth Form */}
      <form action="" className={`auth-form ${isActiveAuth ? "active" : ""}`}>
        <h3>Auth Form</h3>
      </form>
    </header>
  );
};

export default Header;
