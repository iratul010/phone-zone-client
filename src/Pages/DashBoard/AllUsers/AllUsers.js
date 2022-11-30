import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import AllUsersRow from "./AllUsersRow";

const AllUsers = () => {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>All Users</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <AllUsersRow key={i} user={user} i={i}></AllUsersRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
