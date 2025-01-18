import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8 border border-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <div>
            <h2 className="font-bold text-sm text-teal-950 mb-2">POPULAR CATEGORIES</h2>
            <ul>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Cars
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Flats for rent
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Mobile Phones
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-sm text-teal-950 mb-2">TRENDING SEARCHES</h2>
            <ul>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Bikes
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Watches
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Books
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Dogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-sm text-teal-950 mb-2">ABOUT US</h2>
            <ul>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  About Dubizzle Group
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  OLX Blog
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Contact Us
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  OLX for Businesses
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-sm text-teal-950 mb-2">OLX</h2>
            <ul>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Help
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Sitemap
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Terms of use
                </a>
              </li>
              <li className="">
                <a href="#" className="text-gray-600 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-sm text-teal-950 mb-2">FOLLOW US</h2>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-600">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-600">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" className="text-gray-600">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="#" className="text-gray-600">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
            <div className="flex space-x-2">
              <a href="#">
                <img width={600}
                className='object-cover'
                  src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                  alt="Download on the App Store"
                />
              </a>
              <a href="#">
                <img
                width={600}
                  src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                  alt="Get it on Google Play"
                />
              </a>
              <a href="#">
                <img
                width={600}
                  src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                  alt="Explore it on AppGallery"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
