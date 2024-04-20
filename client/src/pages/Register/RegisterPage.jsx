import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo-main.png";
import "./RegisterPage.scss";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="form-register">
        <img src={logoImage} alt="logo" className="logo" />
        <br />
        <h1 className="heading">Register</h1>
        <p className="sub-text">
          Already have account?{" "}
          <Link to="/login" className="sub-link">
            Login
          </Link>
        </p>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input-text"
          />
          <input
            type="text"
            name="username"
            placeholder="Enter Your UserName"
            className="input-text"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="input-text"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Your Password"
            className="input-text"
          />
          <br />
          <div className="terms">
            <input
              type="checkbox"
              name="check-box"
              className="input-checkbox"
              id="checkbox"
            />
            <label for="checkbox" className="sub-link">
              {" "}
              Accept terms and services
            </label>
          </div>
          <button>Register</button>
        </div>
        <span className="error">Error</span>
      </div>
    </div>
  );
};

export default RegisterPage;
