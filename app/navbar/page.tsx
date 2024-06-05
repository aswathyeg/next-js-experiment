"use client";

import { useState } from "react";
import Image from "next/image";
import Diary from "@/public/diary-black.svg";
import User from "@/public/user.svg";
import Menu from "@/public/menu.svg";
import Link from "next/link";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const nanvLinks = [
    { name: "Home" },
    { name: "Your Life,stories" },
    { name: "Feature" },
    { name: "Subscription" },
  ];
  return (
    <nav
      className="flex w-full items-center justify-between px-[20px] py-[14px] 
        lg:mx-auto bg-cover bg-center bg-gradient-to-r from-darkRed via-mediumRed to-darkRed ... "
    >
      <div className="flex items-center">
        <div className="pl-[84px]">
          <Image
            src={Diary}
            alt="logo"
            width={60}
            height={40}
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
          />
        </div>
        <div className="hidden lg:flex pl-[74px] gap-x-[56px] px-[20px] py-[16px] text-violet ">
          {nanvLinks.map((item, index) => (
            <p className="text-[##36485c] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-[56px]">
        <Link href="/ui/iconCard">
          <span className="hidden lg:block font-medium text-violet">
            Open Account
          </span>
        </Link>

        <Link href="/ui/cards">
          <span className="hidden lg:block font-medium text-violet ">
            Sign in
          </span>
        </Link>

        <Image src={User} alt="user" width={70} height={30} />
      </div>
      <div>
        <Image
          src={Menu}
          alt="user"
          width={70}
          height={30}
          className="lg:hidden"
        />
      </div>
    </nav>
  );
}
