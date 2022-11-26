import React from "react";
import banner from "../../../assets/images/mobileSbanner.png";
import bannerbg from "../../../assets/images/bannerbg.jpg";
const MobileSectionBanner = () => {
  return (
    <div className="hero  bg-lime-50 text-accent">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="max-w-sm  lg:mb-[-15px]  " alt="banner-photos" />

        <div>
          <h1 className="text-5xl font-bold">
            Choose your favorite <br /> from here!
          </h1>
          <p className="py-6">
            Why this site is the best place to buy all phones. You can choose a payment option that works for you, pay less with a
            trade‑in, connect your phones to your carrier, and get set up quickly. You can also chat with a Specialist anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileSectionBanner;
