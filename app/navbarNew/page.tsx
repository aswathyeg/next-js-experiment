"use client";

import { useState } from "react";
import Image from "next/image";
import Diary from "@/public/diary-black.svg";
import { prompt } from "@/app/ui/fonts";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-darkRed via-mediumRed to-darkRed ... p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Image
            src={Diary}
            alt="logo"
            width={60}
            height={40}
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-violet hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                /> */}
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`md:flex md:items-center text-violet text-lg font- ${
            isOpen ? "block" : "hidden"
          } ${prompt.className}`}
        >
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0  hover:text-white mr-5"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0  hover:text-white mr-5"
          >
            About
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0  hover:text-white mr-5"
          >
            Services
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0  hover:text-white mr-5"
          >
            Contact
          </a>
          <Link
            href="/ui/cards"
            className="block mt-4 md:inline-block md:mt-0  hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
      {/* Ensure the button stays in the top right corner when the menu is open */}
      {isOpen && (
        <div className="fixed top-4 right-4 md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="text-violet hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
