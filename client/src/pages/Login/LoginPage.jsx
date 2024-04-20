import {
  faApple,
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo-main.png";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="form-login">
        <img src={logoImage} alt="logo" className="logo" />
        <br />
        <h1 className="heading">Login</h1>
        <p className="sub-text">Hello, Login To Continue !</p>
        <br />
        <p className="sub-text">
          Don't have an account? {" "}
          <Link to="/register" className="sub-link">
            Register and get started!
          </Link>
        </p>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Enter Your UserName"
            className="input-text"
          />
          <input
            type="text"
            name="password"
            placeholder="Enter Your Password"
            className="input-text"
          />
          <br />
          <button>Login</button>
        </div>
        <span className="error">Error</span>
        <p className="forgot-pass">Forgot password ?</p>
        <div className="or">
          <span className="abs-text">Or</span>
          <hr />
        </div>
        <br />
        <div className="icon">
          <FontAwesomeIcon icon={faFacebookF} className="fb" />
          <FontAwesomeIcon icon={faApple} className="apple" />
          <FontAwesomeIcon icon={faTwitter} className="tw" />
          <FontAwesomeIcon icon={faGoogle} className="gg" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
