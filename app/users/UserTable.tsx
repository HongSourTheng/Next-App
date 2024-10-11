import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";

interface Users {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 2 },
  });
  const users: Users[] = await res.json();
  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (u) => u.email : (u) => u.name
  );
  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="cursor-pointer">
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th className="cursor-pointer">
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
