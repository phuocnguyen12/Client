import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../apis/product";
import Swal from "sweetalert2";

// This value is from the props in the UI
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({
  currency,
  showSpinner,
  amount,
  payload,
  setIsSuccess,
}) => {
  const [{ isPending, options }, dispatch] = usePayPalScriptReducer();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  const handleSaveOrder = async () => {
    const response = await createOrder({ ...payload, status: "Success" });
    if (response.success) {
      setIsSuccess(true);
      setTimeout(() => {
        Swal.fire("Congrat!", "Order was created", "success").then(() => {
          navigate("/");
        });
      }, 1500);
    }
  };

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[style, currency, amount]}
        fundingSource={undefined}
        createOrder={(data, actions) =>
          actions.order
            .create({
              purchase_units: [
                { amount: { currency_code: currency, value: amount } },
              ],
            })
            .then((orderId) => orderId)
            .catch((error) => {
              console.error("Order creation failed:", error);
              // Perform error handling (e.g., show an error message to the user)
            })
        }
        onApprove={(data, actions) =>
          actions.order.capture().then(async (response) => {
            if (response.status === "COMPLETED") {
              handleSaveOrder();
            }
          })
        }
      />
    </>
  );
};

export default function Paypal({ amount, payload, setIsSuccess }) {
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px", margin: "auto" }}>
      <PayPalScriptProvider
        options={{ clientId: "test", components: "buttons", currency: "USD" }}
      >
        <ButtonWrapper
          payload={payload}
          setIsSuccess={setIsSuccess}
          currency={"USD"}
          amount={amount}
          showSpinner={false}
        />
      </PayPalScriptProvider>
    </div>
  );
}
