import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoriesBrandName from "../../Home/Categories/CategoriesBrandName/CategoriesBrandName";

const AvailAbleMobile = () => {
  const {
    data: categories = [],

    isLoading,
  } = useQuery({
    queryKey: ["mobileOptions"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div className="  grid grid-cols-1  mb:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {categories.map((category) => (
          <CategoriesBrandName category={category}></CategoriesBrandName>
        ))}
      </div>
    </div>
  );
};

export default AvailAbleMobile;
