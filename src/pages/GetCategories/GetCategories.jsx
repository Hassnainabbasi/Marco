import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Headerone'
import {
  ArrowDown,
  ArrowDown01,
  ArrowDownIcon,
  ArrowUp,
  ArrowUp01,
  ArrowUpToLine,
  Heart,
  MenuIcon,
} from 'lucide-react'
import {
  Autocomplete,
  Popper,
  styled,
  TextField,
  ToggleButton,
  Modal,
  Box,
  Button,
  InputAdornment,
} from '@mui/material'
import {
  ArrowBack,
  Comment,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  ClearOutlined,
  LocalPhoneOutlined,
  MapsUgcOutlined,
  MyLocation,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material'
import SeeStuffButton from './SeeStuffButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faPhoneAlt,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import Footer from '../../components/footer/Footer'
import FooterTwo from '../../components/footer/FooterTwo'
import HeaderCat from '../../components/header/HeaderCat'
import GetCatFooter from '../../components/footer/GetCatFooter'
import { Link } from 'react-router-dom'
import MobileHeader from '../../components/header/MobileHeader'
import FilterComponent from './FilterComponent'
import { MobileRecentData } from '../../tools/MobileRecentData'
import { GetMobileRecentData } from '../../tools/GetMobileRecentData'

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: 10,
  backgroundColor: '#fff',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  border: '1px solid #ccc',
  overflow: 'hidden',
  '& .MuiAutocomplete-listbox': {
    maxHeight: '300px',
    overflowY: 'auto',
    border: 'none',
  },
  '& .MuiAutocomplete-option': {
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
}))

export const LocationIcon = () => (
  <svg
    className="fill-teal-950"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 1024 1024"
  >
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
)

const items = [
  {
    id: 1,
    price: 'Rs 38,000',
    title: 'A71 10/9 8/9/128 Full Box',
    location: 'Gulgasht Colony, Multan',
    image:
      'https://cdn.pixabay.com/photo/2019/11/23/11/33/mobile-phone-4646854_640.jpg',
    featured: false,
  },
  {
    id: 2,
    price: 'Rs 37,00,000',
    title: 'Grand 1.5D Executive Auto',
    location: 'Korangi, Karachi',
    image:
      'https://img-ik.cars.co.za/ik-seo/carsimages/tr:n-stock_med/9567231/2024-Hyundai-Creta-Grand-15D-Executive-Auto.jpg?v=1691358132',
    featured: true,
  },
  {
    id: 3,
    price: 'Rs 78,000',
    title: 'Inverter AC',
    location: 'Sukkur, Sindh',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1G13Fyju4n8hR2Ydh8q-ZNLcuDHm1M0GxQ&s',
    featured: true,
  },
]

