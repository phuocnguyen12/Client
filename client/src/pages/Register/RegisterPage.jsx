import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {register} from "../../apis/user"
import logoImage from "../../assets/Logo-main.png";
import "./RegisterPage.scss";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOnChangeMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await register(
        email,
        firstName,
        lastName,
        password,
        mobile
      );

      if (response.success) {
        setError(response.message);
        toast.success("success");
        setTimeout(() => {
          navigate("/login"); 
        }, 1000); 

      } else {
        setError(response.message);
      }
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred during register"); // Fallback message if no specific error message from backend
      }
      console.error("Error during register:", error);
    }
  };

  return (
    <div className="container-bg">
      <div className="form-register">
      <Link className="logo" to={"/"}>
          <img src={logoImage} alt="logo" className="logo" />
        </Link>
        <br />
        <h1 className="register">Register</h1>
        <p className="sub-text">
          Already have account?{" "}
          <Link to="/login" className="sub-link">
            Login
          </Link>
        </p>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={handleOnChangeEmail}
            placeholder="Enter Your Email"
            className="input-text"
          />
          
          <input
            type="text"
            value={firstName}
            onChange={handleOnChangeFirstName}
            placeholder="Your firstName"
            className="input-text"
          />

          <input
            type="text"
            value={lastName}
            onChange={handleOnChangeLastName}
            placeholder="Your lastName"
            className="input-text"
          />

          <input
            type="password"
            value={password}
            onChange={handleOnChangePassword}
            placeholder="Enter Your Password"
            className="input-text"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={handleOnChangeConfirmPassword}
            placeholder="Confirm Your Password"
            className="input-text"
          />
          <br />
          <input
            type="number"
            value={mobile}
            onChange={handleOnChangeMobile}
            placeholder="Mobile"
            className="input-text"
          />

          {error && <span className="error">{error}</span>}

          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
