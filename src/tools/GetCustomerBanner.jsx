
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faComments, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ArrowBackIos, ArrowForward, ArrowForwardIos, ArrowRightAlt, ArrowRightAltRounded, ClearOutlined, Close, Favorite, FavoriteBorder, HeartBrokenOutlined, LocationOn, ReportOff, ReportOutlined, Share, EmailOutlined, PhoneOutlined, CameraAltOutlined, ArrowBack, Comment, LocalPhone } from '@mui/icons-material';
import Carousel from 'react-multi-carousel';
import ProductCarousel from './CarouselProduct';
import { Box, Button, Modal } from '@mui/material';
import Testing from './Testing';
import Lightbox from 'yet-another-react-lightbox';

const images = [
  "https://images.olx.com.pk/thumbnails/518749137-800x600.webp",
  "https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg",
  "https://storage.googleapis.com/a1aa/image/7pecTFe8s3ojIkvA7SoV2XtLkqVHYYGSyZDKB4F3SmI.jpg",
];

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
    const [open , setOpen] = useState(false)
    const [index, setIndex] = useState(0);
    const [modal , setModal] = useState(false)
    const openGallery = () => setOpen(true)
    const closeGallery = () => setOpen(false)
    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)
    const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <div className="w-1/2">
          <div onClick={ ()=> setModal(true)} className="border px-5 bg-gray-100 rounded-md">
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

<div className="rounded-md mt-4">
<hr className="mb-4" />
    <div className="mt-4">
  <h2 className="text-xl font-bold text-teal-950 mb-4">Related Ads</h2>
    <ProductCarousel />
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
      {open && (
      <div>
          <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={index}
          on={{ view: ({ index }) => setIndex(index) }}
          className='text-gray-300'
          render={{
            slide: ({ slide }) => (     
               <div className="fixed bg-black bg-opacity-50">
               <img 
                src={slide.src} 
                alt="Gallery Image" 
                className="max-w-[600px] max-h-[500px] object-contain mx-auto"
              />
             </div>
            ),
            buttonClose: () => (
                <button
                className="top-6 fixed left-44 bg-black text-white p-2 rounded-full"
                onClick={() => setOpen(false)}
              >
               <ArrowBack className='mr-2' />
                Back To Gallery
              </button>
            ),
          }}
        />
      </div>
      
     )}
      <div>
        
      </div>
      <Modal open={modal} onClose={closeModal}
      BackdropProps={{
        sx: {backgroundColor : "rgba(0, 0, 0, 0.8)"}
      }}
      >
       <Box
         sx={{
           position: "absolute",
           top: "50%",
           left: "50%",
           transform: "translate(-50%, -50%)",
           width: "90%",
           maxWidth: "none",
           bgcolor: "white",
           boxShadow: 24,
           zIndex : "50",
           p: { xs: 2, sm: 3 }, 
           borderRadius : "10px",
         }}
       >
         <Button
           color="teal"
           onClick={closeModal}
           sx={{
             position: "absolute",
             top: "8px",
             right: "8px",
             minWidth: "30px",
             padding: "5px",
             borderRadius: "50%",
             fontSize: "12px",
           }}
         >
           <ClearOutlined className="text-teal-950" />
         </Button>
       <div className='p-3 px-10 '>
      <h1 className='font-semibold text-sm text-teal-950'>
        <CameraAltOutlined  className='mr-2'/>
        Photos (7)</h1>
      </div>
      <div className='flex bs-container '>
<div className='border-b border-y-2 flex w-48 border-teal-950'></div>
<div className='border-b flex w-full'></div>
      </div>
      <div className=" gap-2 mt-4 mb-5 overflow-y-auto max-h-[400px] grid grid-cols-2 overflow-auto  ">
        {images.map((img, index) => (
          <button
            key={index}
            className={`w-full h-96 rounded-md border-2 ${
              selectedImage === img ? "border-transparent" : "border-transparent"
            }`}
            onClick={() => {
              setIndex(index);
              setOpen(true);
            }
          }
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
     <div className='flex justify-between'>
     <div className='flex '>
        <div className='flex'>
          <img className='w-16 object-contain' src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" />
        </div>
        <div className='p-2 px-4'>
        <h1 className='font-bold text-teal-950'>olx user</h1>
        <p className='text-teal-950'>Member since Sept 2023</p>
        </div>
          </div>
          <div className='flex items-center gap-5'>
            <button className='border-teal-950 border text-teal-950 rounded-sm w-52 py-1'>
              <LocalPhone className='mr-2'/>
              Show Number</button>
            <button className='border-teal-950 border text-white rounded-sm bg-teal-950 w-52 py-1'>
            <FontAwesomeIcon icon={faComments} className="mr-2" /> 
            Chat</button>
          </div>
     </div>
        <div>
        
         </div>
       </Box>
     </Modal> 
     
    </div>
    
  );
}
