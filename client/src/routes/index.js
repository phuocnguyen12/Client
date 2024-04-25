import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import OrderPage from "../pages/Order/OrderPage";
import ProductsPage from "../pages/Products/ProductsPage";
import RegisterPage from "../pages/Register/RegisterPage";
import ShopPage from "../pages/Shop/ShopPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/shop",
    page: ShopPage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: true,
  },
  {
    path: "/login",
    page: LoginPage,
  },
  {
    path: "/register",
    page: RegisterPage,
  },
  {
    path: "/*",
    page: NotFoundPage,
  },
];
