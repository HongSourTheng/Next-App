import Link from "next/link";

interface Users {
  id: number;
  name: string;
  email: string;
}
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 2 },
  });
  return res.json();
}
const UserPage = async () => {
  const users: Users[] = await getUser();
  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/" className="btn btn-secondary mt-5 px-5">
        Home
      </Link>
    </>
  );
};

export default UserPage;
