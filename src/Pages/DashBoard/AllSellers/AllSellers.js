import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import AllSellersRow from "./AllSellersRow";

const AllSellers = () => {
  const { data: sellers = [], isLoading } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyerAndSeller/sellers");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl text-accent mb-5">Buyers List </h2>
      <div className="overflow-x-auto ">
        <table className="table   w-full   ">
          <thead className="bg-primary">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Delete</th>
            </tr>
          </thead>
          {sellers.map((seller, i) => (
            <AllSellersRow key={i} seller={seller} i={i}></AllSellersRow>
          ))}
        </table>
      </div>
    </div>
  );
};
export default AllSellers;
