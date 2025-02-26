import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    id: 3,
    name: "Vivo X100 Pro 16/512GB",
    price: "Rs 170,000",
    location: "Cantt, Sialkot",
    image: "https://storage.googleapis.com/a1aa/image/M1N39wg2FIklTfmbm81_0ZT2D1FMgKXsgKBoduzraH0.jpg",
  },
  {
    id: 4,
    name: "iPhone 12 PTA Approved",
    price: "Rs 124,000",
    location: "Johar Town, Lahore",
    image: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg",
  },
  {
    id: 4,
    name: "iPhone 12 PTA Approved",
    price: "Rs 124,000",
    location: "Johar Town, Lahore",
    image: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg",
  },
  {
    id: 4,
    name: "iPhone 12 PTA Approved",
    price: "Rs 124,000",
    location: "Johar Town, Lahore",
    image: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg",
  },
];

const ProductCarousel = () => {
  return (
    <div>
        <div className="">
      <Carousel responsive={responsive} autoPlay={true} infinite={true} itemClass="px-1">
        {products.map((product) => (
          <div key={product.id} className="bg-white w-full border p-5 shadow-lg rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover rounded-md"
            />
            <h3 className="text-lg font-bold text-teal-900 mt-3">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.location}</p>
            <p className="text-md font-semibold text-teal-700 mt-1">{product.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default ProductCarousel;
