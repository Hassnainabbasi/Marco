import { ArrowRightAlt, CallOutlined, ChatOutlined, MoreHoriz, MoreVert } from '@mui/icons-material'
import { InputBase, styled } from '@mui/material'
import { ArrowLeft, ChevronRight, Eye, PhoneCall, PhoneCallIcon, SearchIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(3, 1),
  color: '#000000',
  height: '40px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const ButtonList = [
  'View all (0)',
  'Active Ads (0)',
  'Inactive Ads (0)',
  'Pending Ads (0)',
  'Moderated Ads (0)',
]

export default function CenterAds() {
  return (
    <div className="bs-container">
      <div className="mt-7">
        <h1 className="text-gray-500 mb-2">Profile</h1>
        <h1 className="text-2xl font-bold text-teal-950">
          Manage and view yours Ads
        </h1>
      </div>
      <div className="w-60">
        <div className="border border-black flex items-center mt-5 rounded-md focus-within:border-teal-400">
          <button className="px-2">
            <SearchIcon className="text-black" />
          </button>
          <StyledInputBase
            placeholder="Search by Ad Title"
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </div>
      <div className='flex gap-5 mt-6'>
        {ButtonList.map((name,index)=>(
            <button className={`${index === 0 ? "bg-sky-100 font-bold text-sm border py-1 rounded-3xl px-4 border-blue-600 text-blue-500" : "border border-gray-300 text-teal-950 text-sm py-2 rounded-3xl px-4"}`} key={index}>{name}</button>
        ))}
        </div>
        <div className='mt-5 '>
        <h1 className='text-gray-500 text-sm flex gap-2 '>Heavy discount on Packages <span className='flex font-bold text-blue-500'>View Packages <ChevronRight size={20}/></span></h1>
        </div>
        <Link to={"/customer-account"}>
        <div className='border mt-5 flex justify-between rounded-md p-4'>
          <div className='flex gap-4'>
          <div>
            <img className='w-32 rounded' src="https://images.olx.com.pk/thumbnails/531123805-800x600.webp" alt="" />
          </div>
          <div>
          <div className='flex items-center gap-2'>
            <h1 className='text-lg font-bold'>I'm Junior Developer</h1>
            <span>- in Web Development</span>
         </div>
            <div className='flex items-center mt-4 justify-end gap-5'>
            <h1>Active from 7 Apr to 7 May </h1>
           <h1 className='text-gray-200 font-thin'>|</h1>
           <button className='bg-teal-300 rounded-md text-teal-950 font-bold px-4  text-xs'>Active</button>
            </div>
            <div className='flex mt-3  items-center text-sm gap-6 rounded-sm text-teal-950'>
           <div className='flex gap-2 items-center'>
           <h1 className='bg-gray-100 p-1'><Eye/></h1>
           <div className=''>
           <h1 className='font-bold text-teal-950'>0</h1>
           <h1 className='text-teal-950'>Views</h1>
           </div>
           </div>
           <div className='flex gap-2 items-center'>
           <h1 className='bg-gray-100 p-1'><CallOutlined/></h1>
           <div className=''>
           <h1 className='font-bold text-teal-950'>0</h1>
           <h1 className='text-teal-950'>Phone</h1>
           </div>
           </div>
           <div className='flex gap-2 items-center'>
           <h1 className='bg-gray-100 p-1'>
          <img src="https://www.olx.com.pk/assets/iconChat_noinline.31f5df4a6a21fc770ed6863958662677.svg" alt="" />
           </h1>
           <div className=''>
           <h1 className='font-bold text-teal-950'>0</h1>
           <h1 className='text-teal-950'>Views</h1>
           </div>
           </div>
           </div>
           </div>
          </div>
          <div className='flex flex-col justify-between items-end'>
            <div>
              <h1><MoreHoriz /></h1>
            </div>
            <div className='flex gap-2'>
              <button className='rounded font-bold text-teal-950 text-sm py-2 w-36 border-teal-950 border-2'>Edit</button>
              <button className='rounded font-bold text-white text-sm bg-teal-950 py-2 w-36 border-teal-950 border-2'>Sell Faster Now</button>
            </div>
          </div>
          
        </div>
        </Link>
        
    </div>
  )
}
