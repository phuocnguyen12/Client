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

  const handleToggleSearch = () => {
    setIsActiveSearch((prevVisible) => !prevVisible);
  };

  const handleToggleCart = () => {
    setIsActiveCart((prevVisible) => !prevVisible);
  };

  return (
    <header className="header">
      <Link className="logo" to={"#"}>
        <img src={logoImage} alt="logo" />
      </Link>

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

      <div className="icons">
        <div className="items" id="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="items" id="search-btn" onClick={handleToggleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        {isActiveSearch && (
          <form action="" className={"search-form"}>
            <input type="search" id="search-btn" placeholder="Search Here..." />
            <label for="search-box" className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
          </form>
        )}

        <div className="items" id="cart-btn" onClick={handleToggleCart}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>

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

        <div className="items" id="user-btn">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  );
};

export default Header;
