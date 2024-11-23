import {
  faMagnifyingGlass,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { getProducts } from "../../apis/product";
import { updateCart } from "../../apis/user";

import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import { getCurrent } from "../../store/user/asyncActions";
import "./ShopPage.scss";
import { Pagination, InputField } from "../../Components";
import "react-toastify/dist/ReactToastify.css";
import useDebounce from "../../hooks/useDebounce";

const ShopPage = () => {
  const { categories } = useSelector((state) => state.app);
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [queries, setQueries] = useState({ q: "" });
  const queriesDebounce = useDebounce(queries.q, 800);
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current } = useSelector((state) => state.user);

  // API call function to get product
  const fetchProducts = async (params) => {
    const product = await getProducts({
      ...params,
      limit: process.env.REACT_APP_LIMIT,
    });
    if (product.success) {
      setProducts(product);
    }
  };

  // Handle when the user selects a category
  const handleCategory = (category) => {
    if (selectedCategory === category._id) {
      setSelectedCategory(null);
      fetchProducts({ q: queries.q });
    } else {
      setSelectedCategory(category._id);
      fetchProducts({ category: category._id, q: queries.q });
    }
  };

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
  };

  // Process adding products to the cart
  const handleAddToCart = async (product) => {
    if (!current)
      return Swal.fire({
        title: "Almost...",
        text: "Please login first!",
        icon: "info",
        cancelButtonText: "Not now!",
        showCancelButton: true,
        confirmButtonText: "Go Login Page",
      }).then((rs) => {
        if (rs.isConfirmed) navigate(`/login`);
      });
    const response = await updateCart({ pid: product._id });
    if (response.success) {
      toast.success("Add success", { position: "top-center" });
      dispatch(getCurrent());
    } else {
      toast.error("Fail");
    }
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  // Update product listings when keywords or categories change
  useEffect(() => {
    const queries = Object.fromEntries([...params]);
    if (queriesDebounce) {
      queries.q = queriesDebounce;
    }
    if (selectedCategory) {
      queries.category = selectedCategory;
    }
    fetchProducts(queries);
  }, [params, queriesDebounce, selectedCategory]);

  // useEffect(() => {
  //   if (queriesDebounce) {
  //     console.log("Debounced search term:", queriesDebounce); // Check debounce value
  //     fetchProducts(queriesDebounce);
  //   }
  // }, [queriesDebounce]);

  return (
    <div>
      <ToastContainer />
      <section className="category">
        <h1 className="heading">
          <span>Products </span>Categories
        </h1>

        <div className="box-container">
          {categories?.map((el) => (
            <Link
              to={`#`}
              className="box"
              key={el._id}
              onClick={() => handleCategory(el)}
            >
              <h3>{el.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="search">
        <InputField
          className="text-black"
          nameKey={"q"}
          value={queries.q}
          setValue={setQueries}
          placeholder="Search..."
          isHideLabel
          style="p-2 w-10"
        />
        {/* <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} /> */}
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          Our <span>Products</span>
        </h1>

        <div className="box-container">
          {products?.products?.map((el, index) => (
            <div className="box" key={index}>
              <img src={el.images} alt={el.title} />
              <h3>
                {el.title.length > 10
                  ? `${el.title.substring(0, 10)}...`
                  : el.title}
              </h3>
              <div className="price">{el.price}$</div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>

              <div className="btn-container">
                <button className="btn" onClick={() => handleAddToCart(el)}>
                  Add to cart
                </button>
                <button className="btn" onClick={() => handleViewDetail(el)}>
                  View details
                </button>
              </div>
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
