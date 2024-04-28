import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/app";
import banner1 from "../../assets/icon-device.png";
import product from "../../assets/arduino-nano.png";
import "./ShopPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const ShopPage = () => {
  const [categories, setCategories] = useState(null);
  const fetchCategories = async () => {
    const response = await getCategories();
    if (response.success) {
      setCategories(response.getAllCategory);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <section className="category">
        <h1 className="heading">
          Products <span>Categories</span>
        </h1>

        <div className="box-container">
          {categories?.map((el, index) => (
            <Link to={"#"} className="box">
              <img src={banner1} alt="" />
              <h3 key={index}>{el.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          Our <span>Products</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={product} alt="" />
            <h3>ESP8266 WIFI Module</h3>
            <div className="price">$4.99/ -- 12.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              Add to Cart
            </button>
          </div>

          <div className="box">
            <img src={product} alt="" />
            <h3>ESP8266 WIFI Module</h3>
            <div className="price">$4.99/ -- 12.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              Add to Cart
            </button>
          </div>

          <div className="box">
            <img src={product} alt="" />
            <h3>ESP8266 WIFI Module</h3>
            <div className="price">$4.99/ -- 12.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              Add to Cart
            </button>
          </div>

          <div className="box">
            <img src={product} alt="" />
            <h3>ESP8266 WIFI Module</h3>
            <div className="price">$4.99/ -- 12.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              Add to Cart
            </button>
          </div>

          <div className="box">
            <img src={product} alt="" />
            <h3>ESP8266 WIFI Module</h3>
            <div className="price">$4.99/ -- 12.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
