import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/icon-device.png";
import product from "../../assets/arduino-nano.png";
import "./ShopPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ShopPage = () => {
  return (
    <div>
      <div className="heading">
        <h1>Our Shop</h1>
      </div>

      <section className="category">
        <h1 className="title">
          Our <span>Category</span>
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

      <section className="products">
        <h1 className="title">
          Our <span>Products</span>
          <Link className="link" to={"#"}>
            View All
          </Link>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>Module Sensor</h3>
              <div className="price">$12.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>Module Sensor</h3>
              <div className="price">$12.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>Module Sensor</h3>
              <div className="price">$12.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>Module Sensor</h3>
              <div className="price">$12.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>Module Sensor</h3>
              <div className="price">$12.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
