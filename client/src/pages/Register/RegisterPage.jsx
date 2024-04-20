import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo-main.png";
import "./RegisterPage.scss";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserServices from "../../services/UserService";
import Loading from "../../Components/LoadingComponent/Loading";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const mutation = useMutationHooks((data) => UserServices.registerUser(data));

  const { data, isLoading } = mutation;

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = () => {
    mutation.mutate({ email, name, password, confirmPassword });
    console.log("Register: ", email, name, password, confirmPassword);
  };

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
            value={email}
            onChange={handleOnChangeEmail}
            placeholder="Enter Your Email"
            className="input-text"
          />
          <input
            type="text"
            value={name}
            onChange={handleOnChangeName}
            placeholder="Enter Your UserName"
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
          <div className="terms">
            <input
              type="checkbox"
              name="check-box"
              className="input-checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" className="sub-link">
              {" "}
              Accept terms and services
            </label>
          </div>
          {data?.state === "ERROR" && (
            <span className="error">{data?.message}</span>
          )}
          <Loading isLoading={isLoading}>
            <button onClick={handleRegister}>Register</button>
          </Loading>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
