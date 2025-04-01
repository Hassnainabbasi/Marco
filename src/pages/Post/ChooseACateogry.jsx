import { ArrowForward, ArrowForwardIos, ArrowRightAlt } from '@mui/icons-material'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: "Mobiles",
    icon: "https://www.olx.com.pk/assets/mobiles_noinline.44a7c2eda1ddc22570789a0ccc594747.svg",
    subcategories: [
      "Tablets",
      {
        name: "Accessories",
        subcategories: [
          "Charging Cables",
          "Converters",
          "Chargers",
          "Screens",
          "Screen Protectors",
          "Mobile Stands",
          "Ring Lights",
          "Selfie Sticks",
          "Power Banks",
          "Headphones",
          "Earphones",
          "Covers & Cases",
          "External Memory",
          "Other Accessories"
        ]
      },
      "Mobile Phones",
      "Smart Watches"
    ]
  },
  {
    name: "Vehicles",
    icon: "https://www.olx.com.pk/assets/vehicles_noinline.6dc597b67b2291206d31e2a68f8a24af.svg",
    subcategories: ["Cars", "Cars on Installments", "Car Accessories", "Spare Parts", "Buses, Vans & Trucks", "Rickshaw & Chingchi", "Other Vehicles", "Boats", "Tractors & Trailers"],
  },
  {
    name: "Property for Sale",
    icon: "https://www.olx.com.pk/assets/property-for-sale_noinline.c018c0d0282f22a3c31bb0c42f3c60d7.svg",
    subcategories: ["Land & Plots", "Houses", "Apartment & Flats", "Shop - Offices - Commercial Space", "Portion & Floors"],
  },
  {
    name: "Property for Rent",
    icon: "https://www.olx.com.pk/assets/property-for-rent_noinline.864cf34b8ee4401929a10d17b20e04fe.svg",
    subcategories: ["Land & Plots", "Houses", "Apartment & Flats", "Shop - Offices - Commercial Space", "Portion & Floors", "Rooms", "Rooms & Paying Guest"],
  },
  {
    name: "Electronics & Home Appliances",
    icon: "https://www.olx.com.pk/assets/business_noinline.0435ec0dc583161da4ab51295bd797d9.svg",
    subcategories: [  {
      name: "Computer & Accessories",
      subcategories: [
        "Desktops",
        "Workstations",
        "Gaming PCs",
        "Laptops",
        "Computer & Laptop Accessories",
        "Computer Components",
        "Servers",
        "Softwares",
        "Networking",
        "Printers & Photocopiers",
        "Inks & Toners"
      ]
    },
    {
      name : "Games & Entertaimet", subcategories : [
      "Gaming Consoles",
      "Videos Games",
      "Controllers",
      "Gaming Acessories"
    ]}, 
    {
      name: "Cameras & Accessories",
      subcategories: [
        "Digital Cameras",
        "CCTV Cameras",
        "Drones",
        "Binoculars",
        "Video Cameras",
        "Camera Lenses",
        "Flash Guns",
        "Bags & Cases",
        "Tripods & Stands",
        "Camera Batteries",
        "Professional Microphones",
        "Video Lights",
        "Gimbals & Stabilizers",
        "Other Camera Accessories"
      ]
    },
    , 
    {
      name : "Televison & Accesories",
      subcategories : [
        "Televisons",
        "Dish Antennas",
        "IPTV",
        "Projectors & Projection Screens",
        "TV Cables",
        "Android Boxes",
        "Wall Mounts",
        "TV Remotes",
        "Other TV Acessories"
      ]
     }
    , 
    {
      name: "Video-Audios",
      subcategories: [
        "Radios",
        "Microphones",
        "Home Theater Systems",
        "Amplifiers",
        "Sound Bars",
        "Speakers",
        "Audio Interface",
        "Digital Recorders",
        "Audio Mixers",
        "Walkie Talkie",
        "CD/DVD Players",
        "Turntables & Accessories",
        "Cassette Players & Recorders",
        "MP3 Players",
        "Car Audio/Video",
        "Other Video - Audio"
      ]
    },

    , 
    {
      name : "AC & Coolers",
      subcategories : [
        "Air Conditioners",
        "Air Coolers",
        "AC & Cooler Accessories"
      ]
    }
    , "Fans", 
    {
      name : "Heaters & Geysers",
      subcategories : [
        "Heaters",
        "Geysers",
        "Heating Rods"
      ]
    }
    , "Air Purifiers & Humidifiers", 
    {
      name : "Washing Machine & Dryer",
      subcategories : [
        "Washer",
        "Spin Dryer",
        "Washer & Dryer"
      ]
    }
    , 
    {
      name : "Irons & Steamers",
      subcategories : [
        "Irons",
        "Steamers"
      ]
    }
    , "Sewing Machines", 
    {
      name : "Generators, UPS & Power Solutions",
      subcategories : [
        "Generators",
        "UPS",
        "Solar Panels",
        "Solar Inverter",
        "Solar Accessories",
        "Batteries"
      ]
    }
    , "other Home Appliances", 
    {
      name : "Refrigerators & Freezers",
      subcategories : [
        "Refrigerators",
        "Freezers",
        "Mini"
      ]
    }
    , 
    {
      name : "Microwaves & Ovens",
      subcategories : [
        "Ovens",
        "Microwaves"
      ]
    }
    , "Water Dispensers", 
    {
      name: "Kitchen Appliances",
      subcategories: [
        "Juicers",
        "Food Factory",
        "Stoves",
        "Blenders",
        "Air Fryers",
        "Choppers",
        "Grills",
        "Water Purifiers",
        "Mixers",
        "Electric Kettles",
        "Toasters",
        "Cookers",
        "Hot Plates",
        "Coffee & Tea Machines",
        "Hobs",
        "Dinner Sets",
        "Sandwich Makers",
        "Vegetable Slicers",
        "Hoods",
        "Meat Grinders",
        "Dishwashers",
        "Roti Makers",
        "Sinks",
        "Food Steamers",
        "Other Kitchen Appilances"
      ]
    }
  ],
  },
  {
    name: "Bikes",
    icon: "https://www.olx.com.pk/assets/bikes_noinline.3fd0a90292fe3789fbb152331b6b98d7.svg",
    subcategories: [
      {
        name : "Motorcycles",
        subcategories : [
          "Standards",
          "Electric Bikes",
          "Sports & Heavy Bikes",
          "Cafe Racers",
          "Cruisers",
          "Trail",
          "Others",
        ]
      }
      , 
      {
        name: "Spare Parts",
        subcategories: [
          "Air Filters",
          "Carburetors",
          "Bearings",
          "Side Mirrors",
          "Motorcycle Batteries",
          "Switches",
          "Lighting",
          "Cylinders",
          "Clutches",
          "Pistons",
          "Chain, Covers & Sprockets",
          "Brakes",
          "Handle Bars & Grips",
          "Levers",
          "Seats",
          "Exhausts",
          "Fuel Tanks",
          "Horns",
          "Speedometers",
          "Plugs",
          "Stands",
          "Tyres & Tubes",
          "Other Spare Parts"
        ]
      },
      ,
      {
        name: "Bike Accessories",
        subcategories: [
          "Bicycle Air Pumps",
          "Oils / Lubricants",
          "Bike Covers",
          "Bike Gloves",
          "Helmets",
          "Tail Boxes",
          "Bike Jackets",
          "Bike Locks",
          "Safe Guards",
          "Other Bike Accessories"
        ]
      },

      , 
      {
        name : "Bicycles",
        subcategories : [
          "Road Bikes",
          "Mountain Bikes",
          "Hybrid Bikes",
          "BMX Bikes",
          "Electric Bicycles",
          "Folding Bikes",
          "Other Bicycles",
          
        ]
      }
      , "ATV & Quads", "Scooters"],
  },
  {
    name: "Business, Industrial & Agriculture",
    icon: "https://www.olx.com.pk/assets/business_noinline.0435ec0dc583161da4ab51295bd797d9.svg",
    subcategories: [
      {
        name: "Business for Sale",
        subcategories: [
          "Mobile Shops",
          "Water Plants",
          "Beauty Salons",
          "Grocery Stores",
          "Hotels & Restaurants",
          "Pharmacies",
          "Snooker Clubs",
          "Cosmetic & Jewellery Shops",
          "Gyms",
          "Clinics",
          "Franchises",
          "Gift & Toy Shops",
          "Petrol Pumps",
          "Auto Part Shops",
          "Other Businesses"
        ]
      },
      ,
      {
        name: "Food & Restaurant",
        subcategories: [
          "Baking Equipments",
          "Food Display Counters",
          "Ovens & Tandoor",
          "Fryers",
          "Tables & Platforms",
          "Fruit & Vegetable Machines",
          "Chillers",
          "Food Stalls",
          "Delivery Bags",
          "Crockery & Cutlery",
          "Ice Cream Machines",
          "Other Restaurant Equipments"
        ]
      },
      , 
      {
        name: "Construction & Heavy Machinery",
        subcategories: [
          "Construction Material",
          "Concrete Grinders",
          "Drill Machines",
          "Loaders",
          "Concrete Mixers",
          "Road Roller",
          "Cranes",
          "Construction Lifters",
          "Pavers",
          "Excavators",
          "Concrete Cutters",
          "Compactors",
          "Water Pumps",
          "Bulldozers",
          "Air Compressors",
          "Dump Truck",
          "Motor Graders",
          "Other Heavy Equipment"
        ]
      },

      ,
      {
        name: "Agriculture",
        subcategories: [
          "Farm Machinery and Equipment",
          "Seeds",
          "Crops",
          "Pesticides & Fertilizers",
          "Plants & Trees",
          "Silage",
          "Other Agriculture"
        ]
      }
      ,
      {
        name: "Medical & Pharma",
        subcategories: [
          "Ultrasound Machines",
          "Surgical Masks",
          "Patient Beds",
          "Wheelchairs",
          "Oxygen Concentrators",
          "Oxygen Cylinders",
          "Pulse Oximeters",
          "Hearing Aids",
          "Blood Pressure Monitors",
          "Thermometers",
          "Walkers",
          "Nebulizers",
          "Sanitizers",
          "Surgical Gloves",
          "X-ray Machines",
          "Lighting - Medical",
          "Medicines",
          "Glucometers",
          "Breast Pumps",
          "Commode Chairs",
          "Surgical Instruments",
          "Medical Scrubs",
          "Microscopes",
          "Other Medical Supplies"
        ]
      },
      , 
      {
        name: "Trade & Industrial Machinery",
        subcategories: [
          "Woodworking Machines",
          "Currency Counting Machines",
          "Plastic & Rubber Processing Machines",
          "Industry Laser Machines",
          "Molding Machines",
          "Packaging Machines",
          "Welding Equipments",
          "Paper Machines",
          "Air Compressors",
          "Sealing Machines",
          "Lathe Machines",
          "Liquid Filling Machines",
          "Marking Machines",
          "Textile Machinery",
          "Sewing Machines",
          "Knitting Machines",
          "Embroidery Machines",
          "Printing Machines",
          "Other Business & Industrial Machines"
        ]
      }
      , "Other Busniess & Industries"],
  },
  {
    name: "Services",
    icon: "https://www.olx.com.pk/assets/services_noinline.45ae56797ea7fef0d10caa5a9781e582.svg",
    subcategories: [
      "Architecture & Interior Design",
      "Camera Installation",
      "Car Rental",
      "Car Services",
      "Catering & Restaurant",
      "Construction Services",
      "Consultancy Services",
      {
        name : "Domestic Help",
        subcategories : [
          "Maids",
          "Babysitters",
          "Cooks",
          "Nursing Staff",
          "Other Domestic Help"
        ]
      }
      ,
      {
        name : "Drivers & Taxi",
        subcategories : [
          "Drivers",
          "Pick & Drops",
          "Carpool"
        ]
      }
      ,
      "Tuitions & Academies",
      "Electronics & Computer Repair",
      "Event Services",
      "Farm & Fresh Food",
      {
        name : "Health & Beauty",
        subcategories : [
          "Beauty & Spa",
          "Fitness Trainers",
          "Health Services"
        ]
      }
      ,
      {
        name: "Home & Office Repair",
        subcategories: [
          "Painters",
          "Electricians",
          "Plumbers",
          "Carpenters",
          "Pest Control",
          "Water Tank Cleaning",
          "Deep Cleaning",
          "Geyser Services",
          "AC Services",
          "Other Repair Services"
        ]
      }
      ,
      "Insurance Services",
      "Movers & Packers",
      "Renting Services",
      "Tailor Services",
      "Travel & Visa",
      "Video & Photography",
      "Web Development",
      "Other Services"
    ],
  },
  {
    name: "Jobs",
    icon: "https://www.olx.com.pk/assets/jobs_noinline.d6f4dade8cdc874401969e2bd6318078.svg",
    subcategories: [
      "Accounting & Finance",
      "Advertising & PR",
      "Architecture & Interior Design",
      "Clerical & Administration",
      "Content Writing",
      "Customer Service",
      "Delivery Riders",
      "Domestic Staff",
      "Education",
      "Engineering",
      "Graphic Design",
      "Hotels & Tourism",
      "Human Resources",
      "Internships",
      "IT & Networking",
      "Manufacturing",
      "Marketing",
      "Medical",
      "Online",
      "Other Jobs",
      "Part Time", 
      "Real Estate",
      "Resturant & Hospitality",
      "Sales",
      "Security"
    ],
  },
  {
    name: "Animals",
    icon: "https://www.olx.com.pk/assets/animals_noinline.d46a492a3e40e6af1e9182d449f29d54.svg",
    subcategories: [
      "Cats",
      "Dogs",
      "Horses",
      "Rabbits",
      "Other Animals",
      "Hens",
      "Parrots",
      "Pigeons",
      "Finches",
      "Doves",
      "Peacocks",
      "Ducks",
      "Other Birds",
      "Fertile Eggs",
      "Fish",
      {
        name : "Livestock",
        subcategories : [
          "Buffalos",
          "Bulls",
          "Camels",
          "Cows",
          "Goats",
          "Sheep",
          "Others"
        ]
      }
      ,
      {
        name: "Pet Food & Accessories",
        subcategories: [
          "Cat Food",
          "Cat Accessories",
          "Dog Food",
          "Dog Accessories",
          "Fish Food",
          "Aquariums",
          "Incubators",
          "Brooders",
          "Hen Cages",
          "Birds Food",
          "Birds Accessories",
          "Other Animal Food & Accessories",
          "Medicines"
        ]
      }

    ],
  },
  {
    name: "Furniture & Home Decor",
    icon: "https://www.olx.com.pk/assets/furniture_noinline.a5d6d061d6abaf3312be92b3e986fe70.svg",
    subcategories: [
      {
        name: "Sofas & Chairs",
        subcategories: [
          "Sofas",
          "Sofa Beds",
          "Sofa Covers",
          "Cushions",
          "Chairs",
          "Recliners",
          "Bean Bags"
        ]
      }
      ,
      {
        name: "Beds & Wardrobes",
        subcategories: [
          "Beds",
          "Mattresses",
          "Mattress Covers",
          "Pillows & Cases",
          "Bed Sheets",
          "Blankets & Comforters",
          "Other Bedding Accessories",
          "Wardrobes"
        ]
      }
      ,
      "Tables & Dining",
      "Bathroom Accessories",
      {
        name: "Garden & Outdoors",
        subcategories: [
          "Artificial Grass",
          "Benches",
          "Outdoor Chairs",
          "Outdoor Tables",
          "Outdoor Fountains",
          "Outdoor Lights",
          "Outdoor Umbrellas",
          "Outdoor Swings",
          "Plants & Pots",
          "Tents & Shades",
          "Other Outdoor Items"
        ]
      }
      ,
     {
      name :  "Painting & Mirrors",
      subcategories : [
        "Paintings",
        "Painting Acessories",
        "Frames",
        "Mirror Lights",
        "Mirrors"
      ]
     }
      ,
      {
        name : "Rugs & Carpets",
        subcategories : [
          "Rugs",
          "Carpets",
          "Mats",
          "Prayer Mats"
        ]
      }
      ,
      {
        name : "Curtains & Blinds",
        subcategories : [
          "Curtains",
          "Blinds",
          "Curtain Acessories"
        ]
      }
      ,
      {
        name : "Office Furniture",
        subcategories : [
          "Office Chairs",
          "Office Sofas",
          "Office Tables",
          "Shelves & Racks",
          "Office Cabinets",
          "Other Office Furniture"
        ]
      }
      ,
      {
        name: "Home Decoration",
        subcategories: [
          "Artificial Flowers & Plants",
          "Candles",
          "Chandeliers",
          "Decorative Trays",
          "Handicrafts",
          "Indoor Fountains",
          "Lamps",
          "Tissue Boxes",
          "Sculptures",
          "Showpieces",
          "Vases",
          "Flooring",
          "Wall Clocks",
          "Wall Hangings",
          "Wall Lights",
          "Other Decor Items"
        ]
      }

    ],
  
  },
  {
    name: "Fashion & Beauty",
    icon: "https://www.olx.com.pk/assets/fashion_noinline.bfcd59a02f93e5266557005afbef528d.svg",
    subcategories: [
          {
            name: "Fashion & Accessories",
            subcategories: [
              "Caps",
              "Scarves",
              "Ties",
              "Belts",
              "Socks",
              "Gloves",
              "Cufflinks",
              "Sunglasses"
            ]
          }
      ,
      {
        name : "Clothes",
        subcategories : [
          "Eastern",
          "Western",
          "Hijabs & Abayas",
          "Sports Clothes",
          "Kids Clothes"
        ]
      }
      ,
      "Footwear",
      "Bags",
      "Jewellery",
     {
      name :  "Makeup",
      subcategories : [
        "Brushes",
        "Eyes",
        "Face",
        "Lips",
        "Nails",
        "Other Makeup Accessories"
      ]
     }
      ,
      {
        name : "Skin & Hair",
        subcategories : [
          "Hair Care",
          "Skin Care"
        ]
      }
      ,
      "Watches",
      "Fragrance",
      {
        name : "Wedding",
        subcategories : [
          "Bridals",
          "Grooms",
          "Formals"
        ]
      }
      ,
      "Other Fashion"
    ],
  },
  {
    name: "Books, Sports & Hobbies",
    icon: "https://www.olx.com.pk/assets/books_noinline.76258f31282677c284caceacd09c324d.svg",
    subcategories: [
      {
        name : "Books & Magazines",
        subcategories : [
          "Books",
          "Magazines",
          "Dictionaries",
          "Stationary Items",
          "Calculators"
        ]
      }
      , "Musical Instuments", "Sports Equipment", "Gym & Fitness", "Other Hobbies"],
  },
  {
    name: "Kids",
    icon: "https://www.olx.com.pk/assets/kids_noinline.f2c727c099e56c33fb79733597068140.svg",
    subcategories: [
      "Kids Furniture",
      {
        name : "Kids Vehicles",
        subcategories : [
          "Kids Bikes",
          "Kids Cars",
          "Kids Cycles",
          "Kids Scooties",

        ]
      }
      ,
      "Toys",
      {
        name: "Baby Gear",
        subcategories: [
          "Prams & Walkers",
          "Baby Bouncers",
          "Baby Carriers",
          "Baby Cots",
          "Baby Swings",
          "Car Seats",
          "High Chairs",
          "Other Baby Gear"
        ]
      }
      ,
      "Bath & Diapers",
      "Swings & Slides",
      {
        name : "Kids Clothing",
        subcategories : [
          "Kids Costumes",
          "Kids Clothes",
          "Kids Shoes",
          "Kids Uniforms",
          "Others",
        ]
      }
      ,
      "Kids Accessories"
    ],
  },
];

