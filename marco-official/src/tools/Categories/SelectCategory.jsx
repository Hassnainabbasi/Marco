
// import React, { useState } from 'react';

// export default function SelectCategory() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleToggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div>
//       <div className="flex mx-auto container mt-5">
//         <ul className="flex flex-wrap gap-3 md:gap-5 justify-center">
//           <li
//             className="text-teal-950 font-bold text-xs md:text-sm cursor-pointer flex items-center"
//             onClick={handleToggleDropdown}
//           >
//             ALL CATEGORIES
      //       <span className="ml-2">
      //         {isDropdownOpen ? (
      //           <svg
      //             xmlns="http://www.w3.org/2000/svg"
      //             fill="none"
      //             viewBox="0 0 24 24"
      //             strokeWidth="2"
      //             stroke="currentColor"
      //             className="w-4 h-4"
      //           >
      //             <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7-7 7" />
      //           </svg>
      //         ) : (
      //           <svg
      //             xmlns="http://www.w3.org/2000/svg"
      //             fill="none"
      //             viewBox="0 0 24 24"
      //             strokeWidth="2"
      //             stroke="currentColor"
      //             className="w-4 h-4"
      //           >
      //             <path strokeLinecap="round" strokeLinejoin="round" d="M19 10l-7 7-7-7" />
      //           </svg>
      //         )}
      //       </span>
      //     </li>
          // <li className="text-teal-900 text-xs md:text-sm font-semibold">Mobile Phones</li>
          // <li className="text-teal-900 text-xs md:text-sm font-semibold">Cars</li>
          // <li className="text-teal-900 text-xs md:text-sm font-semibold">Motorcycles</li>
          // <li className="text-teal-900 text-xs md:text-sm font-semibold">Houses</li>
          // <li className="text-teal-900 text-xs md:text-sm font-semibold">Video-Audios</li>
          // <li className="text-teal-900 text-xs md:text-sm font-semibold">Tablets</li>
          // <li className="text-teal-900 text-xs md:text-sm font-semibold">Lands & Plots</li>
      //   </ul>
      // </div>

//       {isDropdownOpen && (
//         <div className="mx-auto container mt-2 shadow-lg p-5">
//           <div className="grid grid-cols-3 gap-4">
//             <div>
//               <h4 className="font-bold text-teal-900">Mobiles</h4>
//               <ul className="text-sm">
//                 <li>Mobile Phones</li>
//                 <li>Accessories</li>
//                 <li>Smart Watches</li>
//                 <li>Tablets</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-teal-900">Vehicles</h4>
//               <ul className="text-sm">
//                 <li>Cars</li>
//                 <li>Spare Parts</li>
//                 <li>Buses, Vans & Trucks</li>
//                 <li>Boats</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-teal-900">Jobs</h4>
//               <ul className="text-sm">
//                 <li>Online</li>
//                 <li>Part Time</li>
//                 <li>Sales</li>
//                 <li>Customer Service</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from 'react';

