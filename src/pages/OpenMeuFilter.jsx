import { AddCardOutlined, AssignmentOutlined, CameraAltOutlined, DifferenceOutlined, ExitToApp, HelpOutlineOutlined, NotificationsNone } from '@mui/icons-material'
import { EyeIcon, Heart, MenuIcon } from 'lucide-react'
import React, { useState } from 'react'

export default function OpenMeuFilter() {

     const [openMenu, setOpenMenu] = useState(false)
      const OpenMenuModal = () => setOpenMenu(true)
      const CloseMenuModal = () => setOpenMenu(false)
    
  return (
    <div>
      <div>
        <div className="bs-container">
        <div className="mt-3 flex items-center gap-3">
          <div className="">
            <img
              className="w-16"
              src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-teal-950">Hello,</h1>
            <h1 className="text-teal-950 font-bold text-lg">
              Muhammad Hassnain
            </h1>
          </div>
        </div>
        <div className="mt-3">
          <button className="flex border-2 rounded-sm border-teal-950 text-teal-950 font-bold text-sm py-2 justify-center w-full">
            View and edit your profile
          </button>
        </div>
      </div>
      <div className="mt-5">
        <hr className="border-gray-400" />
      </div>
      <div className="bs-container mt-2">
        <div className="flex items-center gap-5 mb-5">
          <h1 className="">
            <CameraAltOutlined />
          </h1>
          <h1 className="text-teal-950 font-semibold">Start Selling</h1>
        </div>
        <div className="flex items-center gap-5 mt-3 mb-5">
          <h1 className="">
            <DifferenceOutlined />
          </h1>
          <h1 className="text-teal-950 font-semibold">My ads</h1>
        </div>
        <div className="flex items-center gap-5 mt-3 mb-5">
          <h1 className="">
            <Heart />
          </h1>
          <h1 className="text-teal-950 font-semibold">
            Favorite & Saved Searches
          </h1>
        </div>
        <div className="flex items-center gap-5 mt-2 mb-5">
          <h1 className="">
            <EyeIcon />
          </h1>
          <h1 className="text-teal-950 font-semibold">Public Profile</h1>
        </div>
        <div className="flex items-center gap-5 mt-2 mb-5">
          <h1 className="">
            <AssignmentOutlined />
          </h1>
          <h1 className="text-teal-950 font-semibold">
            Buy Discounted Packages
          </h1>
        </div>
        <div className="flex items-center gap-5 mt-2 mb-5">
          <h1 className="">
            <AddCardOutlined />
          </h1>
          <h1 className="text-teal-950 font-semibold">
            Bought Package & Billing
          </h1>
        </div>
        <div className="flex items-center gap-5 mt-2 mb-5">
          <img
            src="https://www.olx.com.pk/assets/iconChat_noinline.31f5df4a6a21fc770ed6863958662677.svg"
            alt=""
          />
          <h1 className="text-teal-950 font-semibold">Chat</h1>
        </div>
        <div className="flex items-center gap-5 mt-2 mb-5">
          <NotificationsNone />
          <h1 className="text-teal-950 font-semibold">Notifications</h1>
        </div>
      </div>
      <div className="mt-5">
        <hr className="border-gray-400" />
      </div>
      <div className="bs-container mt-2">
        <div className="flex items-center gap-5 mb-5">
          <h1 className="">
            <HelpOutlineOutlined />
          </h1>
          <h1 className="text-teal-950 font-semibold">Help</h1>
        </div>
        <div className="flex items-center gap-5 mt-3 mb-5">
          <h1 className="">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.9 9h2V7h4V5h-4V3h-2zm6 4v-2h-10v2zm-14-4v2H3v2h4v2h2V9zm6 12v-2h8v-2h-8v-2h-2v6zM2.9 5v2h10V5zm0 12v2h6v-2z"
                fill="black"
              ></path>
            </svg>
          </h1>
          <h1 className="text-teal-950 font-semibold">Setting</h1>
        </div>
      </div>
      <div className="mt-5">
        <hr className="border-gray-400" />
      </div>
      <div className="bs-container mt-2">
        <div className="flex items-center gap-5 mb-2">
          <h1 className="">
           <ExitToApp />
          </h1>
          <h1 className="text-teal-950 font-semibold">Logout</h1>
        </div>
      </div>
      </div>
    </div>
  )
}
