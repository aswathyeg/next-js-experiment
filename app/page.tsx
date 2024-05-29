import Image from "next/image";
import { Landing } from "./landing/page";
export default function Home() {
  return (
     <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <Landing/>
      </div>
     </main>
  );
}