const dummyData = [
  {
    id: 2,
    featured: false,
    image: 'https://images.olx.com.pk/thumbnails/512445908-800x600.webp',
    price: 'Rs 120,000',
    title: 'Gaming PC - Intel i7 10th Gen with RTX 3060',
    location: 'Gulshan-e-Iqbal, Karachi • 2 days ago',
  },
  {
    id: 3,
    featured: true,
    image: 'https://images.olx.com.pk/thumbnails/512445809-800x600.webp',
    price: 'Rs 35,000',
    title: 'Apple iPhone 12 Pro Max - 256GB PTA Approved',
    location: 'DHA Phase 6, Lahore • 3 hours ago',
  },
  {
    id: 4,
    featured: false,
    image: 'https://images.olx.com.pk/thumbnails/512445710-800x600.webp',
    price: 'Rs 85,000',
    title: 'Honda CG 125 2022 Model - Excellent Condition',
    location: 'Faisal Town, Islamabad • 5 days ago',
  },
  {
    id: 5,
    featured: true,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvchxvfe6ViKmSv0cKQX1ltOL3gqlkg1MWfA&s',
    price: 'Rs 22,000',
    title: 'Samsung Galaxy S21 Ultra - 128GB',
    location: 'Bahria Town, Rawalpindi • 1 day ago',
  },
  {
    id: 6,
    featured: false,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAS8vIbI_wKFsz5grgR9vOIMy7R-OVvayv3Q&s',
    price: 'Rs 60,000',
    title: 'Canon EOS 1500D DSLR Camera - 18-55mm Lens',
    location: 'Saddar, Karachi • 3 weeks ago',
  },
  {
    id: 7,
    featured: true,
    image:
      'https://img.drz.lazcdn.com/static/pk/p/49aa57c4be74cd850d70950e133c3be7.jpg_720x720q80.jpg',
    price: 'Rs 14,500',
    title: 'Office Chair - Ergonomic High Back',
    location: 'Johar Town, Lahore • 2 days ago',
  },
  {
    id: 8,
    featured: false,
    image:
      'https://s.alicdn.com/@sc04/kf/H75025ef87d3443f78b8421cb3eec5a4eb.jpg_720x720q50.jpg',
    price: 'Rs 28,000',
    title: 'Treadmill - Electric Running Machine',
    location: 'North Nazimabad, Karachi • 4 days ago',
  },
  {
    id: 9,
    featured: true,
    image: 'https://images.olx.com.pk/thumbnails/512445215-800x600.webp',
    price: 'Rs 9,500',
    title: 'Wooden Study Table - Compact Design',
    location: 'G-9, Islamabad • 1 week ago',
  },
  {
    id: 10,
    featured: false,
    image: 'https://images.olx.com.pk/thumbnails/512445116-800x600.webp',
    price: 'Rs 48,000',
    title: 'Yamaha YBR 125 - 2019 Model',
    location: 'Model Town, Lahore • 6 days ago',
  },
  {
    id: 11,
    featured: true,
    image:
      'https://bakar.pk/cdn/shop/products/4d16624757fe283a02b6d64ee3efb339_673x.jpg?v=1652221631',
    price: 'Rs 32,000',
    title: 'Smart LED TV 42-inch - Android',
    location: 'Clifton, Karachi • 3 days ago',
  },
  {
    id: 12,
    featured: false,
    image:
      'https://i.pcmag.com/imagery/roundups/01hiB08j7yaJGJmPl2YhRRH-59..v1713199550.jpg',
    price: 'Rs 75,000',
    title: 'Gaming Laptop - Dell G3 Core i5 10th Gen',
    location: 'PECHS, Karachi • 2 weeks ago',
  },
  {
    id: 13,
    featured: true,
    image: 'https://images.olx.com.pk/thumbnails/512444713-800x600.webp',
    price: 'Rs 16,000',
    title: 'Automatic Washing Machine - 8kg Capacity',
    location: 'Shadman, Lahore • 5 days ago',
  },
  {
    id: 14,
    featured: false,
    image: 'https://images.olx.com.pk/thumbnails/512444614-800x600.webp',
    price: 'Rs 55,000',
    title: 'Haier Refrigerator - Double Door Frost Free',
    location: 'I-8, Islamabad • 1 day ago',
  },
  {
    id: 15,
    featured: true,
    image:
      'https://global.honda/content/dam/site/global-en/stories/cq_img/070/g02.jpg',
    price: 'Rs 45,000',
    title: 'Electric Scooter - Foldable and Rechargeable',
    location: 'Nazimabad, Karachi • 3 hours ago',
  },
  {
    id: 16,
    featured: false,
    image:
      'https://interwood.pk/cdn/shop/files/Sienna_Dining_Table.jpg?v=1739198473',
    price: 'Rs 25,000',
    title: 'Wooden Dining Table - 6 Seater',
    location: 'Johar Town, Lahore • 2 days ago',
  },
  {
    id: 17,
    featured: true,
    image: 'https://images.olx.com.pk/thumbnails/512444317-800x600.webp',
    price: 'Rs 10,500',
    title: 'Samsung Microwave Oven - 20L',
    location: 'Bahria Town, Rawalpindi • 1 week ago',
  },
  {
    id: 18,
    featured: false,
    image: 'https://images.olx.com.pk/thumbnails/512444218-800x600.webp',
    price: 'Rs 8,000',
    title: 'Apple Watch Series 6 - 44mm GPS',
    location: 'DHA Phase 2, Karachi • 4 days ago',
  },
  {
    id: 19,
    featured: true,
    image: 'https://images.olx.com.pk/thumbnails/512444119-800x600.webp',
    price: 'Rs 6,500',
    title: 'Sony Bluetooth Headphones - Noise Cancelling',
    location: 'F-10, Islamabad • 5 days ago',
  },
  {
    id: 20,
    featured: false,
    image: 'https://images.olx.com.pk/thumbnails/512444020-800x600.webp',
    price: 'Rs 32,000',
    title: 'Fender Electric Guitar - Stratocaster',
    location: 'Saddar, Karachi • 3 days ago',
  },
]

