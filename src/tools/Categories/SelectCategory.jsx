
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
  <div className="flex mx-auto  container ">
    <ul className="flex flex-wrap gap-3 md:gap-5 justify-center mt-2">
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
    // <div className="bg-gray-100 mt-2 shadow-lg p-5 max-h-[400px] overflow-y-auto">
    //   {/* Grid with dynamic columns */}
    //   <div
    //     className="grid gap-5"
    //     style={{
    //       gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    //     }}
    //   >
    //     {categories.map((category, index) => (
    //       <div key={index} className="mb-4">
    //         <h4 className="font-bold text-teal-900">{category.title}</h4>
    //         <ul className="text-sm list-disc ml-4">
    //           {category.items.map((item, idx) => (
    //             <li className="flex" key={idx}>
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="container mx-auto p-8 shadow-lg">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div>
        <h2 className="font-bold mb-2">Mobiles</h2>
        <ul>
          <li>Mobile Phones</li>
          <li>Accessories</li>
          <li>Smart Watches</li>
          <li>Tablets</li>
        </ul>
        <h2 className="font-bold mt-4 mb-2">Vehicles</h2>
        <ul>
          <li>Cars</li>
          <li>Cars Accessories</li>
          <li>Spare Parts</li>
          <li>Buses, Vans &amp; Trucks</li>
          <li>Rickshaw &amp; Chingchi</li>
          <li>Tractors &amp; Trailers</li>
          <li>Cars on Installments</li>
          <li>Other Vehicles</li>
          <li>Boats</li>
        </ul>
        <h2 className="font-bold mt-4 mb-2">Property for Sale</h2>
        <ul>
          <li>Land &amp; Plots</li>
          <li>Houses</li>
          <li>Apartments &amp; Flats</li>
          <li>Shops - Offices - Commercial Space</li>
          <li>Portions &amp; Floors</li>
        </ul>
        <h2 className="font-bold mt-4 mb-2">Property for Rent</h2>
        <ul>
          <li>Houses</li>
          <li>Portions &amp; Floors</li>
          <li>Apartments &amp; Flats</li>
          <li>Shops - Offices - Commercial Space</li>
          <li>Rooms</li>
          <li>Vacation Rentals - Guest Houses</li>
          <li>Roommates &amp; Paying Guests</li>
          <li>Land &amp; Plots</li>
        </ul>
        <h2 className="font-bold mt-4 mb-2">
          Electronics &amp; Home Appliances
        </h2>
        <ul>
          <li>Computers &amp; Accessories</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold mb-2">Bikes</h2>
        <ul>
          <li>Motorcycles</li>
          <li>Bicycles</li>
          <li>Spare Parts</li>
          <li>Bikes Accessories</li>
          <li>Scooters</li>
          <li>ATV &amp; Quads</li>
        </ul>
        <h2 className="font-bold mt-4 mb-2">
          Business, Industrial &amp; Agriculture
        </h2>
        <ul>
          <li>Other Business &amp; Industry</li>
          <li>Food &amp; Restaurants</li>
          <li>Medical &amp; Pharma</li>
          <li>Trade &amp; Industrial Machinery</li>
          <li>Construction &amp; Heavy Machinery</li>
          <li>Business for Sale</li>
          <li>Agriculture</li>
        </ul>
        <h2 className="font-bold mt-4 mb-2">Services</h2>
        <ul>
          <li>Other Services</li>
          <li>Car Rental</li>
          <li>Tuitions &amp; Academies</li>
          <li>Home &amp; Office Repair</li>
          <li>Web Development</li>
          <li>Domestic Help</li>
          <li>Travel &amp; Visa</li>
          <li>Event Services</li>
          <li>Construction Services</li>
          <li>Electronics &amp; Computer Repair</li>
          <li>Farm &amp; Fresh Food</li>
          <li>Drivers &amp; Taxi</li>
          <li>Health &amp; Beauty</li>
          <li>Consultancy Services</li>
          <li>Movers &amp; Packers</li>
          <li>Video &amp; Photography</li>
          <li>Architecture &amp; Interior Design</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold mb-2">Jobs</h2>
        <ul>
          <li>Other Jobs</li>
          <li>Online</li>
          <li>Part Time</li>
          <li>Sales</li>
          <li>Customer Service</li>
          <li>Marketing</li>
          <li>Restaurants &amp; Hospitality</li>
          <li>Education</li>
          <li>Domestic Staff</li>
          <li>Medical</li>
          <li>Accounting &amp; Finance</li>
          <li>Graphic Design</li>
          <li>Delivery Riders</li>
          <li>IT &amp; Networking</li>
          <li>Content Writing</li>
          <li>Hotels &amp; Tourism</li>
          <li>Clerical &amp; Administration</li>
          <li>Security</li>
          <li>Manufacturing</li>
          <li>Engineering</li>
          <li>Human Resources</li>
          <li>Real Estate</li>
          <li>Advertising &amp; PR</li>
          <li>Internships</li>
          <li>Architecture &amp; Interior Design</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold mb-2">Furniture &amp; Home Decor</h2>
        <ul>
          <li>Sofa &amp; Chairs</li>
          <li>Beds &amp; Wardrobes</li>
          <li>Tables &amp; Dining</li>
          <li>Other Household Items</li>
          <li>Office Furniture</li>
          <li>Home Decoration</li>
          <li>Garden &amp; Outdoor</li>
          <li>Painting &amp; Mirrors</li>
          <li>Curtains &amp; Blinds</li>
          <li>Rugs &amp; Carpets</li>
          <li>Bathroom Accessories</li>
        </ul>
        <h2 className="font-bold mt-4 mb-2">Fashion &amp; Beauty</h2>
        <ul>
          <li>Clothes</li>
          <li>Wedding</li>
          <li>Watches</li>
          <li>Footwear</li>
          <li>Skin &amp; Hair</li>
          <li>Jewellery</li>
          <li>Bags</li>
          <li>Fragrance</li>
          <li>Fashion Accessories</li>
          <li>Makeup</li>
          <li>Other Fashion</li>
        </ul>
        <h2 className="font-bold mt-4 mb-2">Books, Sports &amp; Hobbies</h2>
        <ul>
          <li>Other Hobbies</li>
          <li>Gym &amp; Fitness</li>
          <li>Sports Equipment</li>
          <li>Books &amp; Magazines</li>
          <li>Musical Instruments</li>
        </ul>
        <h2 className="font-bold mt-4 mb-2">Kids</h2>
        <ul>
          <li>Baby Gear</li>
          <li>Toys</li>
          <li>Kids</li>
        </ul>
      </div>
    </div>
  </div>
  )}
</div>
);

}
