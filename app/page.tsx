import Image from "next/image";
import { Landing } from "./landing/page";
import Navbar from "./navbarNew/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cover bg-center bg-pageBg">
      <div>
        <Navbar />
        <Landing />
      </div>
    </main>
  );
}
