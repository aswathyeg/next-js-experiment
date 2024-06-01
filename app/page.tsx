import Image from "next/image";
import { Landing } from "./landing/page";


export default function Home() {
  return (
     <main className="flex min-h-screen flex-col bg-pageBg bg-cover bg-center">
      <div>
        <Landing/>
    
      </div>
     </main>
  );
}
