import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import device from "../../../assets/ModuleESP.png";
import PropTypes from "prop-types";
import React from "react";
import "./ShoppingCart.scss";

const ShoppingCart = ({ active }) => (
  <div className={`shopping-cart ${active ? "active" : ""}`}>
    <div className="box">
      <FontAwesomeIcon className="trash-icon" icon={faTrash} />
      <img src={device} alt="Product" />
      <div className="content">
        <h3>ModuleESP</h3>
        <span className="price">$4.99</span>
        <span className="quantity">qty: 1</span>
      </div>
    </div>
    <div className="box">
      <FontAwesomeIcon className="trash-icon" icon={faTrash} />
      <img src={device} alt="Product" />
      <div className="content">
        <h3>ModuleESP</h3>
        <span className="price">$4.99</span>
        <span className="quantity">qty: 1</span>
      </div>
    </div>
    <div className="box">
      <FontAwesomeIcon className="trash-icon" icon={faTrash} />
      <img src={device} alt="Product" />
      <div className="content">
        <h3>ModuleESP</h3>
        <span className="price">$4.99</span>
        <span className="quantity">qty: 1</span>
      </div>
    </div>
    <div className="btn">Check Out</div>
  </div>
);

ShoppingCart.propTypes = {
    active: PropTypes.bool.isRequired,
  };

export default ShoppingCart;
