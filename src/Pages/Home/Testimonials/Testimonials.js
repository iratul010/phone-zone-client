import React from "react";
import Review from "./Review";
import manOne from "../../../assets/images/man-1.jpg";
import manTwo from "../../../assets/images/man-2.jpg";
import manThree from "../../../assets/images/man-3.jpg";
const Testimonials = () => {
  const reviewsData = [
    {
      _id: 1,
      name: "Mary",
      img: manOne,
      review:
        "Good Customer Service, easy to order with the app  && Thank you very much for your kind reply information and ensuring the customer with the process...",
      location: "New York",
      rating: 5,
    },
    {
      _id: 2,
      name: "James",
      img: manTwo,
      review:
        "The customer care service is very helpful as well as there employees... Thank you very much for your kind reply information and ensuring the customer with the process...",
      location: "San Francisco",
      rating: 4,
    },
    {
      _id: 3,
      name: "Robert",
      img: manThree,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      rating: 4,
    },
  ];
  return (
    <section className="my-16 ">
      <div className="flex text-accent  justify-between">
        <div>
          <h3 className="text-xl font-semibold text-primary">Testimonials</h3>
          <h2 className="text-4xl">What They Say!</h2>
        </div>
        <figure>
          <img className=" w-24 lg:w-48" src="{quote}" alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsData.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
