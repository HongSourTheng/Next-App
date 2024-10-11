import Link from "next/link";
import UserTable from "./UserTable";
interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>User</h1>
      <h2 className="text-blue-600">
        sorted by: <span className="text-green-600"> {sortOrder}</span>
      </h2>
      <UserTable sortOrder={sortOrder} />
      <Link href="/" className="btn btn-secondary mt-5 px-5">
        Home
      </Link>
    </>
  );
};

export default UserPage;