export default function ChooseACateogry({selectedsetCategory}) {
  const [selectedCategory, setSelectedCategory] = useState(selectedsetCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    setSelectedCategory(selectedsetCategory);
  }, [selectedsetCategory]);

 const navigate = useNavigate()

  return (
    <div className="post-container mt-8">
      <div className="mb-4">
        <h1 className="text-lg font-bold px-8 text-teal-950">Choose a category</h1>
      </div>
      <div className="flex">
        <div className="w-full flex-1 border border-gray-300">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`px-5 h-12 flex items-center justify-between cursor-pointer 
                ${category.name === selectedCategory ? "bg-teal-100" : "hover:bg-teal-100"} 
                ${index !== categories.length - 1 ? "border-b border-gray-300" : ""}`}
                onClick={() => {
                  if (selectedCategory !== category.name) {
                    setSelectedCategory(category.name);
                  }
                }}
            >
              <div className="flex gap-5 items-center">
                <img className="w-6" src={category.icon} alt={category.name} />
                <h1 className="text-teal-950 font-semibold text-sm">{category.name}</h1>
              </div>
              <ArrowForwardIos style={{ fontSize: "20px" }} className="text-teal-950 text-sm" />
            </div>
          ))}
        </div>

        <div className="w-full flex-1 border border-gray-300">
          {selectedCategory && (
            <div>
              {categories
                .find((cat) => cat.name === selectedCategory)
                ?.subcategories.map((sub, idx) => (
                  <div
                    key={idx}
                    className={`w-full px-7 h-12 flex items-center justify-between cursor-pointer 
                       ${selectedSubcategory === sub.name ? "bg-teal-100" : "hover:bg-teal-100"} 
                      ${idx === 0 ? "border-b border-gray-300 border-x-0" : "border-b border-gray-300"}`}
                      onClick={() => {
                       if (typeof sub === "string") {
                        navigate('/post/attributes')
                       }
                        else {
                          setSelectedSubcategory(sub.name);
                        }
                      }}
                  >
                    <h1 className="text-teal-950 text-sm">{typeof sub === "string" ? sub : sub.name}</h1>
                    {typeof sub === "object" && <ArrowForwardIos style={{ fontSize: "20px" }} />}
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="w-full flex-1 border border-gray-200">
          {selectedSubcategory && (
            <div>
              {categories
                .find((cat) => cat.name === selectedCategory)
                ?.subcategories.find((sub) => typeof sub === "object" && sub.name === selectedSubcategory)
                ?.subcategories.map((nested, idx) => (
                  <div
                    key={idx}
                    
                    className={`w-full px-7 h-12 flex items-center justify-between border-b 
                       ${selectedSubcategory === nested.name ? "bg-teal-100" : "hover:bg-teal-100"} 
                    `}
                  >
                    <h1 className="text-teal-950  text-sm">{nested}</h1>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
