import React from 'react'
import { Link } from 'react-router-dom'

export default function AllCategories() {
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
  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold mb-4 text-teal-950 mx-auto">
        All categories
      </h1>
      <div className="grid grid-flow-col sm:grid-flow-row auto-cols-[minmax(80px,_1fr)] overflow-x-scroll scrollbar-hidden sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 lg:gap-5">
        {categories.map((item) => (
          <Link to={'/get-cat'}>
            <div className="flex flex-col items-center">
              <div className="sm:w-20 sm:h-20 rounded-full flex items-center ">
                <img
                  alt="Mobile icon"
                  className="sm:w-20 sm:h-20 rounded-full object-cover"
                  height={50}
                  src={item.img}
                  width={50}
                />
              </div>
              <p className="mt-2 text-center line-clamp-2 text-sm sm:font-bold text-teal-950">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
