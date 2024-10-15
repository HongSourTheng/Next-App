import Link from "next/link";

const NavBar = () => {
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
      </ul>
    </div>
  );
};

export default NavBar;
