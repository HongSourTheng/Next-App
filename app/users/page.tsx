import Link from "next/link";
import UserTable from "./UserTable";
interface Props {
  searchParams: { sortOrder: string };
}
interface Users {
  id: number;
  name: string;
  email: string;
}
const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 2 },
  });
  const users: Users[] = await res.json();
  return (
    <>
      <h1>User</h1>
      <h2 className="text-blue-600">
        sorted by: <span className="text-green-600"> {sortOrder}</span>
      </h2>
      <UserTable users={users} />
      <Link href="/" className="btn btn-secondary mt-5 px-5">
        Home
      </Link>
    </>
  );
};

export default UserPage;
