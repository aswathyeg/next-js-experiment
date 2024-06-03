import Image from "next/image";
// import { HomeIcon, UserIcon, SettingsIcon } from '@heroicons/react/solid'
import Link from "next/link"
import diary from '@/public/diary-colored.svg'
import lock from '@/public/lock.svg'
import React from 'react'
import { HomeIcon, UserIcon, CogIcon,ChatBubbleLeftRightIcon,BellAlertIcon ,BookOpenIcon,BookmarkSquareIcon} from '@heroicons/react/24/solid'
export default function IconCard(){
    return(
      <div className="fixed bottom-0 left-0 right-0 mx-auto mb-4 max-w-4xl w-full p-4 bg-white shadow-lg rounded-lg bg-darkRed">
      <div className="flex justify-around items-center mb-4">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <HomeIcon className="h-6 w-6 text-gray-700" />
          </div>
          <span className="mt-2 text-sm text-gray-700">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <UserIcon className="h-6 w-6 text-gray-700" />
          </div>
          <span className="mt-2 text-sm text-gray-700">User</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <BookOpenIcon className="h-6 w-6 text-gray-700" />
          </div>
          <span className="mt-2 text-sm text-gray-700">Subscription</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <BookmarkSquareIcon className="h-6 w-6 text-gray-700" />
          </div>
          <span className="mt-2 text-sm text-gray-700">Bookmark</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <BellAlertIcon className="h-6 w-6 text-gray-700" />
          </div>
          <span className="mt-2 text-sm text-gray-700">Notification</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-700" />
          </div>
          <span className="mt-2 text-sm text-gray-700">Contact</span>
        </div>
      </div>
      {/* <h2 className="text-lg font-bold mb-2">Card Title</h2>
      <p className="text-gray-700">This is a horizontally long card positioned at the bottom of the page.</p> */}
    </div>
    )

}