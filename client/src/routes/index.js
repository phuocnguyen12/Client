import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import AboutPage from "../pages/About/AboutPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
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
    path: "/about",
    page: AboutPage,
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
