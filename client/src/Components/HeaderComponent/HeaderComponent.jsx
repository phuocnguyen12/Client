import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import "./HeaderComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar/Navbar";
import SearchForm from "./SearchForm/SearchForm";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import UserForm from "./UserForm/UserForm";

const Header = () => {
  // const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isActiveCart, setIsActiveCart] = useState(false);
  const [isActiveAuth, setIsActiveAuth] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  window.onscroll = () => {
    setIsActiveMenu(false);
    setIsActiveCart(false);
    setIsActiveAuth(false);
    // setIsActiveSearch(false);
  };

  const handleSearchClick = () => {
    // setIsActiveSearch((prevVisible) => !prevVisible);
    setIsActiveAuth(false);
    setIsActiveCart(false);
    setIsActiveMenu(false);
  };

  const handleCartClick = () => {
    setIsActiveCart((prevVisible) => !prevVisible);
    setIsActiveAuth(false);
    // setIsActiveSearch(false);
    setIsActiveMenu(false);
  };

  const handleAuthClick = () => {
    setIsActiveAuth((prevVisible) => !prevVisible);
    // setIsActiveSearch(false);
    setIsActiveCart(false);
    setIsActiveMenu(false);
  };

  const handleMenuClick = () => {
    setIsActiveMenu((prevVisible) => !prevVisible);
    setIsActiveAuth(false);
    setIsActiveCart(false);
    // setIsActiveSearch(false);
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link className="logo" to={"/"}>
        <img src={logoImage} alt="logo" />
      </Link>

      <Navbar active={isActiveMenu} />

      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuClick}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        {/* <button type="button" id="search-btn" onClick={handleSearchClick}>
          <FontAwesomeIcon className="fa-icon" icon={faMagnifyingGlass} />
        </button> */}
        <button type="button" id="cart-btn" onClick={handleCartClick}>
          <FontAwesomeIcon className="fa-icon" icon={faCartShopping} />
        </button>
        <button type="button" id="user-btn" onClick={handleAuthClick}>
          <FontAwesomeIcon className="fa-icon" icon={faUser} />
        </button>
      </div>

      {/* <SearchForm active={isActiveSearch} /> */}
      <ShoppingCart active={isActiveCart} />
      <UserForm active={isActiveAuth} />
    </header>
  );
};

export default Header;
