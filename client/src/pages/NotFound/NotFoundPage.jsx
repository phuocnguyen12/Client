import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <h1>Page Not Found</h1>
      <p>The Page You Requested Could Not Be Found </p>
      <Link to="/" className="btn">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
