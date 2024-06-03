import Image from "next/image";
// import { HomeIcon, UserIcon, SettingsIcon } from '@heroicons/react/solid'
import Link from "next/link"
import diary from '@/public/diary-colored.svg'
import lock from '@/public/lock.svg'
export default function IconCard(){
    return(
        <div className=" bg-cover bg-center flex justify-center items-center min-h-screen bg-gray-100 bg-pageBg">
        <div className="fixed bottom-0 left-0 right-0 mx-auto mb-4 max-w-4xl w-full p-4 bg-violet shadow-lg rounded-lg">
      <div className=" grid gap-4 grid-cols-5 grid-rows-1">
       
          <Image src={lock} alt="lock" className="h-26 w-26 text-gray-700" />
          <Image src={lock} alt="lock" className="h-26 w-26 text-gray-700" />
          <Image src={lock} alt="lock" className="h-26 w-26 text-gray-700" />
          <Image src={lock} alt="lock" className="h-26 w-26 text-gray-700" />
          {/* <UserIcon className="h-6 w-6 text-gray-700" />
          <SettingsIcon className="h-6 w-6 text-gray-700" /> */}
       
        </div>
        <h2 className="text-lg font-bold mb-2">Card Title</h2>
        <p className="text-gray-700">This is a horizontally long card positioned at the bottom of the page.</p>
      </div>
      </div>
    )

}