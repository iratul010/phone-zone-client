import React, { useState } from "react";
import BookingModal from "../../../CategroiresAllPhones/BookingModal/BookingModal";
import MobileHeader from "../MobileHeader/MobileHeader";
import MobileItems from "../MobileItems/MobileItems";

const MobileProducts = () => {
  const [details, setDetails] = useState(null);

  return (
    <div>
      <MobileHeader></MobileHeader>
      <MobileItems setDetails={setDetails}></MobileItems>
      {details && <BookingModal details={details} setDetails={setDetails}></BookingModal>}
    </div>
  );
};

export default MobileProducts;
