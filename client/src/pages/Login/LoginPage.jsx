import {
  faApple,
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {login} from "../../apis/user"
import logoImage from "../../assets/Logo-main.png";
import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await login(email, password);

      if (response.success) {
        setError(response.message);
        setTimeout(() => {
          navigate("/"); // Navigate to the home page route
        }, 3000); // 3000 milliseconds (3 seconds)
      } else {
        setError(response.message);
      }
      // Handle the response, e.g., store token, user info, etc.
      console.log("Login successful:", response);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // If the backend provided an error message, update the error state
        setError(error.response.data.error);
      } else {
        setError("An error occurred during login"); // Fallback message if no specific error message from backend
      }
      console.error("Error during login:", error);
    }
  };

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
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your Email"
            className="input-text"
          />

          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Your Password"
            className="input-text"
          />

          {/* {<span className="error">error</span>} */}
          {error && <span className="error">{error}</span>}

          <button onClick={handleLogin}>Login</button>
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
