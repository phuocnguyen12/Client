import {
  faApple,
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo-main.png";
import "./LoginPage.scss";

const LoginPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [payload, setPayload] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [isRegister, setIsRegister] = useState(false);
  const handleSubmit = useCallback(() => {
    console.log(payload);
  }, [payload]);

  // const handleOnChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleOnChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <div className="container">
      <div className="form-login">
        <img src={logoImage} alt="logo" className="logo" />
        <br />

        <h1 className="login">Login</h1>

        <p className="sub-text">Hello, Login To Continue !</p>
        <br />
        <p className="sub-text">
          Don't have an account?{" "}
          <Link to="/register" className="sub-link">
            Register and get started!
          </Link>
        </p>

        <div className="form-group">
          <input
            type="text"
            value={payload.email}
            // onChange={handleOnChangeEmail}
            onChange={setPayload}
            placeholder="Enter your Email"
            className="input-text"
          />

          <input
            type="password"
            value={payload.password}
            // onChange={handleOnChangePassword}
            onChange={setPayload}
            placeholder="Enter Your Password"
            className="input-text"
          />

          {<span className="error">error</span>}

          <button onClick={handleSubmit}>Login</button>
        </div>

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
