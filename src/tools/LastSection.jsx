import React from 'react'

export default function LastSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 bg-gray-50 shadow-md">
      <div className="flex-shrink-0 w-full md:w-auto mb-4 md:mb-0">
        <img
          alt="Two mobile phones displaying the OLX app interface"
          className="w-full md:w-80 h-auto p-1"
          src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
          width={700}
        />
      </div>

      <div className="hidden lg:block md:ml-6 mt-4 md:mt-0 mb-5 text-center md:text-left px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-950">
          TRY THE OLX APP
        </h2>
        <p className="text-teal-950 text-lg md:text-xl mt-4 font-semibold">
          Buy, sell and find just about anything using the app on your mobile.
        </p>
      </div>

      <div className="hidden md:block border-l-2 border-gray-300 h-20 mx-4"></div>

      <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
        <h3 className="text-lg font-semibold text-gray-800">
          GET YOUR APP TODAY
        </h3>
        <div className="flex justify-center md:justify-start mt-2 space-x-2">
          <a href="#">
            <img
              alt="Download on the App Store button"
              className="h-12"
              height={50}
              src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
              width={150}
            />
          </a>
          <a href="#">
            <img
              alt="Get it on Google Play button"
              className="h-12"
              height={50}
              src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
              width={150}
            />
          </a>
          <a href="#">
            <img
              alt="Explore it on AppGallery button"
              className="h-12"
              height={50}
              src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
              width={150}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
