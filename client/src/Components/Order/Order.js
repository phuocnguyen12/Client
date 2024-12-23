import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../../apis/user";
import { getCurrent } from "../../store/user/asyncActions";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Order = ({ el, handleChangeQuantities, defaultQuantity = 1 }) => {
  const [quantity, setQuantity] = useState(() => defaultQuantity);
  const dispatch = useDispatch;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeCarts = async (pid) => {
    const response = await removeCart(pid);
    if (response.success) {
      dispatch(getCurrent());
    } else {
      toast.error("Fail");
    }
  };

  useEffect(() => {
    handleChangeQuantities &&
      handleChangeQuantities(el?.product?._id, quantity);
  }, [quantity]);

  return (
    <div>
      <div className="w-main mx-auto font-bold my-8 flex text-2xl justify-center items-center">
        <div className="w-full flex items-center justify-center gap-4">
          <div>
            <img
              src={el?.product?.images}
              alt="Product"
              className="w-20 h-20 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              {el?.product?.title.length > 10
                ? `${el.product.title.slice(0, 10)}...`
                : el.product.title}
            </h3>
          </div>
        </div>
        <div className="w-full text-center text-2xl">
          {/* {el?.quantity} */}
          <button onClick={() => handleDecrease()}>-</button>
          <span className="mx-4">{quantity}</span>
          <button onClick={() => handleIncrease()}>+</button>
        </div>
        <div className="w-full text-center text-2xl">
          <span>{el?.product?.price * quantity} $</span>
        </div>

        <div className="w-full text-center">
          <FontAwesomeIcon
            className="w-[20px] h-[20px] object-cover hover:text-blue-500 cursor-pointer"
            icon={faTrash}
            onClick={() => removeCarts(el?.product?._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
