import Image from "next/image";
import { Landing } from "./landing/page";
import { Navbar } from "./navbar/page";
Navbar

export default function Home() {
  return (
     <main className="flex min-h-screen flex-col bg-pageBg bg-cover bg-center">
      <div>
      <Navbar/>
        <Landing/>
    
      </div>
     </main>
  );
}
