import { prompt } from "@/app/ui/fonts";
import IconCard from "../ui/iconCard/page";
// import { tenorSans } from "@/app/ui/fonts";
export default function Landing() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between">
        {/* <Image src={landscape}
            alt="landscape"
            className="priority w-full" 
            
            /> */}

        <div
          className=" absolute max-w-screen-lg m-auto-h-[200vh] py-5 px-5 my-10 text-center text-6xl
         text-violet font-serif font-extrabold"
        >
          <h1
            className={`${prompt.className} text-xl text-blue-900 hover:text-cyan-800 md:text-7xl md:leading-normal`}
          >
            My Diary Tales
          </h1>
        </div>
      </div>
      <IconCard />
    </div>
  );
}