export default function GetCategories() {
  const [showmore, setShowmore] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('10,000,000,000')
  const [value, setValue] = useState('0')
  const [view, setView] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mobile, setMobile] = useState(window.innerWidth < 1024)
  const [filter, setFilter] = useState(false)

  const filterOpen = () => setFilter(true)
  const filterClose = () => setFilter(false)

  useEffect(() => {
    const handleSize = () => {
      setMobile(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
  }, [])

  const toggleCategories = () => {
    setShowmore(!showmore)
  }

  const handleChange = (e) => {
    let newValue = e.target.value

    newValue = newValue.replace(/^0+/, '')

    if (newValue === '') {
      newValue = '0'
    }

    setValue(newValue)
  }

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + ' Billion'
    } else if (num >= 10000000) {
      return (num / 10000000).toFixed(2) + ' Crore'
    } else if (num >= 100000) {
      return (num / 100000).toFixed(2) + ' Lakh'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + ' Thousand'
    }
    return num.toString()
  }

  const locations = [
    { label: 'Use current location', icon: <MyLocation /> },
    { label: 'See ads in all Pakistan', icon: <LocationIcon /> },
    { label: 'CHOOSE REGION', isHeader: true },
    { label: 'Azad Kashmir, Pakistan', icon: <LocationIcon /> },
    { label: 'Balochistan, Pakistan', icon: <LocationIcon /> },
    { label: 'Sindh, Pakistan', icon: <LocationIcon /> },
    { label: 'Punjab, Pakistan', icon: <LocationIcon /> },
    { label: 'Khyber Pakhtunkhwa, Pakistan', icon: <LocationIcon /> },
    { label: 'Gilgit-Baltistan, Pakistan', icon: <LocationIcon /> },
  ]

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`${mobile ? 'absolute w-screen overflow-x-hidden' : 'overflow-x-hidden'}`}>
      {filter ? (
        <div className="">
          <FilterComponent setFilter={setFilter} />
        </div>
      ) : (
        <div className="">
          {mobile ? <MobileHeader /> : <HeaderCat />}
          {!mobile && (
            <div className="fixed z-50 top-1/5 left-1/2 transform -translate-x-1/2 sm:top-1/4">
              <button
                onClick={scrollToTop}
                className={`flex items-center gap-2 px-5 z-50 bg-white py-2 rounded-full text-teal-950 shadow-lg border border-teal-950 transition-all duration-300 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              >
                <KeyboardArrowUpOutlined />
                Back to top
              </button>
            </div>
          )}
          <div className="">
            <div className="bs-container"></div>
            <div className="bs-container hidden lg:block p-4 sm:p-7">
              <div className="flex justify-center mb-10">
                <img
                  src="https://tpc.googlesyndication.com/simgad/11643353606679889402"
                  alt=""
                />
              </div>
              <div className="hidden sm:block">
                <div className="flex">
                  <h1 className="mb-4 text-teal-900 text-sm">Home</h1>
                </div>
                <div className="flex items-center gap-5">
                  <h1 className="text-teal-950 text-2xl font-sans font-bold">
                    Pakistan Free classifieds
                  </h1>
                  <div className="">
                    <button className="font-semibold bg-teal-100 px-2 py-1 text-sm rounded-sm">
                      10,000+ ads
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bs-container ">
              <div className="flex flex-col gap-2 sm:flex-row ">
                <div className="flex-1 hidden lg:block">
                  <div className="p-4 bg-gray-100 rounded">
                    <h2 className="text-lg text-teal-950 font-sans font-bold mb-2">
                      Categories
                    </h2>
                    <ul className="space-y-2 px-5">
                      <li>
                        <a className="text-gray-500 text-sm -ml-6 " href="#">
                          All categories
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-500 text-sm" href="#">
                          Mobiles
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-500 text-sm" href="#">
                          Vehicles
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-500 text-sm" href="#">
                          Property for Sale
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-500 text-sm" href="#">
                          Property for Rent
                        </a>
                      </li>
                      {showmore && (
                        <>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Electric & Home and Appliances
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Bikes
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Business and Industrial Agriculture
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Services
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Jobs
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Animals
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Furniture & Home Decor
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Fashion & Beauty
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Books, Sports & Hobbies
                            </a>
                          </li>
                          <li>
                            <a className="text-gray-500 text-sm" href="#">
                              Kids
                            </a>
                          </li>
                        </>
                      )}
                      <li>
                        <button
                          onClick={toggleCategories}
                          className="text-blue-600 text-sm"
                        >
                          {showmore ? (
                            <>
                              View Less <KeyboardArrowUp />
                            </>
                          ) : (
                            <>
                              View More <KeyboardArrowDown />
                            </>
                          )}
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5 border p-5 rounded-sm">
                    <h1 className="mb-4">Location</h1>
                    <div className="flex mb-3">
                      <Autocomplete
                        disablePortal={false}
                        PopperComponent={StyledPopper}
                        options={locations}
                        getOptionLabel={(option) => option.label}
                        PopperProps={{
                          modifiers: [
                            {
                              name: 'preventOverflow',
                              options: {
                                boundary: 'window',
                              },
                            },
                            {
                              name: 'flip',
                              options: {
                                fallbackPlacements: ['bottom'],
                              },
                            },
                          ],
                        }}
                        renderOption={(props, option, { index }) =>
                          option.isHeader ? (
                            <li
                              {...props}
                              style={{
                                fontWeight: 'lighter',
                                color: '#023F46',
                                fontSize: 12,
                              }}
                            >
                              {option.label}
                            </li>
                          ) : (
                            <li
                              {...props}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: index < 2 ? '20px' : '13px',
                                cursor: 'pointer',
                                borderBottom:
                                  index < 2 ? '1px solid #ccc' : 'none',
                                color: index === 0 ? '#4998EF' : 'inherit',
                              }}
                            >
                              {option.icon}
                              {option.label}
                            </li>
                          )
                        }
                        popupIcon={
                          <KeyboardArrowDown
                            sx={{ color: '#014F43', fontSize: 35 }}
                          />
                        }
                        sx={{
                          width: { xs: 180, sm: 175, md: 230, lg: 304 },
                          '& .MuiOutlinedInput-root': {},
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Pakistan"
                            InputLabelProps={{
                              shrink: false,
                            }}
                            InputProps={{
                              ...params.InputProps,
                              style: {
                                height: '46px',
                                paddingInline: '10px',
                              },
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className="text-teal-950"
                                >
                                  <LocationIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </div>
                    <div>
                      <h1 className="text-md mb-1 font-bold text-teal-950">
                        Pakistan
                      </h1>
                      <div className="px-5">
                        <ul>
                          <li className="text-gray-500 mb-2 text-sm">Punjab</li>
                          <li className="text-gray-500 mb-2 text-sm">Sindh</li>
                          <li className="text-gray-500 mb-2 text-sm">
                            Islamabad Capital Territory (64449)
                          </li>
                          <li className="text-gray-500 mb-2 text-sm">
                            Khyber Pakhtunkhwa (29735)
                          </li>
                          <li className="text-gray-500 mb-2 text-sm">
                            Balochistan (3941)
                          </li>
                          <li className="text-gray-500 mb-2 text-sm">
                            Azad Kashmir (2942)
                          </li>
                          <li className="text-gray-500 mb-2 text-sm">
                            Northern Areas (264)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border mt-4 rounded-md">
                    <div className="px-3 mt-3">
                      <h1 className="mb-4 px-2 text-lg font-bold">Price</h1>
                      <div className="flex gap-5 justify-center mb-2">
                        <input
                          value={minPrice}
                          min="0"
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '')
                            if (value <= 553) {
                              setMinPrice(value)
                            }
                          }}
                          className="border p-2 rounded-lg border-gray-400"
                          size={12}
                          type="text"
                          name=""
                          id=""
                        />
                        <input
                          min="0"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                          className="border p-2 rounded-lg border-gray-400"
                          size={12}
                          type="text"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="flex justify-center gap-24">
                        {minPrice && minPrice !== '0' && (
                          <p className="flex text-xs">PKR {minPrice}</p>
                        )}
                        {maxPrice && maxPrice !== '0' && (
                          <p className="text-xs">
                            PKR{' '}
                            {formatNumber(Number(maxPrice.replace(/,/g, '')))}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-9">
                    <SeeStuffButton />
                  </div>
                </div>
                <div className="flex-2">
                  <div className="space-y-4 ">
                    {mobile ? (
                      <div className="flex justify-between items-end mt-5">
                        <button className="font-semibold bg-teal-100 text-sm h-7 flex items-center rounded-sm px-2">
                          10,000+ ads
                        </button>
                        <button
                          onClick={() => setFilter(true)}
                          className="flex text-white font-bold gap-2 bg-teal-950 px-3 p-3 rounded-md"
                        >
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            class="b4840212"
                          >
                            <path
                              d="M14.9 9h2V7h4V5h-4V3h-2zm6 4v-2h-10v2zm-14-4v2H3v2h4v2h2V9zm6 12v-2h8v-2h-8v-2h-2v6zM2.9 5v2h10V5zm0 12v2h6v-2z"
                              fill="white"
                            ></path>
                          </svg>
                          Filter
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-3">
                        <h1 className="text-teal-950 font-bold text-sm">
                          VIEW
                        </h1>

                        <button
                          onClick={() => setView(false)}
                          className={`border rounded-full p-1 cursor-pointer ${!view ? 'bg-teal-100' : 'bg-white'} border-none`}
                        >
                          <MenuIcon />
                        </button>

                        <button
                          className={`${view ? 'bg-teal-100' : 'bg-white'} rounded-full p-1 border-none`}
                          onClick={() => setView(true)}
                        >
                          <img
                            src="https://www.olx.com.pk/assets/iconGrid_noinline.20d3115f90d4e01862afb7d21be83420.svg"
                            alt=""
                          />
                        </button>

                        <div className="border border-l h-9"></div>
                        <h1 className="font-bold text-sm text-teal-950">
                          SORT BY:
                        </h1>
                        <h1 className="text-md text-teal-950">Newly listed</h1>
                        <button>
                          <KeyboardArrowDownOutlined />
                        </button>
                      </div>
                    )}
                    <div>
                      <hr />
                    </div>
                    {!view && (
                      <div className="">
                        {dummyData.map((item) => (
                          <Link to={'/customer-account'}>
                            <div
                              key={item.id}
                              className="rounded gap-3 sm:gap-5 sm:mb-2 border mt-2 flex"
                            >
                              <div className="w-2/3 sm:w-1/2">
                                <span className="bg-yellow-400 absolute text-xs font-semibold px-2 p-1 mt-3 mx-4 rounded">
                                  Featured
                                </span>
                                <img
                                  alt="Image of a PBX solution"
                                  className="w-full h-40 sm:h-48 object-cover"
                                  height={200}
                                  src={item.image}
                                  width={200}
                                />
                              </div>
                              <div className="w-full p-2">
                                <div className="flex justify-between items-center">
                                  <h3 className="text-sm sm:text-2xl font-bold mt-2 sm:mt-4 text-teal-950">
                                    {item.price}
                                  </h3>
                                  <Heart className="text-teal-950 flex " />
                                </div>

                                <h3 className="text-xs sm:text-xl mt-2 sm:mt-2 font-semibold text-teal-950">
                                  {item.title}
                                </h3>
                                <p className="text-teal-950 text-xs sm:text-sm mt-2">
                                  {item.location}
                                </p>
                                <div className="flex space-x-2 mt-1 sm:mt-4">
                                  <button
                                    className="flex items-center justify-c
    enter py-2 px-4 sm:px-7 text-teal-950  border-2 border-teal-950 rounded"
                                  >
                                    <svg
                                      className="mr-2 text-teal-950 text-xl"
                                      width="26"
                                      height="26"
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M784.55 852.4c-331.43-14.64-598.31-281.52-612.94-612.95l149.97-60 91.69 183.43-71 35.5v26.45c0 141.66 115.25 256.9 256.9 256.9h26.45l11.86-23.64 23.68-47.36 183.38 91.74-59.99 149.93zM918.1 643.45L661.16 514.99l-57.47 19.2-30.04 60.03c-74.07-11.1-132.73-69.8-143.87-143.87l60.08-30.04L509 362.88 380.6 105.94l-54.2-20.6-214.18 85.63-26.88 39.8c0 401.37 326.57 727.9 727.94 727.9l39.76-26.88 85.64-214.19-20.61-54.19z"></path>
                                    </svg>
                                    Call
                                  </button>
                                  <button className="flex items-center px-4 sm:px-6 justify-center py-2 text-white bg-teal-950 border-2 border-teal-950 rounded">
                                    <FontAwesomeIcon
                                      className="mr-2 text-xl"
                                      icon={faComment}
                                    />
                                    Chat
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                    {view && (
                      <Link to={'/customer-account'}>
                        <div className="grid grid-cols-3 gap-2">
                          {dummyData.map((item) => (
                            <div key={item.id} className="border">
                              <div className="">
                                <span className="bg-yellow-400 absolute text-xs font-semibold px-2 p-1 mt-3 mx-4 rounded">
                                  Featured
                                </span>
                                <img
                                  alt="Image of a PBX solution"
                                  className="w-full h-56 object-cover"
                                  height={200}
                                  src={item.image}
                                  width={200}
                                />
                              </div>
                              <div className="p-2">
                                <div className="flex justify-between items-center">
                                  <h3 className="text-2xl font-bold mt-1 mb-1 text-teal-950">
                                    {item.price}
                                  </h3>
                                  <Heart className="text-teal-950" />
                                </div>

                                <h3 className="text-xl mb-6 font-semibold text-teal-950">
                                  {item.title}
                                </h3>
                                <p className="text-teal-950 text-sm mt-2">
                                  {item.location}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center p-5">
            <button className="text-teal-950 font-bold border-teal-950 border-2 p-2 rounded-md">
              Load more
            </button>
          </div>
          <div className="mb-4 bs-container">
            <h1 className="text-teal-950 font-semibold mb-3">Recently View</h1>
            <hr className="border-gray-400 " />
          </div>
          {mobile ? (
            <GetMobileRecentData />
          ) : (
            <div>
              {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {items
                  .filter((_, index) => index < 2 || window.innerWidth >= 1024)
                  .map((item) => (
                    <div key={item.id} className="border rounded-md relative">
                      {item.featured && (
                        <span className="bg-yellow-400 absolute text-xs font-semibold px-2 p-1 mt-3 mx-4 rounded-sm">
                          Featured
                        </span>
                      )}
                      <img
                        alt={item.title}
                        className="w-full rounded-sm h-40 sm:h-38 object-cover"
                        src={item.image}
                      />
                      <div className="p-2">
                        <div className="flex justify-between items-center sm:mb-10 sm:mt-2">
                          <h3 className="text-lg sm:text-sm font-bold text-teal-950">
                            {item.price}
                          </h3>
                          <Heart className="text-teal-950 " />
                        </div>
                        <h3 className="text-sm sm:text-sm font-semibold text-teal-950">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-teal-950 mt-2 sm:mb-3">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  ))}
              </div> */}

              <div className="bs-container mt-3">
                <ul className="flex gap-3 text-teal-950 text-sm">
                  <li className="font-bold">Popular Searches:</li>
                  <li>repair</li>
                  <li>-</li>
                  <li>service</li>
                  <li>-</li>
                  <li>machine</li>
                  <li>-</li>
                  <li>sand</li>
                </ul>
              </div>
              <div className="flex justify-center mt-12 mb-5">
              
                <div>
                  <GetCatFooter />
                  <Footer />
                  <FooterTwo />
                </div>
              </div>
            </div>
          )}
          <div></div>
        </div>
      )}
    </div>
  )
}
