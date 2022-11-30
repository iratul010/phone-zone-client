import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-accent">
            <li>
              <Link to="/dashboard/allSellers">All Sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/allBuyers">All Buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/allUsers">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/myProducts">My Products</Link>
            </li>
            <li>
              <Link to="/dashboard/addToProducts">Add Your Products</Link>
            </li>
            <li>
              <Link to="/dashboard/myOrders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/allSellers">Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
