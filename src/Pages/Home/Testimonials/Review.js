import React from "react";
import { FaRegStar } from "react-icons/fa";
const Review = ({ review }) => {
  const { name, img, review: Review, location, rating } = review;
  return (
    <div className="card  text-accent bg-stone-50">
      <div className="card-body">
        <p>{Review}</p>
        <div className="card-actions gap-10 mt-5">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-lg">{name}</h3>
            <p>{location}</p>
          </div>
          <div>
            <p>{rating}</p>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
              <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
              <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
              <input type="radio" name="rating-1" className="mask mask-star bg-secondary" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
