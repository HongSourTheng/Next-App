import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import room from "@/public/images/room.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users" className="text-red-500 pr-2">
        Users
      </Link>
      <Link href="/users/new">NewUser</Link>

      <ProductCard /> */}
      <Image
        src={room}
        alt="room"
        fill
        quality={80}
        sizes="(max-width:480px) 100vw, (max-width:768px) 50vw,33vw"
        className="object-cover"
      />
    </main>
  );
}
