import { KeyboardArrowRight } from '@mui/icons-material'
import React, { useState } from 'react'
import MobileChooseCategory from './MobileChooseCategory'

const categories = [
  {
    title: 'Mobiles',
    img: 'https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png',
  },
  {
    title: 'Vehicles',
    img: 'https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png',
  },
  {
    title: 'Property For Sale',
    img: 'https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png',
  },
  {
    title: 'Property For Rent',
    img: 'https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png',
  },
  {
    title: 'Electronics & Home Appliances',
    img: 'https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png',
  },
  {
    title: 'Bikes',
    img: 'https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png',
  },
  {
    title: 'Business, Industrial & Agriculture',
    img: 'https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png',
  },
  {
    title: 'Services',
    img: 'https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png',
  },
  {
    title: 'Jobs',
    img: 'https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png',
  },
  {
    title: 'Animals',
    img: 'https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png',
  },
  {
    title: 'Furniture & Home Decor',
    img: 'https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png',
  },
  {
    title: 'Fashion & Beauty',
    img: 'https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png',
  },
  {
    title: 'Books, Sports & Hobbies',
    img: 'https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png',
  },
  {
    title: 'Kids',
    img: 'https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png',
  },
]

export default function PostMobile() {
  const [selectedMobileCategory, setSelectedMobileCategory] = useState("default")

  const handleActiveComponent = (categoryTitle) =>{
    setSelectedMobileCategory(categoryTitle)
  }
  return (
   <div>
  {selectedMobileCategory === "default" ?(
     <div>
     <div className="bg-gray-50">
       <div className="post-container">
         <div className="flex gap-3 py-4">
           <svg
             className="text-teal-950"
             xmlns="http://www.w3.org/2000/svg"
             width="30"
             height="30"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="1.5"
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             <path d="M19 12H5M12 19l-7-7 7-7" />
           </svg>
           <h1 className="text-teal-950 text-xl font-bold">Post your ad</h1>
         </div>
       </div>
     </div>
     <div className=" mt-5">
       <h1 className="text-teal-950 font-bold px-4 text-sm">
         CHOOSE A CATEGORY
       </h1>
       <div className="">
         <div className="grid grid-cols-1 gap-4 mt-5 mb-12">
           
           {categories.map((cat) => {
             return (
               <div key={cat.title} onClick={()=> handleActiveComponent(cat.title)} className=''>
                  <div className='relative'>
                   <hr className='mb-3'/>
                 </div>
                 <div className="flex justify-between bs-container gap-3 items-center rounded-md">
                 <div className="flex items-center gap-3">
                   <img className="w-7" src={cat.img} alt="" />
                   <h1 className='text-sm text-teal-950'>{cat.title}</h1>
                 </div>
                 <div>
                   <KeyboardArrowRight className='text-gray-400' />
                 </div>
                 </div>
               </div>
             )
           })}
         </div>
       </div>
     </div>
   </div>
  ):(
    <MobileChooseCategory selectedMobileCategory={selectedMobileCategory} />
  )}
   </div>
  
  )
}
