import React from "react";

const BookingModal = () => {
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <form className="  grid grid-cols-1 gap-5  mt-10 " onSubmit="{handleBooking}">
            {/* <input type="text" value='{time}' disabled className="input input-bordered w-full mx-auto font-semibold" />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select> */}
            <input
              name="name"
              type="text"
              defaultValue="{user?.displayName}"
              readOnly
              placeholder="Your Name"
              className="input input-bordered w-full mx-auto "
            />
            <input
              name="email"
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full mx-auto  "
              defaultValue="{user?.email}"
              disabled
            />

            {/* disabled or readOnly */}
            <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full  mx-auto " />

            <button className=" btn btn-accent w-full mx-auto  uppercase">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
