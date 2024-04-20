import {
  faApple,
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo-main.png";
import "./LoginPage.scss";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserServices from "../../services/UserService";
import Loading from "../../Components/LoadingComponent/Loading";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutationHooks((data) => UserServices.loginUser(data));

  const { data, isLoading } = mutation;

  console.log("mutation: ", mutation);

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    mutation.mutate({
      email,
      password,
    });
  };

  return (
    <div className="container">
      <div className="form-login">
        <img src={logoImage} alt="logo" className="logo" />
        <br />
        <h1 className="heading">Login</h1>
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
            onChange={handleOnChangeEmail}
            placeholder="Enter your Email"
            className="input-text"
          />
          <input
            type="text"
            value={password}
            onChange={handleOnChangePassword}
            placeholder="Enter Your Password"
            className="input-text"
          />
          {data?.status === "ERROR" && (
            <span className="error">{data?.message}</span>
          )}
          <Loading isLoading={isLoading}>
            <button onClick={handleLogin}>Login</button>
          </Loading>
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
