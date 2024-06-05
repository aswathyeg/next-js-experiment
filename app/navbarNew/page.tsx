"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="#">Logo</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
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
          className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Services
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
