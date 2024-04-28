import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, getProducts } from "../../apis/app";
import banner1 from "../../assets/icon-device.png";
import "./ShopPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const ShopPage = () => {
  // const [categories, setCategories] = useState(null);
  const { categories } = useSelector((state) => state.app);
  const [products, setProducts] = useState(null);
  const fetchCategories = async () => {
    const response = await getCategories();
    const product = await getProducts();
    if (response.success) {
      // setCategories(response.getCategoryStatus);
      setProducts(product.products);
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
            <Link key={el.id} to={"#"} className="box">
              <img src={banner1} alt="" />
              <h3>{el.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          Our <span>Products</span>
        </h1>

        <div className="box-container">
          {products?.map((el, index) => (
            <div className="box" key={index}>
              <img src={el.images} alt="" />

              {/* <img src={product} alt="" /> */}
              <h3 key={index}>{el.title}</h3>
              <div className="price">{el.price}</div>
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
