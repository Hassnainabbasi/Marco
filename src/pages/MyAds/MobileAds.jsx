import { ArrowBack, KeyboardArrowDown } from '@mui/icons-material'
import { AArrowDownIcon, ArrowDown, ArrowDown01, ArrowDown01Icon, ArrowDownAZ, ArrowDownCircle, ArrowUpDown, ChevronRight } from 'lucide-react'
import React from 'react'

export default function MobileAds() {
  return (
    <div>
      <div className="bg-gray-50">
        <div className="bs-container">
          <div className="flex py-5 gap-2 items-center">
            <ArrowBack className="text-teal-950" style={{ fontSize: 30 }} />
            <h1 className="text-xl font-bold text-teal-950">My Ads</h1>
          </div>
        </div>
      </div>
      <div className="px-2 mt-2">
        <div className="flex ">
          <button className="font-bold text-base text-teal-950">
            View all (0)
          </button>
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 22 25"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M6 9l6 6 6-6" />
</svg>

        </div>
      </div>
        <div className='w-full px-2 mt-2 flex justify-between'>
          <h1 className="text-gray-500 text-sm flex gap-2 ">
            Heavy discount on Packages
          </h1>
          <span className="flex font-bold text-sm text-blue-500">
              View Packages <ChevronRight size={20} />
            </span>
        </div>
    </div>
  )
}
