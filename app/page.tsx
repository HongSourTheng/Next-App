"use client";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import Image from "next/image";
import room from "@/public/images/room.jpg";
import { authOptions } from "./api/auth/authOptions";

// import HeavyComponent from "./components/HeavyComponent";

//use when you want to display on browser when only needed (reduce heavy load)
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false, // when render only on the client side
  loading: () => <p>Loading...</p>,
});


export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users" className="text-red-500 pr-2 font-redHatText_Bold">
        Users
      </Link>
      <Link href="/users/new">NewUser</Link>
      <ProductCard />
      using Image from Next js
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

// import _ from "lodash";
{/* <main>
  <h1>Hello World.</h1>
  <button
    onClick={async () => {
      const _ = (await import("lodash")).default;
      const users = [{ name: "Dom" }, { name: "Mick" }, { name: "Joey" }];
      const sorted = _.orderBy(users, ["name"]);
      console.log(sorted);
    }}
    className="btn"
  >
    Show
  </button>
</main>; */}
