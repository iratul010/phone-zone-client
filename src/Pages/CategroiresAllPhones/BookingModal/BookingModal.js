import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ details, setDetails }) => {
  const navigate = useNavigate();
  console.log("details", details);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const handleBookingModal = (data) => {
    console.log(data);
    const booking = {
      buyerName: data.userName,
      productName: data.productName,
      productPrice: data.productPrice,
      buyerEmail: data.userEmail,
      buyerProvince: data.province,
      buyerPhoneNumber: data.phoneNumber,
      meetingLocation: data.meetingLocation,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          fetch(`http://localhost:5000/booked/${details._id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
          toast.success("Your Booking is Confirmed");
          navigate("/dashboard/myOrders");
          setDetails(null);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal text-accent">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">You Select {details?.productName}</h3>
          <form className="  grid grid-cols-1 gap-5  mt-10 " onSubmit={handleSubmit(handleBookingModal)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered text-slate-400"
                {...register("userName")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">User Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered text-slate-400"
                {...register("userEmail")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Product Name</span>
              </label>
              <input
                type="text"
                name="productsName"
                defaultValue={details?.productName}
                readOnly
                className="input input-bordered text-slate-400"
                {...register("productName")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Products Price</span>
              </label>
              <input
                type="text"
                name="productsPrice"
                defaultValue={details?.reSellPrice}
                readOnly
                className="input input-bordered text-slate-400"
                {...register("productPrice")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Province</span>
              </label>
              <select className="select w-full  text-slate-400 " {...register("province")}>
                <option disabled selected>
                  Please choose your province
                </option>
                <option name="province" value="Barishal">
                  Barishal
                </option>
                <option name="province" value="Dhaka">
                  Dhaka
                </option>
                <option name="province" value="Chattogram">
                  Chattogram
                </option>
                <option name="province" value="Khulna">
                  Khulna
                </option>
                <option name="province" value="Mymensingh">
                  Mymensingh
                </option>
                <option name="province" value="Rangpur">
                  Rangpur
                </option>
                <option name="province" value="Sylet">
                  Sylet
                </option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent">Meeting Location</span>
              </label>
              <input
                type="text"
                name="meetingLocation"
                placeholder="House no /street/area"
                className="input input-bordered text-slate-400"
                {...register("meetingLocation")}
              />
            </div>

            {/* disabled or readOnly */}
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full  mx-auto "
              {...register("phoneNumber")}
            />

            <button className=" btn btn-accent w-full mx-auto  uppercase">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
