import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/icon-device.png";
import "./ShopPage.scss"

const ShopPage = () => {
  return (
    <div>
      <div className="heading">
        <h1>Our Shop</h1>
      </div>

      <section className="category">
        <h1 className="title">
          Our<span>Category</span>
          <Link className="link" to={"#"}>
            View All
          </Link>
        </h1>

        <div className="box-container">
          <Link to={"#"} className="box">
            <img src={banner1} alt="" />
            <h3>Electronic Components</h3>
          </Link>
        </div>

        <div className="box-container">
          <Link to={"#"} className="box">
            <img src={banner1} alt="" />
            <h3>Electronic Components</h3>
          </Link>
        </div>

        <div className="box-container">
          <Link to={"#"} className="box">
            <img src={banner1} alt="" />
            <h3>Electronic Components</h3>
          </Link>
        </div>

        <div className="box-container">
          <Link to={"#"} className="box">
            <img src={banner1} alt="" />
            <h3>Electronic Components</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
