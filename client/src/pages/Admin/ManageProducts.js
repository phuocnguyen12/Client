import React, { useCallback, useEffect, useState } from "react";
import { InputField, Pagination } from "../../Components/index";
import { deleteProduct, getProducts } from "../../apis/";
import { useForm } from "react-hook-form";
import moment from "moment/moment";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import UpdateProduct from "./UpdateProduct";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [queries, setQueries] = useState({ q: "" });
  const [editProduct, setEditProduct] = useState(null);
  const [update, setUpdate] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();
  const [products, setProducts] = useState(null);
  const [counts, setCounts] = useState(0);

  const render = useCallback(() => {
    setUpdate(!update);
  });

  const handleSearchProducts = (data) => {
    console.log(data);
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

  const queriesDebounce = useDebounce(queries.q, 800);

  const handleDeleteProduct = (uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Ready remove this user?",
      showCancelButton: true,
    }).then(async (rs) => {
      if (rs.isConfirmed) {
        const response = await deleteProduct(uid);
        if (response.success) {
          render();
          toast.success(response.mes);
        } else {
          toast.error(response.mes);
        }
      }
    });
  };

  useEffect(() => {
    const queries = Object.fromEntries([...params]);

    if (queriesDebounce) {
      queries.q = queriesDebounce;
    }
    fetchProducts(queries);
  }, [params, queriesDebounce, update]);

  return (
    <div className="w-full px-8 flex flex-col gap-4 relative">
      {editProduct && (
        <div className="absolute inset-0 min-h-screen bg-gray-100 z-50">
          <UpdateProduct
            editProduct={editProduct}
            render={render}
            setEditProduct={setEditProduct}
          />
        </div>
      )}
      
      <div className="p-4 border-b w-full flex justify-between items-center">
        <h1 className="h-[75px] flex justify-between items-center text-6xl font-bold px-4">
          <span>Manage Product</span>
        </h1>
      </div>

      <div className="p-4 w-full my-5 flex justify-end items-center">
          <InputField
            className="text-black"
            nameKey={"q"}
            value={queries.q}
            setValue={setQueries}
            placeholder="Search..."
            isHideLabel
            style="p-2 w-10"
          />
      </div>

      <table className="table-auto">
        <thead className="font-bold bg-gray-700 text-[13px]">
          <tr className="border border-white text-white">
            <th className="text-center">#</th>
            <th className="text-center">Images</th>
            <th className="text-center">Product</th>
            <th className="text-center">Category</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Sold</th>
            <th className="text-center">UpdatedAt</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {products?.map((el, idx) => (
            <tr key={el._id} className="text-center py-2 border border-white">
              <td>
                {(+params.get("page") > 1 ? +params.get("page") - 1 : 0) *
                  process.env.REACT_APP_LIMIT +
                  (idx + 1)}
              </td>
              <td className="text-center py-2">
                <img
                  src={el.images}
                  alt="images"
                  className="w-20 h-20 m-auto object-cover"
                />
              </td>
              <td className="text-center py-2">
                {el.title.length > 12
                  ? `${el.title.substring(0, 12)}...`
                  : el.title}
              </td>
              <td className="text-center py-2">
                {el.category.length > 10
                  ? `${el.category.substring(0, 10)}...`
                  : el.category}
              </td>
              <td className="text-center py-2">{el.price}</td>
              <td className="text-center py-2">{el.quantity}</td>
              <td className="text-center py-2">{el.sold}</td>
              <td className="text-center py-2">
                {moment(el.createdAt).format("DD/MM/YYYY")}
              </td>
              <td className="text-center py-2">
                <span
                  onClick={() => setEditProduct(el)}
                  className="text-blue-500 hover:underline cursor-pointer px-1"
                >
                  Edit
                </span>
                <span
                  onClick={() => handleDeleteProduct(el._id)}
                  className="px-2 text-red-500 hover:underline cursor-pointer"
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-end my-8">
        <Pagination totalCount={counts} />
      </div>
    </div>
  );
};

export default ManageProducts;
