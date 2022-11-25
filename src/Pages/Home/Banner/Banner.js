import React from "react";
import bannerImg from "../../../assets/images/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="hero  text-accent ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="max-w-sm rounded-lg" alt="phone" />

          <div>
            <h1 className="text-5xl font-bold">
              Love the power. <br /> <p className="text-secondary font-bold">Love the price.</p>
            </h1>
            <p className="py-6">You are getting good quality mobile phone with good price in your pocket money.</p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
