import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getProducts } from "../../apis/product";
import { Pagination } from "../../Components";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import "./ShopPage.scss";
const ShopPage = () => {
  const { categories } = useSelector((state) => state.app);
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [params] = useSearchParams();
  const fetchProducts = async (params) => {
    const product = await getProducts({
      ...params,
      limit: process.env.REACT_APP_LIMIT,
    });
    if (product.success) {
      setProducts(product);
    }
    const [bestSeller, newProducts] = await Promise.all([
      getProducts({ sort: "-sold" }),
      getProducts({ sort: "-createdAt" }),
    ]);
    // console.log({ bestSeller, newProducts });
  };
  const handleViewDetail = (product) => {
    setSelectedProduct(product);
  };
  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };
  useEffect(() => {
    const queries = Object.fromEntries([...params]);
    fetchProducts(queries);
  }, [params]);
  return (
    <div>
      <section className="category">
        <h1 className="heading">
          products <span>categories</span>
        </h1>
        <div className="box-container">
          {categories?.map((el) => (
            <Link to={"#"} className="box">
              <h3>{el.title}</h3>
            </Link>
          ))}
        </div>
      </section>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>
        <div className="box-container">
          {products?.products?.map((el, index) => (
            <div className="box" key={index}>
              <img src={el.images} alt="" />
              <h3 key={index}>{el.title}</h3>
              <div className="price">{el.price}$</div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              {/* <Link to={`/details/${el._id}`} className="btn">
                add to cart
              </Link> */}
              <button className="btn" onClick={() => handleViewDetail(el)}>
                View details
              </button>
            </div>
          ))}
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onClose={handleCloseDetail}
            />
          )}
        </div>
      </section>
      <div className="w-4/6 text-xl m-auto my-4 flex justify-end">
        <Pagination totalCount={products?.counts} />
      </div>
    </div>
  );
};
export default ShopPage;