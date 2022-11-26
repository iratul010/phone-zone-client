import React from "react";
import headerPh from "../../../../assets/images/bannertry.jpg";
import images from "../../../../assets/images/phones.jpg";
const MobileHeader = () => {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row-reverse m-3">
        <img src={headerPh} className="max-w-sm rounded-lg  lg:w-1/2" alt="photos" />
        <div className="w-full lg:w-1/2 ">
          <h2 className="text-3xl text-accent font-semibold m-5">What remains today for the fulfillment of your wishes.</h2>
          <img src={images} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
