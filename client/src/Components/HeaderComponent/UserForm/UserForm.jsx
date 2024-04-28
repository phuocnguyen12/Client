import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./UserForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../../../store/user/asyncActions.js";
import { logout } from "../../../store/user/userSlice.js";

const UserForm = ({ active }) => {
  const dispatch = useDispatch();
  const { isLoggedIn, current } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCurrent());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <form className={`user-form ${active ? "active" : ""}`}>
      {isLoggedIn ? (
        <div>
          {`welcome,${current?.firstname} ${current?.lastname}`}
          <button className="btn" onClick={() => dispatch(logout())}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h3>Login Now</h3>
          <div className="box">
            <input type="email" placeholder="your email" />
          </div>
          <div className="box">
            <input type="password" placeholder="your password" />
          </div>
          <p>
            Forgot Your Password <a href="/">Click Here</a>
          </p>
          <p>
            Don't Have An Account <a href="/">Create Now</a>
          </p>
          <button type="submit" className="btn">
            Login Now
          </button>
        </div>
      )}
    </form>
  );
};

UserForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;

export default UserForm;
