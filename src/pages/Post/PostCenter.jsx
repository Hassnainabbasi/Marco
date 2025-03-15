import { ArrowRightAlt, KeyboardArrowRight } from '@mui/icons-material'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import ChooseACateogry from './ChooseACateogry'

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
      title: 'Property for Sale',
      img: 'https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png',
    },
    {
      title: 'Property for Rent',
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

export default function PostCenter() {
  const [activeCategory, setActiveCategory] = useState('default')

  const handleActiveComponent = (categoryTitle) =>{
    setActiveCategory(categoryTitle)
  }
  return (
    <div className=''>
      <div className="bs-container">
        <h1 className="text-teal-950 text-xl text-center mt-5 font-bold">
          POST YOUR AD
        </h1>
      </div>
    {activeCategory === "default" ? 
    <div>
        <div className="bs-container">
       <h1 className="text-teal-950 text-lg mt-6 font-bold">
          Choose a category
        </h1>
        </div>
      <div className='bs-container'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
      {categories.map((cat)=>{
      return(
        <div key={cat.title} onClick={()=> handleActiveComponent(cat.title)} className={`flex justify-between gap-3 items-center border p-4 border-gray-400 rounded-md ${
                activeCategory === cat.title ? 'bg-teal-100' : 'hover:bg-teal-100' }`}>
        <div className='flex items-center gap-3'>
        <img className='w-12'
            src={cat.img}
            alt=""
          />
          <h1>{cat.title}</h1>
        </div>
          <div>
            <KeyboardArrowRight style={{fontSize : 45}}/>
          </div>
        </div>
      )
      })}
      </div>
      </div>
    </div>   
    : (
      <ChooseACateogry selectedsetCategory={activeCategory}/>
    )
  }
    </div>
  )
}
