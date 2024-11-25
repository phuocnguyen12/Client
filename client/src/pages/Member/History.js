import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const History = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3515/order", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Fetched data:", result);

        if (result && Array.isArray(result.response)) {
          setOrders(result.response);
          setFilteredOrders(result.response);
        } else {
          console.warn("Unexpected data format:", result);
          setOrders([]);
          setFilteredOrders([]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [token]);

  // Filter orders based on search keywords
  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = orders.filter(
        (order) =>
          // order.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.total.toString().includes(searchTerm) ||
          order.products.some((productObj) =>
            productObj.product?.title
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders);
    }
  }, [searchTerm, orders]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Order History</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search orders..."
          className="border rounded-lg px-4 py-4 text-black w-full focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredOrders && filteredOrders.length > 0 ? (
        filteredOrders.map((order, index) => (
          <div
            key={order._id}
            className="mb-4 p-4 border rounded-lg shadow bg-white"
          >
            <h2 className="text-2xl font-semibold mb-2">Order #{index + 1}</h2>
            <p className="text-lg mb-2">Status: {order.status}</p>
            <p className="text-lg mb-2">Total: ${order.total}</p>
            <h3 className="text-xl font-semibold mb-2">Products:</h3>
            <ul>
              {order.products.map((productObj, idx) => (
                <li
                  key={productObj._id}
                  className="text-lg flex items-center mb-1"
                >
                  <span className="flex-1">
                    {productObj.product?.title || "Unnamed Product"}
                  </span>
                  <span className="flex-1 text-center">
                    Quantity: {productObj.quantity}
                  </span>
                  <span className="flex-1 text-right">
                    Price: ${productObj.product?.price || 0}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-3xl font-bold mb-4">
            {searchTerm ? "No orders match your search." : "Loading..."}
          </p>
        </div>
      )}
    </div>
  );
};

export default History;
