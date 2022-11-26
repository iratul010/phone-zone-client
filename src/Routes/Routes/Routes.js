import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import AvailAbleMobile from "../../Pages/CategroiresAllPhones/AvailAbleMobile/AvailAbleMobile";
import CategoriesAllPhones from "../../Pages/CategroiresAllPhones/CategoriesAllPhones/CategoriesAllPhones";

import MobileProducts from "../../Pages/Home/MobileProducts/MobileProducts/MobileProducts";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <CategoriesAllPhones></CategoriesAllPhones>,
      },
      {
        path: "/categories/:categoryName",
        element: <MobileProducts></MobileProducts>,
        loader: async ({ params }) => fetch(`http://localhost:5000/categories/${params.categoryName}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
