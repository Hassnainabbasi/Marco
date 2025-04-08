import { ArrowBack, CallOutlined, HowToReg, HowToRegOutlined, KeyboardArrowDown, MoreHoriz, MoreVert } from '@mui/icons-material'
import { AArrowDownIcon, ArrowDown, ArrowDown01, ArrowDown01Icon, ArrowDownAZ, ArrowDownCircle, ArrowUpDown, ChevronRight, Eye } from 'lucide-react'
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
        <div className='border mx-2 mt-4 p-2 rounded-md'>
        <div>
        <div className='flex justify-between'>
         <div className='flex gap-4'>
         <div>
            <img className='w-20 rounded-md' src="https://images.olx.com.pk/thumbnails/531123805-800x600.webp" alt="" />
          </div>
          <div>
          <div className=' items-center gap-2'>
            <h1 className='text-base font-bold text-teal-950 '>I'm Junior Developer</h1>
            <span className='text-teal-950'>Web Development</span>
         </div>
           
           </div>
         </div>
         <div>
          <h1><MoreVert /></h1>
         </div>
          </div>
          <div>
          <div className='text-teal-950 font-semibold text-sm mt-4 gap-5'>
            <h1>Active from 7 Apr to 7 May </h1>
            </div>
            <div className='flex mt-3  items-center text-sm gap-6 rounded-sm text-teal-950'>
           <div className='flex gap-2 items-center'>
           <h1 className='bg-gray-100 p-1'><Eye/></h1>
           <h1 className='font-bold text-teal-950'>0</h1>
           <h1 className='text-teal-950'>Views</h1>
           </div>
           <div className='flex gap-2 items-center'>
           <h1 className='bg-gray-100 p-1'><HowToRegOutlined/></h1>
           <h1 className='font-bold text-teal-950'>0</h1>
           <h1 className='text-teal-950'>Leads</h1>
           </div>
        
           </div>
           <button className='bg-teal-300 rounded-md text-teal-950 font-bold p-1 mt-2 w-20  text-xs'>Active</button>

          </div>
          <div className='gap-3 flex mt-2'>
          <button className='rounded font-bold text-teal-950 text-sm py-2 w-full border-teal-950 border-2'>Edit</button>
          <button className='rounded font-bold text-white text-sm bg-teal-950 py-2 w-full border-teal-950 border-2'>Sell Faster Now</button>
          </div>
        </div>
        </div>
    </div>
  )
}
