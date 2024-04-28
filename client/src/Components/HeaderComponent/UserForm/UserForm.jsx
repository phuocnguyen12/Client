import React from 'react';
import PropTypes from "prop-types";
import "./UserForm.scss"

const UserForm = ({active}) => (
    <form className={`user-form ${active ? "active" : ""}`}>
    <h3>Login Now</h3>
    <div className="box">
      <input type="email" placeholder="your email" />
    </div>
    <div className="box">
      <input type="password" placeholder="your password" />
    </div>
    <p>
      Forgot Your Password? <a href="/">click here</a>
    </p>
    <p>
      don't have an account? <a href="/">create now</a>
    </p>
    <button type="submit" className="btn">
      Login Now
    </button>
  </form>
);

UserForm.propTypes =  {
    active: PropTypes.bool,
}.isRequired;

export default UserForm;
