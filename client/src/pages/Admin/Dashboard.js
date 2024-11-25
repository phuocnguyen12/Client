import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { token } = useSelector((state) => state.user);

  // Fetch order data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3515/order/all", {
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
        if (result && Array.isArray(result.response)) {
          setOrders(result.response);
          setFilteredOrders(result.response);
        } else {
          setOrders([]);
          setFilteredOrders([]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = orders.filter(
        (order) =>
          `${order.orderBy.firstname} ${order.orderBy.lastname}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          order.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.total.toString().includes(searchTerm)
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders);
    }
  }, [searchTerm, orders]);

  return (
    <div className="w-full px-8 flex flex-col gap-4 relative">
      <div className="p-4 border-b w-full flex justify-between items-center">
        <h1 className="h-[75px] flex justify-between items-center text-6xl font-bold px-4">
          <span>Dashboard</span>
        </h1>
      </div>

      <div className="p-4 w-full my-5 flex justify-end items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 text-black focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table-auto w-full border-collapse mb-5">
        <thead className="font-bold bg-gray-700 text-white border border-white">
          <tr>
            <th className="text-center py-3">#</th>
            <th className="text-center py-3">Order By</th>
            <th className="text-center py-3">Status</th>
            <th className="text-center py-3">Total</th>
          </tr>
        </thead>

        <tbody>
          {filteredOrders && filteredOrders.length > 0 ? (
            filteredOrders.map((order, index) => (
              <tr key={order._id} className="text-center border border-white">
                <td className="py-3">{index + 1}</td>
                <td className="text-center py-3 pl-4">
                  {`${order.orderBy.firstname} ${order.orderBy.lastname}`}
                </td>
                <td className="py-3">{order.status}</td>
                <td className="py-3">${order.total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                <p className="text-3xl font-bold">No orders found</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
