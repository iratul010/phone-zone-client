import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Categories></Categories>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
