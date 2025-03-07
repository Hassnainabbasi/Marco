import { ArrowRightAlt } from '@mui/icons-material'
import { InputBase, styled } from '@mui/material'
import { ArrowLeft, ChevronRight, SearchIcon } from 'lucide-react'
import React from 'react'

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
        
    </div>
  )
}
