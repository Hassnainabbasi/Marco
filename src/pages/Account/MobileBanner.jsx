import React from 'react'
import AccountCarousel from './AccountCarousel'
import {
  ArrowForward,
  ArrowForwardIos,
  Chat,
  Email,
  FlagOutlined,
  LocationOffOutlined,
  PhoneOutlined,
  Share,
} from '@mui/icons-material'
import { HeartIcon, PhoneCall } from 'lucide-react'
import { LocationIcon } from '../GetCategories/GetCategories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'

export default function MobileBanner() {
  const images = [
    'https://images.olx.com.pk/thumbnails/518749137-800x600.webp',
    'https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg',
    'https://storage.googleapis.com/a1aa/image/7pecTFe8s3ojIkvA7SoV2XtLkqVHYYGSyZDKB4F3SmI.jpg',
  ]
  return (
    <div className="mt-5">
      <div className="flex items-center bs-container mb-5">
        <img
          className="bs-container flex justify-center"
          src="https://tpc.googlesyndication.com/daca_images/simgad/6741459916152959710"
          alt=""
        />
      </div>
      <div>
        <AccountCarousel />
      </div>
      <div className="bs-container mt-5">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <h1 className="font-bold text-2xl text-teal-950">Rs 1,600,000</h1>
          </div>
          <div className="flex gap-2 text-teal-950">
            <Share />
            <HeartIcon />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-teal-950 text-md mb-4">
            Suzuki Every 2013
          </h1>
        </div>
        <div className="flex  text-sm justify-between gap-2 mb-5">
          <h1 className="flex gap-1">
            <LocationIcon className="" />
            Punjab Coop Housing Society Lahore
          </h1>
          <h1>55 minutes ago</h1>
        </div>
        <div className="py-5 ">
          <hr className="border border-gray-300" />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <i className="fas fa-road text-blue-500" />
              <div>
                <div>KM's driven</div>
                <div className="font-bold text-black">300,000</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-car text-blue-500" />
              <div>
                <div>Condition</div>
                <div className="text-black">Used</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-calendar-alt text-blue-500" />
              <div>
                <div>Year</div>
                <div className="text-black">2013</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-gas-pump text-blue-500" />
              <div>
                <div>Fuel</div>
                <div className="text-black">Petrol</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-cogs text-blue-500" />
              <div>
                <div>Transmission</div>
                <div className="text-black">Automatic</div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 ">
          <hr className="border border-gray-300" />
        </div>
        <div className="text-teal-950">
          <h1 className="font-bold text-lg mb-2">Details</h1>
          <table className="w-full text-left border-collapse">
            <tbody>
              {[
                { label: 'Make', value: 'Suzuki' },
                { label: 'Model', value: 'Every', bg: true },
                { label: 'Body Type', value: 'Other' },
                { label: 'Color', value: 'Silver', bg: true },
                { label: 'Registration city', value: 'Lahore' },
                { label: 'Car documents', value: 'Original', bg: true },
                { label: 'Assembly', value: 'Imported' },
              ].map((item, index) => (
                <tr key={index} className={item.bg ? 'bg-gray-100' : ''}>
                  <td className="py-2 px-4">{item.label}</td>
                  <td className="py-2 px-4 font-bold">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-5 ">
          <hr className="border border-gray-300" />
        </div>
        <div className="text-teal-950">
          <h1 className="font-bold ">Features</h1>
          <div className="flex mb-2 justify-between bg-gray-100 py-1 px-5 mt-3">
            <h1>Heated Seats</h1>
          </div>
          <div className="flex mb-2 justify-between px-5 mt-1">
            <h1>Keyless Entry</h1>
          </div>
          <div className="flex mb-2 justify-between bg-gray-100 py-1 px-5 mt-1">
            <h1>Power Mirrors</h1>
          </div>
          <div className="flex mb-2 justify-between px-5 mt-1">
            <h1>Power Steering</h1>
          </div>
          <div className="flex mb-2 justify-between bg-gray-100 py-1 px-5 mt-1">
            <h1>Power Windows</h1>
          </div>
          <div>
            <button className="text-blue-600 flex items-center font-bold mt-5">
              See All
              <ArrowForwardIos className="ml-1" />
            </button>
          </div>
        </div>
        <div className="py-5 ">
          <hr className="border border-gray-300" />
        </div>
        <div className="text-teal-950">
          <h1 className="font-bold mb-2">Description</h1>
          <p>
            every daba 7 seat for sale gift <br />
            home used Daba 100,% seal too seal genuine,engine 100 % ok <br />
            suspection 100% ok work All done <br />
            just just buy or drive biometric on sport dealer hazrat sy sorry
          </p>
        </div>
        <div className="py-5 ">
          <hr className="border border-gray-300" />
        </div>
        <div className="bg-white">
          <h2 className="text-md mb-2 text-teal-950 font-bold">
            Listed By Private User
          </h2>
          <div className="flex items-center mb-4">
            <img
              alt="Profile"
              className="rounded-full w-16 h-16"
              src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
            />
            <div className="ml-4">
              <p className="text-sm font-bold text-teal-950 mt-2">
                GOOGLE STORE MULTAN
              </p>
              <p className="text-xs font-semibold text-teal-950 mt-2 mb-2">
                Member since Jul 2019
              </p>
              <a
                className="text-teal-950 text-sm font-bold font-sans "
                href="#"
              >
                See profile
                <ArrowForwardIos fontSize="small" />
              </a>
            </div>
          </div>
        </div>
        <div className="py-5 ">
          <hr className="border border-gray-300" />
        </div>
        <div className="text-teal-950">
          <h1 className="mb-3 font-bold">Location</h1>
          <button className="flex gap-2 text-sm">
            <LocationIcon />
            Punjab Coop Housing Society,Lahore
          </button>
          <div className="mt-5 text-sm flex items-center justify-between">
            <button>AD ID 10987599457135</button>
            <button className="font-bold">
              <FlagOutlined /> Report this ad
            </button>
          </div>
          <div className="bg-white mt-8 mb-6 border p-4">
            <h2 className="text-md mb-2 text-teal-950 font-bold">
              Carient - Driven To Perform
            </h2>
            <div className="flex items-center mb-4">
              <img
                alt="Profile"
                className="rounded-full w-20 h-16"
                src="https://tpc.googlesyndication.com/simgad/6778395105525092525?"
              />
              <div className="ml-1">
                <p className="text-sm font-bold text-teal-950 mt-2">
                  Find the best Lubricant for your vechile
                </p>
              </div>
              <div>
                <ArrowForwardIos fontSize="small" />
              </div>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="py-5 ">
          <hr className="border border-gray-300" />
        </div>
        <div className="w-full text-teal-950 overflow-x-auto">
          <h1 className="mb-3 font-bold">Similar cars</h1>
          <div className="w-full flex gap-4 whitespace-nowrap">
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white rounded-lg flex items-center justify-center">
              <div className="flex items-center">
                <button className="text-blue-600 font-bold">
                  See All <ArrowForwardIos className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 text-teal-950 overflow-x-auto">
          <h1 className="mb-3 font-bold">New Cars for Similar Price</h1>
          <div className="w-full flex gap-4 whitespace-nowrap">
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white border border-gray-300 rounded-lg shadow-md ">
              <img
                src="https://images.olx.com.pk/thumbnails/518749137-800x600.webp"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-base font-semibold text-teal-950">
                    Rs 1,758,00
                  </span>
                  <FontAwesomeIcon icon={HeartIcon} className="text-teal-950" />
                </div>
                <h2 className="text-teal-950 text-lg sm:text-base font-semibold">
                  Suzuki 2014
                </h2>
                <p className="text-teal-950 mt-4">Gulshan Chowrangi, Karachi</p>
                <p className="text-teal-950 text-sm">1 day ago</p>
              </div>
            </div>
            <div className="min-w-[16rem] bg-white rounded-lg flex items-center justify-center">
              <div className="flex items-center">
                <button className="text-blue-600 font-bold">
                  See All <ArrowForwardIos className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <img
            src="https://tpc.googlesyndication.com/simgad/14976513286668588775"
            alt=""
          />
        </div>
      </div>
      <div className="py-5 ">
        <hr className="border border-gray-300" />
      </div>
      <div className="flex text-teal-950 justify-between bs-container">
        <h1>Categories</h1>
        <button>
          <ArrowForwardIos />
        </button>
      </div>
      <div className="py-4">
        <hr className="border border-gray-300" />
      </div>
      <div className="flex text-teal-950 justify-between bs-container">
        <h1>Popular Categories</h1>
        <button>
          <ArrowForwardIos />
        </button>
      </div>
      <div className="py-4">
        <hr className="border border-gray-300" />
      </div>
      <div className="flex text-teal-950 justify-between bs-container">
        <h1>Trending Searches</h1>
        <button>
          <ArrowForwardIos />
        </button>
      </div>
      <div className="py-4">
        <hr className="border border-gray-300" />
      </div>
      <div className="flex text-teal-950 justify-between bs-container">
        <h1>About Us</h1>
        <button>
          <ArrowForwardIos />
        </button>
      </div>
      <div className="py-4">
        <hr className="border border-gray-300" />
      </div>
      <div className="flex text-teal-950 justify-between bs-container">
        <h1>Follow Us</h1>
        <div className="space-x-4">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-regular fa-circle-play"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="py-4">
        <hr className="border border-gray-300" />
      </div>
      <div className="flex space-x-2 bs-container justify-center">
        <a href="#">
          <img
            width={70}
            className="object-cover"
            src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
            alt="Download on the App Store"
          />
        </a>
        <a href="#">
          <img
            width={70}
            src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
            alt="Get it on Google Play"
          />
        </a>
        <a href="#">
          <img
            width={70}
            src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
            alt="Explore it on AppGallery"
          />
        </a>
      </div>
      <div className="flex items-center bs-container text-teal-950 mt-5 mb-5 gap-3 text-center">
        <button className="w-full border font-semibold border-teal-950 py-2 rounded-sm">
          <Email className="mr-2" />
          Sms
        </button>
        <button className="w-full border font-semibold border-teal-950 py-2 rounded-sm">
          <PhoneOutlined className="mr-2" />
          Call
        </button>
        <button className="w-full border border-teal-950 py-2 rounded-sm text-white bg-teal-950">
          <Chat className="mr-2" />
          Chat
        </button>
      </div>
    </div>
  )
}
