"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="bg-red-500">
      <ul className="flex text-white ">
        <li>
          <Link href="/" className="block px-5 py-3 hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/users" className="block px-5 py-3 hover:text-gray-300">
            User
          </Link>
        </li>
        <li>
          <Link href="/admin" className="block px-5 py-3 hover:text-gray-300">
            admin
          </Link>
        </li>
        <li>
          {/* {status === "loading" && <div>loading...</div>} */}
          {status === "authenticated" && (
            <div className="px-5 py-3">
              {session.user!.name}
              <Link href="/api/auth/signout" className="px-5 py-3">
                Sign Out
              </Link>
            </div>
          )}
          {status === "unauthenticated" && (
            <Link
              href="/api/auth/signin"
              className="block px-5 py-3 hover:text-gray-300"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
