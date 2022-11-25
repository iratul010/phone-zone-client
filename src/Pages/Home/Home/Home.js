import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