export default function SelectCategory() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const categories = [
    {
      title: "Mobiles",
      items: ["Mobile Phones", "Accessories", "Smart Watches", "Tablets"],
    },
    {
      title: "Vehicles",
      items: [
        "Cars",
        "Cars Accessories",
        "Spare Parts",
        "Buses, Vans & Trucks",
        "Rickshaw & Chingchi",
        "Tractors & Trailers",
        "Cars on Installments",
        "Other Vehicles",
        "Boats",
      ],
    },
    {
      title: "Property for Sale",
      items: [
        "Land & Plots",
        "Houses",
        "Apartments & Flats",
        "Shops - Offices - Commercial Space",
        "Portions & Floors",
      ],
    },
    {
      title: "Property for Rent",
      items: [
        "Portions & Floors",
        "Houses",
        "Apartments & Flats",
        "Shops - Offices - Commercial Space",
        "Rooms",
        "Vacation Rentals - Guest Houses",
        "Roommates & Paying Guests",
        "Land & Plots",
      ],
    },
    {
      title: "Electronics & Home Appliances",
      items: [
        "Computers & Accessories",
        "Televisions & Accessories",
        "Generators, UPS & Power Solutions",
        "Cameras & Accessories",
        "Heaters & Geysers",
        "Games & Entertainment",
        "Kitchen Appliances",
        "Video-Audios",
        "Refrigerators & Freezers",
        "Other Home Appliances",
        "AC & Coolers",
        "Washing Machines & Dryers",
        "Fans",
        "Microwaves & Ovens",
        "Sewing Machines",
        "Irons & Steamers",
        "Water Dispensers",
        "Air Purifiers & Humidifiers",
      ],
    },
    {
      title: "Bikes",
      items: [
        "Motorcycles",
        "Bicycles",
        "Spare Parts",
        "Bikes Accessories",
        "Scooters",
        "ATV & Quads",
      ],
    },
    {
      title: "Business, Industrial & Agriculture",
      items: [
        "Other Business & Industry",
        "Food & Restaurants",
        "Medical & Pharma",
        "Trade & Industrial Machinery",
        "Construction & Heavy Machinery",
        "Business for Sale",
        "Agriculture",
      ],
    },
    {
      title: "Services",
      items: [
        "Other Services",
        "Car Rental",
        "Tuitions & Academies",
        "Home & Office Repair",
        "Web Development",
        "Domestic Help",
        "Event Services",
        "Travel & Visa",
        "Electronics & Computer Repair",
        "Construction Services",
        "Farm & Fresh Food",
        "Health & Beauty",
        "Consultancy Services",
        "Drivers & Taxi",
        "Movers & Packers",
        "Video & Photography",
        "Architecture & Interior Design",
        "Renting Services",
        "Camera Installation",
        "Catering & Restaurant",
        "Car Services",
        "Insurance Services",
        "Tailor Services",
      ],
    },
    {
      title: "Jobs",
      items: [
        "Other Jobs",
        "Online",
        "Part Time",
        "Sales",
        "Customer Service",
        "Marketing",
        "Restaurants & Hospitality",
        "Education",
        "Domestic Staff",
        "Medical",
        "Accounting & Finance",
        "Graphic Design",
        "Delivery Riders",
        "IT & Networking",
        "Hotels & Tourism",
        "Security",
        "Content Writing",
        "Manufacturing",
        "Clerical & Administration",
        "Human Resources",
        "Engineering",
        "Real Estate",
        "Advertising & PR",
        "Internships",
        "Architecture & Interior Design",
      ],
    },
    {
      title: "Animals",
      items: [
        "Hens",
        "Parrots",
        "Cats",
        "Dogs",
        "Pet Food & Accessories",
        "Livestock",
        "Pigeons",
        "Finches",
        "Fish",
        "Rabbits",
        "Fertile Eggs",
        "Other Birds",
        "Ducks",
        "Doves",
        "Other Animals",
        "Peacocks",
        "Horses",
      ],
    },
    {
      title: "Furniture & Home Decor",
      items: [
        "Sofa & Chairs",
        "Beds & Wardrobes",
        "Tables & Dining",
        "Other Household Items",
        "Office Furniture",
        "Home Decoration",
        "Garden & Outdoor",
        "Painting & Mirrors",
        "Curtains & Blinds",
        "Rugs & Carpets",
        "Bathroom Accessories",
      ],
    },
    {
      title: "Fashion & Beauty",
      items: [
        "Clothes",
        "Wedding",
        "Watches",
        "Footwear",
        "Skin & Hair",
        "Jewellery",
        "Bags",
        "Fragrance",
        "Fashion Accessories",
        "Makeup",
        "Other Fashion",
      ],
    },
    {
      title: "Books, Sports & Hobbies",
      items: [
        "Other Hobbies",
        "Gym & Fitness",
        "Sports Equipment",
        "Books & Magazines",
        "Musical Instruments",
      ],
    },
    {
      title: "Kids",
      items: [
        "Baby Gear",
        "Kids Vehicles",
        "Toys",
        "Kids Furniture",
        "Kids Clothing",
        "Swings & Slides",
        "Kids Accessories",
        "Bath & Diapers",
      ],
    },
  ];
 return(
  <div>
  <div className="flex mx-auto container mt-5">
    <ul className="flex flex-wrap gap-3 md:gap-5 justify-center">
      <li
        className="text-teal-950 font-bold text-xs md:text-sm cursor-pointer flex items-center"
        onClick={handleToggleDropdown}
      >
        ALL CATEGORIES
        <span className="ml-2">
          {isDropdownOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7-7 7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 10l-7 7-7-7" />
            </svg>
          )}
        </span>
      </li>
      <li className="text-teal-900 text-xs md:text-sm font-semibold">Mobile Phones</li>
          <li className="text-teal-900 text-xs md:text-sm font-semibold">Cars</li>
          <li className="text-teal-900 text-xs md:text-sm font-semibold">Motorcycles</li>
          <li className="text-teal-900 text-xs md:text-sm font-semibold">Houses</li>
          <li className="text-teal-900 text-xs md:text-sm font-semibold">Video-Audios</li>
          <li className="text-teal-900 text-xs md:text-sm font-semibold">Tablets</li>
          
    </ul>
  </div>

  {isDropdownOpen && (
    <div className="bg-gray-100 mt-2 shadow-lg p-5 max-h-[400px] overflow-y-auto">
      {/* Grid with dynamic columns */}
      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {categories.map((category, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-bold text-teal-900">{category.title}</h4>
            <ul className="text-sm list-disc ml-4">
              {category.items.map((item, idx) => (
                <li className="flex" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
);

}
