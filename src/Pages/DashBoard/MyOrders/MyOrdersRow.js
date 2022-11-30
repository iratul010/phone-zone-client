import React from "react";

const MyOrdersRow = ({ myOrder, i }) => {
  console.log(myOrder);
  let count = i + 1;
  const { buyerEmail, buyerName, buyerPhoneNumber, meetingLocation, productPrice, productName } = myOrder;
  return (
    <tr className="text-accent text-sm">
      <th>{count < 10 ? `0${count}` : count}</th>
      <td>{buyerName}</td>
      <td>{productName}</td>
      <td>{productPrice}</td>
      <td>{buyerEmail}</td>
      <td>{buyerPhoneNumber}</td>
      <td>{meetingLocation}</td>

      <td>
        <button className="btn btn-primary text-white btn-sm">Pay</button>
      </td>
      <td>
        <button className="btn btn-warning text-white btn-sm">Cancel</button>
      </td>
    </tr>
  );
};
export default MyOrdersRow;
