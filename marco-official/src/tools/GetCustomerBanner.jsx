
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faComments, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ArrowForward, ArrowForwardIos, ArrowRightAlt, ArrowRightAltRounded, Favorite, FavoriteBorder, HeartBrokenOutlined, LocationOn, ReportOff, ReportOutlined, Share } from '@mui/icons-material';
import Carousel from 'react-multi-carousel';


export default function GetCustomerBanner() {
    const categories = [
        {
          title: 'Mobile Phones',
          items: [
            {
              id: 1,
              price: "Rs 113,000",
              name: "Samsung Galaxy S22 Plus Approved",
              location: "Johar Town, Lahore",
              time: "2 weeks ago",
              image: "https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg"
            },
            {
              id: 2,
              price: "Rs 145,000",
              name: "Google pixel 8pro 12/256 PTA(7 pro PTA)",
              location: "Samanabad, Lahore",
              time: "3 days ago",
              image: "https://storage.googleapis.com/a1aa/image/7pecTFe8s3ojIkvA7SoV2XtLkqVHYYGSyZDKB4F3SmI.jpg"
            },
            {
              id: 3,
              price: "Rs 170,000",
              name: "Vivo X100 Pro 16/512gb Black Colour",
              location: "Cantt, Sialkot",
              time: "1 week ago",
              image: "https://storage.googleapis.com/a1aa/image/M1N39wg2FIklTfmbm81_0ZT2D1FMgKXsgKBoduzraH0.jpg"
            },
            {
              id: 4,
              price: "Rs 124,000",
              name: "Iphone 12 Brand New PTA Approved",
              location: "Johar Town, Lahore",
              time: "2 weeks ago",
              image: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg"
            },
            {
              id: 5,
              price: "Rs 110,000",
              name: "OnePlus 11R 12/256gb",
              location: "Gulberg, Lahore",
              time: "5 days ago",
              image: "https://5.imimg.com/data5/SELLER/Default/2023/8/331220969/JP/KT/ZP/192898351/oneplus-11r-5g-galactic-silver-16gb-ram-256gb-storage.jpg"
            }
          ]
        },
    ]
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <div className="w-full">
          <div className="border px-5 bg-gray-100 rounded-md">
            <img
              src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
              alt="Product"
              className="w-full rounded-md"
            />
          </div>
          <div className="p-4 border border-slate-300 rounded-md mt-4">
            <div className='flex justify-between'>
            <h1 className="text-3xl text-teal-950 font-bold mb-2">Rs 42,999
            </h1>
            <h5><FavoriteBorder className='mr-2 text-teal-950' /><Share className='text-teal-950' /></h5>
            </div>
            <h1 className='mt-2 mb-2 text-lg font-bold text-teal-950'>Google pixel 6A/6pro/8pro            </h1>
          <div className='flex justify-between'>
          <h2 className="text-sm text-teal-950 flex items-center">
              <LocationOn className="mr-2" /> Kacheri Road, Multan
            </h2>
            <h4 className='text-teal-950 text-sm'>3 days go</h4>
     
          </div>
            </div>
            <div className="p-4 border border-slate-300 rounded-md mt-4">
            <div className='flex justify-between'>
                   <div className="grid grid-cols-2 justify-between gap-5 w-full">
            <div className="bg-gray-100 p-2 flex justify-between">
                <span className="text-gray-600">Brand</span>
                <span className="font-bold text-gray-800">Google</span>
                <span className="font-bold text-gray-800"></span>
            </div>
            <div className="bg-gray-100 p-2 flex justify-between">
                <span className="text-gray-600">Model</span>
                <span className="font-bold text-gray-800">Pixel</span>
                <span className="font-bold text-gray-800"></span>
            </div>
            </div>
            </div>
            <div className='mt-4 flex justify-between'>
          <span className="text-gray-600 px-2">Condition</span>
          <span className="font-bold text-gray-800">New</span>
          <span className="font-bold text-gray-800"></span>
          <span className="font-bold text-gray-800"></span>
          <span className="font-bold text-gray-800"></span>
          <span className="font-bold text-gray-800"></span>
          <span className="font-bold text-gray-800"></span>
          <span className="font-bold text-gray-800"></span>

          </div>
            </div>
            <div className="border p-4 mt-4 rounded-lg shadow-md bg-white">
  <h1 className="text-teal-950 text-xl mb-4 font-bold">Description</h1>
  <p className="mt-2 text-teal-950 font-semibold mb-4">
    *WELCOME TO GOOGLE STORE BY AS TECH*
  </p>
  <p className="mt-1 text-teal-950 mb-4">
    <span className="text-teal-950 font-semibold">Address:</span> Sultan mobile center Shop No 36 kachari road Multan
  </p>
  <p className="mt-1 text-teal-950 mb-4">
    “Google Pixel original USA stock available, all models PTA approved and non-PTA available.
  </p>
  <p className="mt-1 text-teal-950 ">
    FOR MORE DETAILS only serious buyers Contact No <span className="text-teal-950">0316/858/58/17</span>……FAST RESPONSE ON WHATSAPP. . . . . . . . .  
  </p>

  <div className="mt-4 space-y-4">
    <div>
      <h2 className="font-bold text-teal-950 mb-4">{`1) Google Pixel 8 Pro`}</h2>
      <p className='text-teal-950'>Brand new condition fresh</p>
      <p className='text-teal-950'>PTA approved | Dual SIM | Water pack</p>
      <p className='text-teal-950'>Storage: 12/128GB & 12/256GB both available</p>
      <p className="font-semibold text-teal-950">Price: (122,000)</p>
    </div>

    <div>
      <h2 className="font-bold text-teal-950">Google Pixel 6A</h2>
      <p className='text-teal-950'>6/128GB | Water pack | Brand new fresh</p>
      <p className='text-teal-950'>Dual SIM approved</p>
      <p className="font-semibold text-teal-950">Price: (42,999)</p>
    </div>

    <div>
      <h2 className="font-bold text-teal-950">Google Pixel 6 Pro</h2>
      <p className='text-teal-950'>12/128GB | Brand new fresh | Water pack</p>
      <p className='text-teal-950'>Dual SIM approved</p>
      <p className="font-semibold text-teal-950">Price: (70,000)</p>
    </div>
  </div>

  <p className="mt-4 font-semibold text-teal-950">
    ONLY SERIOUS BUYERS CONTACT <span className="text-teal-950">0316-8585/817</span> fast response on WhatsApp
  </p>
  <p className="mt-2 text-teal-950 font-semibold">Cash on delivery available in Pakistan!</p>
</div>

<div className=" rounded-md mt-4">
<hr className="mb-4" />
    <h2 className="text-xl font-semibold mb-4">Related ads</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
     
<div className="bg-white rounded-lg shadow ">
  <img
    alt="Close-up of a blue smartphone showing the charging port and headphone jack"
    className="w-full h-48 object-cover rounded-t-lg"
    height={400}
    src="https://images.olx.com.pk/thumbnails/513455436-240x180.jpeg"
    width={600}
  />
  <div className="p-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-lg font-semibold">Rs 38,000</span>
      <i className="far fa-heart" />
    </div>
    <h3 className="text-md font-medium mb-1">A71 10/9 8/128 Full Box</h3>
    <p className="text-sm text-gray-600">Gulgasht Colony, Multan</p>
    <p className="text-sm text-gray-500">1 hour ago</p>
  </div>
</div> 
 <div className="bg-white rounded-lg shadow">
  <img
    alt="Hand holding a One Plus 9 Pro smartphone"
    className="w-full h-48 object-cover rounded-t-lg"
    height={400}
    src="https://d8vpm3ty1v2vv.cloudfront.net/resized/36291722187449.jpg"
    width={600}
  />
  <div className="p-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-lg font-semibold">Rs 40,000</span>
      <i className="far fa-heart" />
    </div>
    <h3 className="text-md font-medium mb-1">One Plus 9 Pro</h3>
    <p className="text-sm text-gray-600">New Multan, Multan</p>
    <p className="text-sm text-gray-500">3 hours ago</p>
  </div>
</div> 
 <div className="bg-white rounded-lg shadow">
  <img
    alt="Hand holding a one plus 8t smartphone with a transparent case"
    className="w-full h-48 object-cover rounded-t-lg"
    height={400}
    src="https://images.olx.com.pk/thumbnails/518948883-240x180.jpeg"
    width={600}
  />
  <div className="p-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-lg font-semibold">Rs 40,000</span>
      <i className="far fa-heart" />
    </div>
    <h3 className="text-md font-medium mb-1">
      one plus 8t 8/128 with box
    </h3>
    <p className="text-sm text-gray-600">Cantt, Multan</p>
    <p className="text-sm text-gray-500">4 hours ago</p>
  </div>
</div> 

    </div>
  </div>
    </div>

        <div className="w-full lg:w-2/3 border-slate-300 rounded-md bg-white">
          <div className="bg-white border p-6 rounded-lg">
          <h2 className="text-lg text-teal-950 font-bold">
            Listed By Private User
          </h2>
            <div className="flex items-center mb-4">
              <img
                alt="Profile"
                className="rounded-full w-16 h-16"
                src="https://storage.googleapis.com/a1aa/image/r409cqj9R7XWUvl7lrf5mhjlzbzsq_CcKTEx8y-BTX8.jpg"
              />
              <div className="ml-4">
                <p className="text-sm font-bold text-teal-950 mt-2">GOOGLE STORE MULTAN</p>
                <p className="text-xs font-semibold text-teal-950 mt-2 mb-2">Member since Jul 2019</p>
                <a className="text-teal-950 font-bold font-sans " href="#">
                  See profile
                <ArrowForwardIos fontSize="small" />
                </a>
              </div>
            </div>

            <button className="w-full bg-teal-950 text-white py-2 rounded-sm mb-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Show phone number
            </button>
            <button className="w-full border border-teal-950 text-teal-950 py-2 rounded-sm flex items-center justify-center">
              <FontAwesomeIcon icon={faComments} className="mr-2 text-teal-950" /> Chat
            </button>
          </div>

          <div className="p-4 border border-slate-300 rounded-md mt-4">
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-sm text-teal-950 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Kacheri Road, Multan
            </p>
          </div>

          <div className=" flex justify-between rounded-md mt-4">
            <p className=" text-teal-950">AD ID 1098149006</p>
            <a className="text-teal-950" >
              <ReportOutlined/>
              Report this ad
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
