import React, { useEffect, useState } from "react";
import CategoriesBrandName from "../CategoriesBrandName/CategoriesBrandName";

const Categories = () => {
  const brandCategory = [
    {
      _id: 1,
      categoryName: "iPhone",
      categoryPhoto: "https://i.ibb.co/xsxG14X/iphone-1.png",
    },
    {
      _id: 2,
      categoryName: "OnePlu+",
      categoryPhoto: "https://i.ibb.co/64m9RG9/oneplus-1.png",
    },
    {
      _id: 3,
      categoryName: "Xiaomi",
      categoryPhoto: "https://i.ibb.co/Ss1Z0V0/xiaomi.png",
    },
  ];

  return (
    <div>
      <div>
        {" "}
        <p className="text-xl font-semibold text-primary ">Our Products</p>
        <h2 className="text-center text-5xl font-bold text-accent">Product Service</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {brandCategory.map((category) => (
          <CategoriesBrandName key={category._id} category={category}></CategoriesBrandName>
        ))}
      </div>
    </div>
  );
};

export default Categories;
