import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import "./ShoppingCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../../../apis/user";
import { getCurrent } from "../../../store/user/asyncActions";
import { toast } from "react-toastify";
import path from "../../../ultils/path";
import Swal from "sweetalert2";

const ShoppingCart = ({ active }) => {
  const { current } = useSelector((state) => state.user);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeCarts = async (pid) => {
    const response = await removeCart(pid);
    if (response.success) {
      dispatch(getCurrent());
    } else {
      toast.error("Fail");
    }
  };

  const handleCheckout = () => {
    if (!current?.cart || current.cart.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Your cart is empty",
        text: "Please add some products to your cart before checking out.",
        position: "top-center",
        customClass: {
          popup: "swal2-z-index",
        },
      });
    } else {
      navigate(`/member/${path.MY_CART}`);
    }
  };

  return (
    <div className={`shopping-cart ${active ? "active" : ""}`}>
      <div className="flex items-center justify-center my-4 pb-4 text-6xl font-bold border-b text-blue-400">
        <div>Your Cart</div>
      </div>

      {/* Check if cart is empty */}
      {!current?.cart || current.cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-4 text-3xl">
          <div className="my-6">Your cart is empty</div>
        </div>
      ) : (
        current.cart.map((el) => (
          <div key={el._id} className="box">
            <FontAwesomeIcon
              className="trash-icon"
              icon={faTrash}
              onClick={() => removeCarts(el?.product?._id)}
            />
            <img
              src={el?.product?.images}
              alt="Product"
              className="flex flex-col"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-bold">
                {el?.product?.title.length > 8
                  ? `${el.product.title.substring(0, 8)}...`
                  : el.product.title}
              </h3>
              <span className="text-xl">{el?.product?.price}$</span>
            </div>
          </div>
        ))
      )}

      <div className="border-t my-4"></div>
      <div className="btn" onClick={handleCheckout}>
        check out
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ShoppingCart;
