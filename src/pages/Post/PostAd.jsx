import React from 'react'
import PostHeader from './PostHeader'
import { Add, AddAPhoto, AddOutlined, CameraAlt, CameraAltOutlined } from '@mui/icons-material'
import { SearchIcon } from 'lucide-react'
import { InputBase, styled } from '@mui/material';


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  borderRadius: "px",
  color: '#000000',
  height: '40px',
  [theme.breakpoints.down('sm')]: {
  width: '100%', 
  },
}));

export default function PostAd() {
  return (
    <div>
     <div className='overflow-x-hidden'>
      <PostHeader />
     </div>
     <div className="bs-container">
        <h1 className="text-teal-950 text-xl text-center mt-5 font-bold">
          POST YOUR AD
        </h1>
      </div>
      <div className='border mx-auto container w-full mt-5 rounded-md border-gray-400'>
   <div className='py-5 px-8 '>
      <div className='flex justify-between items-center'>
       <h1 className='text-teal-950 font-bold text-sm'>
        Category
       </h1>
       <div className='flex items-center gap-2'>
        <div>
          <img className='w-12 rounded-full' src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" alt="" />
        </div>
        <div>
          <h1 className='text-teal-950 font-bold text-sm'>Property for Sale</h1>
          <h1 className='text-teal-950 text-sm'>Land & Plots</h1>
        </div>
       </div>
       <button className='text-blue-500 font-bold text-sm'>Change</button>
      </div>
     </div>
     <div className='mt-2 mb-5'>
      <hr className=' border-gray-400'/>
     </div>
     <div className='flex items-center justify-between mb-5'>
      <div className='px-8 flex items-start justify-between w-full'>
      <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
        Upload Images
       </h1>
    <div>
         <div className="w-full flex flex-col">
       <div className="grid grid-cols-7 gap-2 p-4">
        <div className="w-20 h-16 border border-gray-300 flex items-center justify-center rounded-lg cursor-pointer hover:border-blue-500">
          <Add className="text-gray-500" fontSize="large" />
        </div>

        {[...Array(13)].map((_, index) => (
          <div
            key={index}
            className="w-20 h-16 border border-gray-300 flex items-center justify-center rounded-lg cursor-pointer hover:border-blue-500"
          >
            <div>
              <div>
                <img className='w-6' src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='px-5'>
     <p className="text-xs text-teal-950 ">
        For the cover picture we recommend using the landscape mode.
      </p>
     </div>
    </div>
    </div>

      </div>
     </div>
     <div className='mt-8'>
      <hr className=' border-gray-400'/>
     </div>
     <div>
      <div className='py-5 px-8'>
    <div className='items-center flex'>
    <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
        Type*
       </h1>
       <div className='border border-teal-950 flex items-center mt-5 rounded-md'>
             <button className='px-2'>
           <SearchIcon className='text-teal-950' />
             </button>
             <StyledInputBase placeholder="All ads in Pakistan" inputProps={{ 'aria-label': 'search' }} />
           </div>
    </div>
      </div>
     </div>
   </div>
    </div>
  )
}
