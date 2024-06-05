import React from "react";
import Image from "next/image";
import hero from "@/public/diary-colored.svg";
// import { FaInstagram,FaFacebookSquare,FaLinkedin } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
export default function Card() {
  return (
    <div className=" bg-cover bg-center flex justify-center items-center min-h-screen bg-gray-100 bg-cardpageBg ">
      <div className=" rounded overflow-hidden shadow-lg ">
        <main className=" bg-cover bg-center bg-no-repeat  ">
          <div className=" flex justify-center items-center bg-gradient-to-r from-cyan-600 to-blue-900 ...">
            <aside className="bg-white w-full max-w-md lg:max-w-none lg:w-128 lg:h-144  rounded-xl bg-opacity-20 shadow-lg shadow-black ">
              <h1 className="text-center text-black font-dark text-4xl bg-white rounded-t-xl m-0 py-4">
                Log In
              </h1>
              <form action="" className="p-6 pb-2">
                <input
                  type="text"
                  name=""
                  placeholder="Username"
                  className="py-2 px-3 w-full text-black text-lg font-dark outline-darkRed rounded hover:rounded-[16px]"
                />
                <input
                  type="password"
                  name=""
                  placeholder="Password"
                  className="py-2 px-3 w-full text-black text-lg font-dark outline-darkRed mt-10
                 rounded hover:rounded-[16px]"
                />
                {/* <div className="flex mt-5 justify-between items-center  font-bold py-2 px-8"> */}
                {/* <Link href="/ui/sign-up"
                     className="text-white cursor-pointer 
                     transition hover:text-darkRed"
                     >Not Yet Registered ?</Link> */}
                {/* <button type="submit"
                    className="bg-black text-white  py-2 px-8 transition hover:text-darkRed
                    rounded hover:rounded-[16px]" >
                         Sign In
                     </button> */}
                {/* </div> */}

                {/* <div className="flex px-20 pt-4 mt-5 font-bold">
                 <Link href="/ui/sign-up"
                 className="text-black cursor-pointer 
                 transition hover:text-red-900">
                     <span className="inline-block bg-white rounded-full px-3 py-1 text-md font-semibold mr-2 mb-2">
      Not Registered ?
      </span>
      </Link>
      <Link href=""
      className="text-black cursor-pointer 
      transition hover:text-red-900">
      <span className="inline-block bg-white rounded-full px-3 py-1 text-md font-semibold mr-2 mb-2">
      Sign In
      </span></Link>
     <Link href="/"
     className="text-white cursor-pointer 
     transition hover:text-black">
      <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-md font-semibold mr-2 mb-2">
       Home
      </span>
      </Link>
    </div> */}
                <div className="px-6 pt-4 pb-2">
                  <Link
                    href="/ui/sign-up"
                    className="text-black cursor-pointer 
                 transition hover:text-red-900"
                  >
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold  mr-2 mb-2">
                      Register
                    </span>
                  </Link>
                  <Link
                    href=""
                    className="text-black cursor-pointer 
      transition hover:text-red-900"
                  >
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold  mr-2 mb-2">
                      Sign In
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className="text-white cursor-pointer 
     transition hover:text-yellow-900"
                  >
                    <span className="inline-block bg-violet rounded-full px-3 py-1 text-md font-semibold  mr-2 mb-2">
                      Home
                    </span>
                  </Link>
                </div>
              </form>
            </aside>
          </div>
        </main>
      </div>
    </div>
    // </div>
  );
}
