import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import AboutPage from "../pages/About/AboutPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import RegisterPage from "../pages/Register/RegisterPage";
import ShopPage from "../pages/Shop/ShopPage";
import ReviewPage from "../pages/Review/ReviewPage";
import BlogPage from "../pages/Blog/BlogPage";
import ContactPage from "../pages/Contact/ContactPage";
import Checkout from "../pages/Member/Checkout";
import DetailsCart from "../pages/DetailsCart/DetailsCart";

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
    path: "/cart",
    page: DetailsCart,
  },
  {
    path: "/checkout",
    page: Checkout,
  },
  {
    path: "/review",
    page: ReviewPage,
    isShowHeader: true,
  },
  {
    path: "/blog",
    page: BlogPage,
    isShowHeader: true,
  },
  {
    path: "/about",
    page: AboutPage,
    isShowHeader: true,
  },
  {
    path: "/contact",
    page: ContactPage,
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
