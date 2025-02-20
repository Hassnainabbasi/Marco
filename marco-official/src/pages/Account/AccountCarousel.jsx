import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Camera } from "lucide-react"; // Camera icon for UI

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

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
];

const AccountCarousel = () => {
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
            <img
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
    </div>
  );
};

export default AccountCarousel;
