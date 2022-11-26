import React from "react";

const CategoriesBrandName = ({ category }) => {
  const { categoryName, categoryPhoto } = category;
  return (
    <div className="card  bg-stone-50 text-accent">
      <figure className=" ">
        <img src={categoryPhoto} alt={`${categoryName}`} style={{ height: "140px" }} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{categoryName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default CategoriesBrandName;
