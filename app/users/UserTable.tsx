"use client";
import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";
import { useState } from "react";

interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  users: Users[];
}

const UserTable = ({ users }: Props) => {
  const [user, setUser] = useState(users);
  const sortedName = sort(user).asc((u) => u.name);
  const sortedEmail = sort(user).asc((u) => u.email);

  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th
              onClick={() => {
                setUser(sortedName);
              }}
              className="cursor-pointer"
            >
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th
              onClick={() => {
                setUser(sortedEmail);
              }}
              className="cursor-pointer"
            >
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
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
