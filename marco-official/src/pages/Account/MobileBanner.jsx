import React from 'react'
import AccountCarousel from './AccountCarousel';

export default function MobileBanner() {
    const images = [
        "https://images.olx.com.pk/thumbnails/518749137-800x600.webp",
        "https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg",
        "https://storage.googleapis.com/a1aa/image/7pecTFe8s3ojIkvA7SoV2XtLkqVHYYGSyZDKB4F3SmI.jpg",
      ];
    return (
    <div className='mt-5'>
    <div className='flex items-center bs-container mb-5'>
      <img className='bs-container flex justify-center' src="https://tpc.googlesyndication.com/daca_images/simgad/6741459916152959710" alt="" />  
    </div>
    <div>
   <AccountCarousel />
    </div>
    </div>
  )
}
