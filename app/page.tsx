import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="">
      <h1>Hello World!</h1>
      <Link href="/users" className="text-red-500 pr-2">
        Users
      </Link>
      <Link href="/users/new">NewUser</Link>

      <ProductCard />
    </main>
  );
}
