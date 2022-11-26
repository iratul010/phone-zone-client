import React from "react";
import BookingModal from "../../../CategroiresAllPhones/BookingModal/BookingModal";
import MobileHeader from "../MobileHeader/MobileHeader";
import MobileItems from "../MobileItems/MobileItems";

const MobileProducts = () => {
  return (
    <div>
      <MobileHeader></MobileHeader>
      <MobileItems></MobileItems>
      <BookingModal></BookingModal>
    </div>
  );
};

export default MobileProducts;
