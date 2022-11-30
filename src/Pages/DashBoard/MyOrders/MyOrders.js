import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import MyOrdersRow from "./MyOrdersRow";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myOrders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${user.email}`);
      const data = await res.json();

      return data;
    },
  });
  if (isLoading) {
    refetch();
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>My Orders List</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Email</th>
                <th>Number</th>
                <th>Meeting Location</th>
                <th>Payment</th>
                <th>Order Cancel</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((myOrder, i) => (
                <MyOrdersRow key={i} myOrder={myOrder} i={i}></MyOrdersRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
