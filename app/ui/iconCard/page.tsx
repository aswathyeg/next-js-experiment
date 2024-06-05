import Image from "next/image";
// import { HomeIcon, UserIcon, SettingsIcon } from '@heroicons/react/solid'
import Link from "next/link";
import diary from "@/public/diary-colored.svg";
import lock from "@/public/lock.svg";
import React from "react";
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  BellAlertIcon,
  BookOpenIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/solid";
import { Navbar } from "@/app/navbar/page";

export default function IconCard() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <div className=" bg-cover bg-center flex justify-center items-center min-h-screen bg-gray-100 bg-cardpageBg"> */}
      <div
        className="fixed bottom-0 left-0 right-0 mx-auto mb-4  w-full p-8  bg-white shadow-lg rounded-lg 
      bg-gradient-to-r from-cyan-600 to-blue-900 ..."
      >
        {/* to increase the width of the card,adjust 'mb' value below */}
        <div className="flex flex-col sm:flex-row justify-around items-center mb-8">
          <div className="flex flex-col items-center mb-4 sm:mb-0">
            <div className="bg-gray-200 rounded-full p-3">
              <HomeIcon className="h-6 w-6 text-gray-700 sm:h-8 sm:w-8" />
            </div>
            <span className="mt-2 text-sm text-white sm:text-base">Home</span>
          </div>

          <div className="flex flex-col items-center mb-4 sm:mb-0">
            <div className="bg-gray-200 rounded-full p-3">
              <UserIcon className="h-6 w-6 text-gray-700 sm:h-8 sm:w-8" />
            </div>
            <span className="mt-2 text-sm text-white sm:text-base">User</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3">
              <BookOpenIcon className="h-6 w-6 text-gray-700 sm:h-8 sm:w-8" />
            </div>
            <span className="mt-2 text-sm text-white sm:text-base">
              Subscription
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3">
              <BookmarkSquareIcon className="h-6 w-6 text-gray-700 sm:h-8 sm:w-8" />
            </div>
            <span className="mt-2 text-sm text-white sm:text-base">
              Bookmark
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3">
              <BellAlertIcon className="h-6 w-6 text-gray-700 sm:h-8 sm:w-8" />
            </div>
            <span className="mt-2 text-sm text-white sm:text-base">
              Notification
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-700 sm:h-8 sm:w-8" />
            </div>
            <span className="mt-2 text-sm text-white sm:text-base">
              Contact
            </span>
          </div>
        </div>
        {/* <h2 className="text-lg font-bold mb-2">Card Title</h2>
      <p className="text-gray-700">This is a horizontally long card positioned at the bottom of the page.</p> */}
      </div>
    </div>
    // </div>
  );
}
