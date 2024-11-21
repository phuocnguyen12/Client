import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "./SearchForm.scss";
import { useSearchParams, useNavigate } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import { getProducts } from "../../../apis";


const SearchForm = ({ active }) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState(0);
  const queriesDebounce = useDebounce(searchTerm, 800);

  const handleSearchProducts = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${searchTerm}`);
    } else {
      navigate(`/shop`);
    }
  };

  const fetchProducts = async (params) => {
    const response = await getProducts({
      ...params,
      limit: process.env.REACT_APP_LIMIT,
    });
    if (response.success) {
      setCounts(response.counts);
      setProducts(response.products);
    }
  };
  

  useEffect(() => {
    const queries = Object.fromEntries([...params]);

    if (queriesDebounce) {
      queries.q = queriesDebounce;
    }
    fetchProducts(queries);
  }, [params, queriesDebounce]);

  // useEffect(() => {
  //   if (queriesDebounce) {
  //     console.log("Debounced search term:", queriesDebounce); // Check the debounce value
  //     fetchProducts(queriesDebounce);
  //   }
  // }, [queriesDebounce]);
  

  return (
    <div className={`search-container ${active ? "active" : ""}`}>
      <form
        onSubmit={handleSearchProducts}
        className={`search-form ${active ? "active" : ""}`}
      >
        <label htmlFor="search-form">
          <input
            type="search"
            placeholder="Search Here..."
            id="search-box"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (e.target.value.trim() === "") {
                navigate(`/shop`);
                setProducts([]);
              }
            }}
          />
          <button type="submit">
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          </button>
        </label>
      </form>

      {products.length > 0 && (
        <div className="search-results">
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <a href={`/product/${product.id}`}>{product.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

SearchForm.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default SearchForm;
