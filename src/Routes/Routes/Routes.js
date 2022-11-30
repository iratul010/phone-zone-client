import { createBrowserRouter } from "react-router-dom";
import Four0FourPage from "../../FourOFourPage/Four0FourPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import Blog from "../../Pages/Blog/Blog";
import AvailAbleMobile from "../../Pages/CategroiresAllPhones/AvailAbleMobile/AvailAbleMobile";
import CategoriesAllPhones from "../../Pages/CategroiresAllPhones/CategoriesAllPhones/CategoriesAllPhones";
import AddToProducts from "../../Pages/DashBoard/AddToProducts/AddToProducts";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import Dashboard from "../../Pages/DashBoard/DashBorad/Dashboard";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";

import MobileProducts from "../../Pages/Home/MobileProducts/MobileProducts/MobileProducts";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <MobileProducts></MobileProducts>
          </PrivateRoutes>
        ),
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout>
          <Dashboard></Dashboard>
        </DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/allBuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/allSellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/addToProducts",
        element: <AddToProducts></AddToProducts>,
      },
    ],
  },
  {
    path: "*",
    element: <Four0FourPage></Four0FourPage>,
  },
]);
export default router;
