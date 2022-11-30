import React, { useContext } from "react";
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MobileItem = ({ mobile, setBrandsName, setDetails, setProductsPrice }) => {
  const time = new Date().toLocaleString();

  console.log(time);
  // const { setMobileName } = useContext(AuthContext);
  const {
    productName,
    categoryName,
    categoryPhoto,
    orgProPrice,
    productPhoto,
    reSellPrice,
    usesOfYear,
    conditionOfProduct,
    locationOfSeller,
    sellerName,
    sellerPhoneNumber,
    productAddedDate,
    status,
    isReported,
    isAdvertised,
    isSellerVerified,
  } = mobile;

  setBrandsName(categoryName);
  const handleModalInformation = () => {
    setDetails(mobile);
  };
  return (
    <div className="card  p-5 bg-base-100 shadow-xl text-accent">
      <figure className="max-h-[300px]">
        <img src={productPhoto} alt="Shoes" style={{ height: "100%" }} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className="badge badge-secondary">NEW</div>
          <p className="flex flex-row justify-end gap-4">
            <FaShareAlt />
            <FaRegHeart />
          </p>
        </h2>
        <p> ${reSellPrice}</p>
        <p>
          Installment: {status} <strong>({conditionOfProduct})</strong>
        </p>
        <p>
          Uses of year: {usesOfYear} {usesOfYear <= 1 ? "months" : "years"}
        </p>
        <p>Product added Date: {productAddedDate}</p>
        <div className="card-actions justify-end">
          {mobile.status === "Booked" ? (
            <label onClick={handleModalInformation} htmlFor="booking-modal" className="btn  text-white btn-disabled">
              Booking Now!
            </label>
          ) : (
            <label onClick={handleModalInformation} htmlFor="booking-modal" className="btn btn-primary text-white">
              Booking Now!
            </label>
          )}
        </div>
      </div>
      <p className="p-3 text-end">{locationOfSeller}</p>
    </div>
  );
};

export default MobileItem;
