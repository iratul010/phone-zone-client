import React from "react";

const AllBuyersRow = ({ buyer, i }) => {
  console.log(buyer);
  const { name, email } = buyer;
  let count = parseInt(i) + 1;
  return (
    <tbody>
      <tr className="text-accent text-sm">
        <th>{count < 10 ? `0${count}` : count}</th>
        <td>{name}</td>
        <td>{email}</td>

        <td>
          {" "}
          <button className="btn btn-warning btn-sm">Delete</button>
        </td>
      </tr>
    </tbody>
  );
};

export default AllBuyersRow;
