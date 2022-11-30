import React from "react";

const AllUsersRow = ({ user, i }) => {
  let count = i + 1;
  console.log(user);
  return (
    <tr className="text-accent">
      <th>{count < 10 ? `0${count}` : count}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-primary btn-sm">Admin</button>
      </td>
      <td>
        <button className="btn btn-warning btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default AllUsersRow;
