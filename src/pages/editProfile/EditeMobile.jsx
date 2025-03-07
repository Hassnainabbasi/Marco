import React, { useState } from 'react'
import MobileHeader from '../../components/header/MobileHeader'
import { Camera, EyeIcon, Heart, MenuIcon } from 'lucide-react'
import { Grid, InputBase, styled } from '@mui/material'
import {
  AddCardOutlined,
  AssignmentOutlined,
  CameraAlt,
  CameraAltOutlined,
  ContentCopy,
  Difference,
  DifferenceOutlined,
  ExitToApp,
  HelpOutlineOutlined,
  NotificationsNone,
} from '@mui/icons-material'
import BasicSelect from '../../mui_component/Dropdown'
import MonthDropdown from '../../mui_component/MonthDropdown'
import YearDropdown from '../../mui_component/YearDropdown'
import MaleDropdown from '../../mui_component/MaleDropdown'
import OpenMeuFilter from '../OpenMeuFilter'

export default function EditeMobile() {
  const [showTick, setShowTick] = useState(false)
  const [showCommentTick, setShowCommentTick] = useState(false)
  const [comment, setComment] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)

  const OpenMenuModal = () => setOpenMenu(true)
  const CloseMenuModal = () => setOpenMenu(false)

  const handleComment = (e) => {
    const words = e.target.value
    if (words.length <= 200) {
      setComment(words.length)
      setWordCount(words.length)
    }
  }

  const handleFocus = () => {
    setShowTick(true)
  }
  const handleBlur = (e) => {
    setTimeout(() => {
      if (!e.relatedTarget?.classList.contains('tick-icon')) {
        setShowTick(false)
      }
    }, 200)
  }
  const CommentFocus = () => {
    setShowCommentTick(true)
  }
  const CommentBlur = (e) => {
    setTimeout(() => {
      if (!e.relatedTarget?.classList.contains('tick-icon')) {
        setShowCommentTick(false)
      }
    }, 200)
  }
  return (
    <div className="overflow-x-hidden">
      <div>
        <div className="flex space-x-3 items-center bs-container">
          <div>
            {openMenu ? (
              <MenuIcon onClick={() => setOpenMenu(false)} />
            ) : (
              <MenuIcon onClick={() => setOpenMenu(true)} />
            )}{' '}
          </div>
          <img
            className="w-8 object-contain "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqfEZTbw3kP6VH9MXJ018iDt9z6WzhDA-yQ&s"
            alt="logo"
          />
          <div className="flex space-x-4 items-center p-2 ml-">
            <div className="flex items-center space-x-2">
              <div className="bg-slate-100 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="_5120d4ee"
                  alt="OLX Motors"
                >
                  <path d="M23.75 8.38a1.66 1.66 0 0 0-2.08-1.08l-.92.3-1.59-3.35-.5-.17a24.01 24.01 0 0 0-7.16-1c-2.23-.06-4.44.28-6.54 1.03l-.45.18-1.52 3.5-.64-.2a1.66 1.66 0 1 0-1 3.17l.12.04-.1.18a6.1 6.1 0 0 0-.61 2.26c-.01.37 0 1.11.03 1.83l.01 4v.03c-.02.36.02.73.12 1.08a1.1 1.1 0 0 0 1.11.74H4.4a1.1 1.1 0 0 0 1.1-.74c.1-.35.15-.72.13-1.08v-.44c2.76.25 4.53.37 6.28.37 1.74 0 3.45-.12 6.1-.36v.43c-.02.36.02.73.12 1.08a1.1 1.1 0 0 0 1.11.74h2.37a1.1 1.1 0 0 0 1.11-.74c.1-.35.14-.72.12-1.08l.01-3.96v-.03c.05-.74.1-1.5.1-1.93a5.6 5.6 0 0 0-.64-2.35l-.1-.21.47-.15a1.66 1.66 0 0 0 1.08-2.09zM5.37 5.18h.02c1.96-.69 4.03-1 6.1-.94 2.3-.04 4.6.28 6.8.93l.04.02 1.3 2.74a26.7 26.7 0 0 1-6.42.62h-1.06c-2.69.1-5.37-.05-8.03-.45l1.26-2.92zm-.9 13.92c0 .22-.01.45-.05.66H2a3.25 3.25 0 0 1-.04-.66v-.87c.16.08.33.13.5.15l2.02.18v.54zm17.2-.04v.04c0 .23-.01.45-.05.67h-2.44a3.26 3.26 0 0 1-.03-.67v-.53l1.88-.18c.22-.02.44-.09.63-.2v.87zm.64-9.7l-1.76.57.71 1.43c.3.57.48 1.2.5 1.85.02.37-.03 1.06-.07 1.7h-.01v.2l-.07 1.06c-.01.43-.28 1.05-.7 1.1-4.48.41-6.74.62-9 .62-2.28 0-4.66-.21-9.35-.64-.28-.03-.47-.48-.53-.9-.04-.3-.08-.79-.1-1.3v-.14a25.4 25.4 0 0 1-.02-1.62c.05-.61.21-1.21.48-1.77l.77-1.39-1.47-.46a.5.5 0 0 1 .3-.97l1.63.52.02-.02c2.45.43 4.94.6 7.43.52h2.13a26.8 26.8 0 0 0 6.92-.7l.49-.15L22 8.4a.51.51 0 0 1 .63.33.5.5 0 0 1-.33.64z"></path>
                  <path d="M4.54 12.08a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm0 2.46a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm14.57-2.46a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm0 2.46a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm-11.71.28h8.96v1.15H7.4v-1.15z"></path>
                </svg>
              </div>
              <h1 className="text-sm text-teal-950 font-bold">Motors</h1>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-slate-100 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="_5120d4ee"
                  alt="OLX Property"
                >
                  <path d="M22.78 21.81V7.8L15.3 5.3v1.58l5.98 2V21.8H13.8V.7H1.22v21.1h-.6v1.5h22.76v-1.5h-.6zM12.3 4.3v17.5H2.72V2.2h9.58v2.1z"></path>
                  <path d="M7.98 4.37h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zM7.98 6.8h2.42V8H7.98V6.8zm-3.63 0h2.42V8H4.35V6.8zm3.63 3.62h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm3.63 2.42h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm3.63 3.63h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm13.31-6.05h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2zm2.42 2.42h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2zm2.42 3.63h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2z"></path>
                </svg>
              </div>
              <h1 className="text-sm text-teal-950 font-bold">Property</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        {openMenu ? (
          <OpenMeuFilter />
        ) : (
          <div className="bs-container">
            <div>
              <h1 className="text-teal-950 font-bold text-lg mt-8 mb-4">
                Basic information
              </h1>
            </div>
            <div className="flex gap-4 items-center">
              <div className="relative w-28 sm:w-24 md:w-28 lg:w-32">
                <img
                  className="w-full rounded-full"
                  src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                  alt="Profile"
                />

                <div className="absolute bottom-0 right-0 flex items-end">
                  <div className="border-2 border-white rounded-full">
                    <div className="bg-teal-950 text-sm rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.5"
                      >
                        <path d="M12 16.5c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5zm0-8c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5z" />
                        <path d="M19 6h-2.19l-1.72-2.58c-.37-.56-.99-.92-1.67-.92H10.57c-.68 0-1.3.36-1.67.92L7.19 6H5c-1.66 0-3 1.34-3 3v9c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3zm1 12c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h3.23l2-3h4.53l2 3H19c.55 0 1 .45 1 1v9z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-bold text-sm text-teal-950 mb-2">Name</h1>
                <div className="relative border-none w-full">
                  <input
                    className="w-full border border-black focus:outline-none focus:border-teal-300 focus:ring-teal-200 focus:ring px-2 py-3 pr-8 rounded-sm"
                    value={'Hassnain'}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Find Cars, Mobile Phones and more..."
                  />
                  {showTick && (
                    <div className="absolute right-2 top-[44%] -translate-y-1/2 border border-teal-400 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 1024 1024"
                        fill="#14b8a6"
                      >
                        <path d="M878.34 192l-537 547.68L145.65 540.1H85.33v61.55L311.17 832h60.35l567.15-578.47V192z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-teal-950 font-bold mt-5 mb-3 text-sm">
                Date of birth
              </h1>
              <div className="grid grid-cols-3 gap-3 w-full">
                <BasicSelect />
                <MonthDropdown />
                <YearDropdown />
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-teal-950 font-bold text-base mb-2">Gender</h1>
              <MaleDropdown />
            </div>
            <div className="mt-6 ">
              <div className="relative border-none w-full">
                <textarea
                  className="w-full border border-black focus:outline-none focus:border-teal-300 focus:ring-teal-200 focus:ring px-2 py-3 pr-8 rounded-sm h-36 text-start"
                  onChange={handleComment}
                  onFocus={CommentFocus}
                  onBlur={CommentBlur}
                  placeholder="About me (optional)"
                />
                {showCommentTick && (
                  <div className="absolute right-2 top-[12%] -translate-y-1/2 border border-teal-400 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 1024 1024"
                      fill="#14b8a6"
                    >
                      <path d="M878.34 192l-537 547.68L145.65 540.1H85.33v61.55L311.17 832h60.35l567.15-578.47V192z"></path>
                    </svg>
                  </div>
                )}
              </div>
              <div>
                <p className="text-teal-950 text-xs mt-1">{wordCount}/200</p>
              </div>
            </div>
            <div className="mt-10">
              <hr className="border-teal-950" />
            </div>
            <div className="">
              <div className="mt-6">
                <h1 className="font-bold text-teal-950 text-lg mb-5">
                  Contact information
                </h1>
                <div className="">
                  <div className="flex border rounded-sm border-teal-950 h-12 w-full">
                    <div className="flex items-center px-1 h-5 self-center border-teal-950 border-r">
                      <span className="ml-1 mr-3 text-teal-950 text-xs">
                        +92
                      </span>
                    </div>
                    <input
                      className="w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="phone"
                      placeholder="Phone number"
                      type="text"
                    />
                  </div>
                  <div className="text-xs mt-2 text-gray-600">
                    <h1 className=" mb-2">
                      You have verified your phone. It is important allow us to
                      securely communicate with you
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full">
              <div className="relative border-none w-full">
                <input
                  className="w-full border border-black focus:outline-none focus:border-teal-300 focus:ring-teal-200 focus:ring px-2 py-3 pr-8 rounded-sm"
                  value={'Hassnain'}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Find Cars, Mobile Phones and more..."
                />
              </div>
            </div>
            <div className="text-gray-600 text-xs mt-3 mb-5">
              We won't reveal your email to anyone else nor use it to send you
              spam.
            </div>
            <div className="mt-5">
              <hr className="border-teal-950" />
            </div>
            <div className="mt-5 mb-5">
              <h1 className="text-teal-950 font-bold text-lg">
                Optional Information
              </h1>
            </div>
            <div className="flex items-center w-full justify-between">
              <div className="px-2">
                <p className="text-teal-950 text-sm font-semibold mb-1">
                  Facebook
                </p>
                <p className="text-gray-700 text-xs">
                  Sign in with Facebook and discover your trusted connections to
                  buyers
                </p>
              </div>
              <div className="">
                <div className="">
                  <button className="border-2 rounded-sm p-2 px-4 border-teal-950 text-teal-950 font-bold">
                    Connect
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full justify-between mt-8">
              <div className="px-2">
                <p className="text-teal-950 text-sm font-semibold mb-1">
                  Google
                </p>
                <p className="text-gray-700 text-xs">
                  Connect your OLX account to your Google account for simplicity
                  and ease
                </p>
              </div>
              <div className="">
                <div className="">
                  <button className="border-2 rounded-sm p-2 px-4 border-teal-950 text-teal-950 font-bold">
                    Connect
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="border-2 flex justify-center rounded-sm p-2 mt-5  border-teal-950 bg-teal-950 text-white font-bold">
                Save
              </h1>
            </div>
            <div className="mt-10 mb-10">
              <hr className="border-teal-950" />
            </div>
            <div>
              <h1 className="text-teal-950 font-bold text-lg mt-3">
                Delete this account
              </h1>
              <h1 className="text-slate-600 text-sm mt-1">
                Are you sure you want to delete your account?
              </h1>
              <button className="border-2 rounded-sm px-3 py-2 mt-5 border-teal-950 text-teal-950 font-bold">
                Yes, delete my account
              </button>
              <h1 className="font-bold text-base underline mt-5 mb-3 text-teal-950 underline-offset-4">
                See more info
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
