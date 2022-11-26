import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import aboutUs from "../../../assets/images/aboutUs.png";
const AboutUs = () => {
  const about = [
    {
      _id: 1,
      name: "Instant Home Services",
      details: "Delivery service within time, so that  work can be enjoyed successfully.",
    },
    { _id: 2, name: "24/7 Quality Service", details: "Available week and always for your service." },

    { _id: 3, name: "Quality Cost Service", details: "All my work is done with discretion and quality." },
  ];
  return (
    <div className="hero text-accent ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">About Us!</h1>
          <p className="py-6">
            Our service is very fast and convenient for your & You are getting good quality mobile phone with good price in your
            pocket money.
          </p>
          <div>
            <ul className="p-2 bg-base-100">
              {about.map((about) => (
                <div key={about._id}>
                  {" "}
                  <li>
                    <p className="  flex items-center gap-1 font-semibold text-accent">
                      <FaCheckCircle className="text-success" /> {about.name}`
                    </p>

                    <small className="ml-2">{about.details}</small>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm     bg-base-100">
          <div className="card-body">
            <img src={aboutUs} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
