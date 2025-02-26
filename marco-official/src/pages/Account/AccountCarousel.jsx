import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowLeft, ArrowLeftIcon, Camera, HeartIcon } from "lucide-react"; 
import Lightbox from 'yet-another-react-lightbox';
import { ArrowBack, ArrowBackIos, CameraAltOutlined, ClearOutlined, CloseOutlined, LocalPhone, Share } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Modal } from "@mui/material";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const images = [
  "https://images.olx.com.pk/thumbnails/518749137-800x600.webp",
  "https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg",
  "https://storage.googleapis.com/a1aa/image/7pecTFe8s3ojIkvA7SoV2XtLkqVHYYGSyZDKB4F3SmI.jpg",
];


const products = [
  {
    id: 1,
    name: "Samsung Galaxy S22 Plus",
    price: "Rs 113,000",
    location: "Johar Town, Lahore",
    image: "https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg",
  },
  {
    id: 2,
    name: "Vivo X100 Pro 16/512GB",
    price: "Rs 170,000",
    location: "Cantt, Sialkot",
    image: "https://storage.googleapis.com/a1aa/image/M1N39wg2FIklTfmbm81_0ZT2D1FMgKXsgKBoduzraH0.jpg",
  },
  {
    id: 3,
    name: "iPhone 12 PTA Approved",
    price: "Rs 124,000",
    location: "Johar Town, Lahore",
    image: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg",
  },
  {
    id: 4,
    name: "iPhone 13 PTA Approved",
    price: "Rs 150,000",
    location: "DHA, Karachi",
    image: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg",
  },
  {
    id: 5,
    name: "OnePlus 11 Pro 12GB",
    price: "Rs 130,000",
    location: "Faisal Town, Lahore",
    image: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg",
  },
  {
    id: 6,
    name: "Samsung Galaxy S22 Plus",
    price: "Rs 113,000",
    location: "Johar Town, Lahore",
    image: "https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg",
  },
];

const AccountCarousel = () => {
  const [open , setOpen] = useState(false)
  const [index, setIndex] = useState(0);
  const [modal , setModal] = useState(false)
  const openGallery = () => setOpen(true)
  const closeGallery = () => setOpen(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  const [selectedImage, setSelectedImage] = useState(products[0]);

  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = products.length;

  const handleSlideChange = (index) => {
    setCurrentIndex((index % totalSlides) + 1); // Looping Effect
  };

  return (
    <div className="relative">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2500} 
        transitionDuration={1000} 
        afterChange={handleSlideChange}
        showDots={true} 
        renderDotsOutside={false} 
        dotListClass="custom-dot-list-style" 
      >
        {products.map((product, index) => (
          <div key={index} className="bg-white w-full h-full shadow-lg rounded-lg relative">
          <button className="absolute text-teal-950 bg-yellow-500 ml-2 mt-2 px-2 rounded-sm">Feature </button>
            <img 
              onClick={()=> setModal(true)}
              src={product.image}
              alt={product.name}
              className="h-72 w-full object-cover rounded-md"
            />
          </div>
        ))}
      </Carousel>

      <style>
        {`
          .custom-dot-list-style {
            position: absolute;
            bottom: 10px;
            width: 100%;
            display: flex;
            justify-content: center;
            border: none;
          }
          .react-multi-carousel-dot button {
            width: 8px;
            height: 8px;
            background: #ddd;
            border-radius: 50%;
            margin: 0 5px;
            transition: 0.3s;
            border: none;
            
          }
          .react-multi-carousel-dot--active button {
            background: #fff;
            width: 10px;
            height: 10px;
          }
        `}
      </style>

      <div className="absolute bottom-2 right-2 bg-white p-1 text-xs flex items-center gap-1 rounded-md font-bold shadow-md">
        <Camera size={16} className="text-gray-600" />
        {currentIndex} / {totalSlides}
      </div>
      {open && (
      <div>
      {products.map((product)=>{
         <Lightbox
         open={open}
         close={() => setOpen(false)}
         slides={products.map((product) => ({ src : product.image }))}
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
      })}
      </div>
      
     )}

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
            width: "100%",
            bgcolor : "white",
            maxWidth: "none",
            boxShadow: 24,
            zIndex : "50",
            height : "95vh",
            borderRadius : "10px",
          }}
        >
          
        <div className='p-3 flex text-teal-950 bg-gray-50'>
        <div onClick={closeModal} className="flex items-center">
          <ArrowBackIos />
        </div>
     <div className="flex justify-evenly gap-5 items-center w-full">
     <div className="flex flex-col px-2 mt-5">
          <h1 className="whitespace-nowrap font-bold">Oppo Reno Z (8gb/512gb)Ur...</h1>
          <h1>Rs 22,499</h1>
        </div>
        <div className="flex gap-2 text-teal-950">
          <HeartIcon />
          <Share />
        </div>
     </div>
        </div>
      
        <div className="mb-3 overflow-y-auto max-h-[calc(86vh-100px)] grid auto-rows-auto overflow-auto  ">
          {products.map((img, index) => (
            <button
              key={index}
              className={`w-full h-96 rounded-md border-2 ${
                selectedImage === img ? "border-transparent" : "border-transparent"
              } ${index % 3 === 0 ? "col-span-2" : "col-span-1"}`}
              onClick={() => {
                setSelectedImage(img)
                setIndex(index);
                setOpen(true);
              }
            }
            >
              <img src={img.image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      <div className='flex justify-center w-full '>
              <button className='border-teal-950 border w-80 text-teal-950 rounded-sm p-2'>
                <LocalPhone className='mr-2'/>
                Chat</button>
      </div>
          <div>
          </div>
        </Box>
      </Modal> 
      {open && (
      <div>
          <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={products.map((product) => ({ src: product.image }))}
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
                <div>
                  <button
                className="left-1 fixed bg-black text-white p-2 rounded-full"
                onClick={() => setOpen(false)}
              >
               <CloseOutlined style={{fontSize : "32px"}}/>
              </button>
                </div>
            ),
          }}
        />
      </div>
      
     )}
    </div>
  );
};

export default AccountCarousel;
