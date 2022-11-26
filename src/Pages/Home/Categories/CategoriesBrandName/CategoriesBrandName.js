import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CategoriesBrandName.css";
const CategoriesBrandName = ({ category }) => {
  const { categoryName, categoryPhoto, icons } = category;

  return (
    <Link to={`/categories/${categoryName}`}>
      <div className="card   bg-base-100 shadow-xl image-full hv-fa">
        <figure className="  ">
          <img src={categoryPhoto} alt="Shoes" style={{ height: "220px" }} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{categoryName}</h2>

          <div className="card-actions iconss">
            <FaHeart />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesBrandName;
