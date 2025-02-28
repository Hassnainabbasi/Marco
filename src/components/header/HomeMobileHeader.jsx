import { KeyboardArrowDown } from '@mui/icons-material';
import { InputBase, MenuItem, styled, TextField } from '@mui/material'
import { MenuIcon, PlusIcon, SearchIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { CloseIcon } from 'yet-another-react-lightbox';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  borderRadius: theme.shape.borderRadius,
  color: '#000000',
  height: '40px',
  width: '119%',
  [theme.breakpoints.down('sm')]: {
  width: '100%', 
  },
}));


export const LocationIcon = () => (
  <svg className='fill-blue-500' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024">
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
);

export default function HomeMobileHeader() {
  const [sticky, setSticky] = useState(false)
  const [showButton, setShowButton] = useState(false)
  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY > 2300) {
        setShowButton(false)
      }
      else{
        setShowButton(true)
      }
      if(window.scrollY > 30){
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }
  window.addEventListener('scroll',handleScroll)
  return () =>{
    window.removeEventListener("scroll",handleScroll)
  }
  },[])

  return (
    <div className=''>
     <div className='flex space-x-3 items-center bs-container'>
    <div >
    <MenuIcon />
    </div>
    <img 
        className='w-8 object-contain ' 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqfEZTbw3kP6VH9MXJ018iDt9z6WzhDA-yQ&s" 
        alt="logo" 
      />
      <div className="flex space-x-4 items-center p-2 ml-">
        <div className="flex items-center space-x-2">
         <div className='bg-slate-100 rounded-full p-2'>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="_5120d4ee" alt="OLX Motors"><path d="M23.75 8.38a1.66 1.66 0 0 0-2.08-1.08l-.92.3-1.59-3.35-.5-.17a24.01 24.01 0 0 0-7.16-1c-2.23-.06-4.44.28-6.54 1.03l-.45.18-1.52 3.5-.64-.2a1.66 1.66 0 1 0-1 3.17l.12.04-.1.18a6.1 6.1 0 0 0-.61 2.26c-.01.37 0 1.11.03 1.83l.01 4v.03c-.02.36.02.73.12 1.08a1.1 1.1 0 0 0 1.11.74H4.4a1.1 1.1 0 0 0 1.1-.74c.1-.35.15-.72.13-1.08v-.44c2.76.25 4.53.37 6.28.37 1.74 0 3.45-.12 6.1-.36v.43c-.02.36.02.73.12 1.08a1.1 1.1 0 0 0 1.11.74h2.37a1.1 1.1 0 0 0 1.11-.74c.1-.35.14-.72.12-1.08l.01-3.96v-.03c.05-.74.1-1.5.1-1.93a5.6 5.6 0 0 0-.64-2.35l-.1-.21.47-.15a1.66 1.66 0 0 0 1.08-2.09zM5.37 5.18h.02c1.96-.69 4.03-1 6.1-.94 2.3-.04 4.6.28 6.8.93l.04.02 1.3 2.74a26.7 26.7 0 0 1-6.42.62h-1.06c-2.69.1-5.37-.05-8.03-.45l1.26-2.92zm-.9 13.92c0 .22-.01.45-.05.66H2a3.25 3.25 0 0 1-.04-.66v-.87c.16.08.33.13.5.15l2.02.18v.54zm17.2-.04v.04c0 .23-.01.45-.05.67h-2.44a3.26 3.26 0 0 1-.03-.67v-.53l1.88-.18c.22-.02.44-.09.63-.2v.87zm.64-9.7l-1.76.57.71 1.43c.3.57.48 1.2.5 1.85.02.37-.03 1.06-.07 1.7h-.01v.2l-.07 1.06c-.01.43-.28 1.05-.7 1.1-4.48.41-6.74.62-9 .62-2.28 0-4.66-.21-9.35-.64-.28-.03-.47-.48-.53-.9-.04-.3-.08-.79-.1-1.3v-.14a25.4 25.4 0 0 1-.02-1.62c.05-.61.21-1.21.48-1.77l.77-1.39-1.47-.46a.5.5 0 0 1 .3-.97l1.63.52.02-.02c2.45.43 4.94.6 7.43.52h2.13a26.8 26.8 0 0 0 6.92-.7l.49-.15L22 8.4a.51.51 0 0 1 .63.33.5.5 0 0 1-.33.64z"></path><path d="M4.54 12.08a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm0 2.46a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm14.57-2.46a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm0 2.46a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm-11.71.28h8.96v1.15H7.4v-1.15z"></path></svg>
       </div>
          <h1 className="text-lg font-semibold text-gray-800">Motors</h1>
        </div>
        
        <div className="flex items-center space-x-2">
      <div className='bg-slate-100 rounded-full p-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="_5120d4ee" alt="OLX Property"><path d="M22.78 21.81V7.8L15.3 5.3v1.58l5.98 2V21.8H13.8V.7H1.22v21.1h-.6v1.5h22.76v-1.5h-.6zM12.3 4.3v17.5H2.72V2.2h9.58v2.1z"></path><path d="M7.98 4.37h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zM7.98 6.8h2.42V8H7.98V6.8zm-3.63 0h2.42V8H4.35V6.8zm3.63 3.62h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm3.63 2.42h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm3.63 3.63h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm13.31-6.05h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2zm2.42 2.42h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2zm2.42 3.63h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2z"></path></svg>
      </div>
           <h1 className="text-lg font-semibold text-gray-800">Property</h1>
        </div>
      </div>
    </div>
    <div className='bs-container mt-2'>
     <div className='flex gap-2 items-center'>
     <LocationIcon />
      <h1 className='text-teal-950 font-bold font-sans text-sm'>Pakistan</h1>
      <KeyboardArrowDown />
     </div>
     </div>
   <div className={`bg-white w-full bs-container transition-all duration-300 ${sticky ? 'fixed top-0 left-0 z-50 h-20' : "relative mt-5"}`}>
   <div className='border border-teal-950 flex items-center mt-5 rounded-sm'>
      <button className='px-2'>
    <SearchIcon className='text-teal-950' />
      </button>
      <StyledInputBase placeholder="All ads in Pakistan" inputProps={{ 'aria-label': 'search' }} />
    </div>
   
   </div>
  {showButton &&(
    <div className='fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 rounded-full shadow-lg  transition-all duration-300'>
    <img className='' src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" />
    <button className='flex items-center ml-7 absolute bottom-3'>
      <PlusIcon size={18} className=''/>
      Sell</button>
    </div>
  )}

    </div>
    
  )
}
