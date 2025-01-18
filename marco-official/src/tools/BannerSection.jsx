
// // import React from 'react'

// // export default function BannerSection() {
// //   return (
// //     <div className='flex justify-center mt-10 '>
// //       <img className='w-full max-w-screen-xl h-56  md:object-cover' src='https://images.olx.com.pk/thumbnails/512911842-800x600.webp' alt="OLX Auto Fest" />
// //     </div>
// //   );
// // }
// import React from 'react'

// export default function BannerSection() {
//   return (
//     <div className='flex justify-center mt-10'>
//       <img 
//         className='w-full max-w-screen-xl h-auto md:h-96 w-96 max-w-screen-2xl' 
//         src='https://images.olx.com.pk/thumbnails/512911842-800x600.webp' 
//         alt="OLX Auto Fest" 
//       />
//     </div>
//   );
// }
import React from 'react'

export default function BannerSection() {
  return (
    <div className='flex justify-center mt-10'>
      <img 
        className='w-full max-w-screen-xl h-auto sm:object-cover md:object-contain' 
        src='https://images.olx.com.pk/thumbnails/512911842-800x600.webp' 
        alt="OLX Auto Fest" 
      />
    </div>
  );
}
