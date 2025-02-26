import { ArrowBack, ArrowForwardIos } from '@mui/icons-material'
import { MenuIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import MultiRangeSlider from 'multi-range-slider-react';

export default function FilterComponent({setFilter}) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [mobile, setMobile] = useState(window.innerWidth <768)
    const maxLimit = 1000000;

  useEffect(()=>{
  
    const handleSize = () =>{
      setMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
   },[])
  

    const handleMinChange = (e) => {
        let value = parseInt(e.target.value);
        if (value >= 0 && value < maxPrice) {
          setMinPrice(value);
        }
      };
    
      const handleMaxChange = (e) => {
        let value = parseInt(e.target.value);
        if (value > minPrice && value <= maxLimit) {
          setMaxPrice(value);
        }
      };
    return (
  <div className='w-screen overflow-x-hidden'>
  
  {mobile ? (
    <div className='overflow-hidden'>
     <div className='bg-gray-100 flex items-center justify-between gap-2 p-4'>
    <div className='flex items-center gap-2'>
 <button onClick={()=> setFilter(false)}>
 <ArrowBack className='text-teal-950'/>
 </button>
     <button className='text-teal-950 text-xl font-bold'>Filters</button>
    </div>
        <div className=''>
            <button className='underline underline-offset-4 font-bold text-teal-950'>Clear All</button>
        </div>
     </div>
     <div className='bs-container flex flex-col'>
     <div className='py-3 text-teal-950 font-bold'>
        Sort
     </div>
     <div className='flex gap-3 w-full overflow-x-scroll pb-2'>
    <button className='border-2 text-xs px-2 whitespace-nowrap p-2 border-teal-600 bg-teal-100 text-teal-500 rounded-sm'>New Listed</button>
    <button className='border text-xs px-2 whitespace-nowrap p-2 border-gray-600 rounded-sm'>New Listed</button>
    <button className='border text-xs px-2 whitespace-nowrap p-2 border-gray-600 rounded-sm'>New Listed</button>
    <button className='border text-xs px-2 whitespace-nowrap p-2 border-gray-600 rounded-sm'>New Listed</button>
    <button className='border text-xs px-2 whitespace-nowrap p-2 border-gray-600 rounded-sm'>New Listed</button>
    <button className='border text-xs px-2 whitespace-nowrap p-2 border-gray-600 rounded-sm'>New Listed</button>
    <button className='border text-xs px-2 whitespace-nowrap p-2 border-gray-600 rounded-sm'>New Listed</button>
    <button className='border text-xs px-2 whitespace-nowrap p-2 border-gray-600 rounded-sm'>New Listed</button>
    <button className='border text-xs px-2 whitespace-nowrap p-2 border-gray-600 rounded-sm'>New Listed</button>
    <button className='border text-xs px-2 whitespace-nowrap p-2 border-gray-600 rounded-sm'>New Listed</button>
   
     </div>
     </div>
     <div className='py-5 '>
     <hr className='border border-gray-300'/>
       </div>
     <div className='bs-container'>
     <div className='py-3 font-semibold text-teal-950'>
        View
     </div>
     <div className='flex justify-between w-full gap-3'>
    <button className='border-4 text-sm p-4 flex items-center justify-center gap-2 w-full border-teal-600 bg-teal-100 text-teal-500 rounded-md'>
        <MenuIcon className='text-black'/>
         List</button>
    <button className='border-2 px-2 p-4 w-full flex items-center justify-center gap-2 border-gray-600 rounded-md'>
        <img src="https://www.olx.com.pk/assets/iconGrid_noinline.20d3115f90d4e01862afb7d21be83420.svg  " alt="" />
        Moasic</button>
     </div>
     </div>
     <div className='py-5 '>
     <hr className='border border-gray-300'/>
      </div>
     <div className='bs-container'>
        <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
        <h1 className='text-teal-950 font-bold'>Categories</h1>
     <h1 className='text-teal-950'>Mobile Phones</h1>
     </div>
     <div>
        <ArrowForwardIos />
     </div>
        </div>
     </div>
     <div className='py-5'>
     <hr className='border border-gray-300'/>
     </div>
     <div className='bs-container'>
        <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
        <h1 className='text-teal-950 font-bold'>Location</h1>
     <h1 className='text-teal-950'>Pakistan</h1>
     </div>
     <div>
        <ArrowForwardIos />
     </div>
        </div>
     </div>
     <div className='py-5 '>
     <hr className='border border-gray-300'/>
     </div>
               <div className='bs-container py-5'>
            <h1 className='font-bold'>Price</h1>
            <div className="flex gap-5 mt-3">
        <input
          type="number"
          className="border-2 px-4 py-2 rounded w-1/2"
          value={minPrice}
          min="0"
          max={maxLimit}
          onChange={handleMinChange}
        />
        <input
          type="number"
          className="border-2 px-4 py-2 rounded w-1/2"
          value={maxPrice}
          min="0"
          max={maxLimit}
          onChange={handleMaxChange}
        />
      </div>

            <MultiRangeSlider
            style={{
              border : "none",
              boxShadow : "none",
              color : "#00544"
            }}
              min={0}
              max={maxLimit}
              step={5000}
              ruler={false}
              label={false}
             thumbLeftColor='#F8F8F8'
              barInnerColor='#005443'
              minValue={minPrice}
              maxValue={maxPrice}
              onInput={(e) => {
                setMinPrice(e.minValue);
                setMaxPrice(e.maxValue);
              }}
            />
            <style>
  {`
    .thumb::before {
      border: 2px solid #01352B !important;
    }
  `}
</style>  
            <div className='flex justify-between text-sm text-gray-600 mt-2'>
            </div>
          </div>
     <div className='py-6 '>
        <hr className='border border-gray-300'/>
     </div>
     <div className='bs-container'>
    <div className='font-bold text-teal-950 mb-3'>
        IS DELIVERABLE
    </div>
    <div className='flex gap-2'>
        <button className='p-3 px-5 border rounded-md border-teal-950 text-teal-950'>Yes</button>
        <button className='p-3 px-5 border rounded-md border-teal-950 text-teal-950'>Yes</button>
    </div>
     </div>
     <div className='py-5 '>
        <hr className='border border-gray-300'/>
     </div>
     <div className='bs-container'>
        <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
        <h1 className='text-teal-950 font-bold'>Brand and Model</h1>
     <h1 className='text-teal-950'>View all</h1>
     </div>
     <div>
        <ArrowForwardIos />
     </div>
        </div>
     </div>
     <div className='py-5 '>
        <hr className='border border-gray-300'/>
     </div>
     <div className='bs-container flex flex-col'>
     <div className='py-3 text-teal-950 font-bold'>
        Condition
     </div>
     <div className='flex gap-3 overflow-x-auto w-full pb-2'>
     <button className='p-3 px-5 border rounded-md border-teal-950 whitespace-nowrap text-teal-950'>New</button>
        <button className='p-3 px-5 border rounded-md border-teal-950 whitespace-nowrap text-teal-950'>Used</button>
    <button className='p-3 px-5 border rounded-md border-teal-950 whitespace-nowrap text-teal-950'>Open Box</button>
        <button className='p-3  border rounded-md border-teal-950 whitespace-nowrap text-teal-950'>Refurbished</button>
        <button className='p-3  border rounded-md border-teal-950 whitespace-nowrap text-teal-950'>For Parts or Not Working</button>
   
      </div>
     </div>
     <div className='py-5'>
        <hr className='border border-gray-300'/>
     </div>
     <div className='bs-container mb-5'>
        <button className='bg-teal-950 p-4 rounded-md text-white w-full'>Filter</button>
     </div>
    </div>
  ) : (
    setFilter(false)
  )}

  </div>
  
  )
}
