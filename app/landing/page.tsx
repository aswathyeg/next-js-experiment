import Image from "next/image";
import Link from "next/link";
import landscape from "@/public/landscape.jpg";
import { Navbar } from "../navbar/page";
import { acme } from "@/app/ui/fonts";
export function Landing() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between">
        {/* <Image src={landscape}
            alt="landscape"
            className="priority w-full" 
            
            /> */}

        <div className=" absolute max-w-screen-lg m-auto-h-[200vh] py-5 px-5 my-10 text-center text-6xl text-violet font-serif font-extrabold">
          <h1>My Diary Tales</h1>
        </div>
      </div>
    </div>
  );
}
