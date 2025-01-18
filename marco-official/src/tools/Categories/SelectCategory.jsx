// import React from 'react'

// export default function SelectCategory() {
//   return (
//     <div>
//         <div className='flex container mx-auto mt-3'>
//             <ul className='flex gap-5'>
//                 <li className='text-teal-950 font-bold text-sm'>ALL CATEGORIES </li>
//                 <li className='text-teal-900 text-sm'>Mobile Phones</li>
//                 <li className='text-teal-900 text-sm'>Cars</li>
//                 <li className='text-teal-900 text-sm'>Motorcycles</li>
//                 <li className='text-teal-900 text-sm'>Houses</li>
//                 <li className='text-teal-900 text-sm'>Video-Audios</li>
//                 <li className='text-teal-900 text-sm'>Tablets</li>
//                 <li className='text-teal-900 text-sm'>Lands & Plots</li>
//             </ul>
//         </div>
//     </div>
//   )
// }
import React from 'react'

export default function SelectCategory() {
  return (
    <div>
      <div className='flex mx-auto container mt-5'>
        <ul className='flex flex-wrap gap-3 md:gap-5 justify-center'>
          <li className='text-teal-950 font-bold text-xs md:text-sm'>ALL CATEGORIES</li>
          <li className='text-teal-900 text-xs md:text-sm font-semibold'>Mobile Phones</li>
          <li className='text-teal-900 text-xs md:text-sm font-semibold'>Cars</li>
          <li className='text-teal-900 text-xs md:text-sm font-semibold'>Motorcycles</li>
          <li className='text-teal-900 text-xs md:text-sm font-semibold'>Houses</li>
          <li className='text-teal-900 text-xs md:text-sm font-semibold'>Video-Audios</li>
          <li className='text-teal-900 text-xs md:text-sm font-semibold'>Tablets</li>
          <li className='text-teal-900 text-xs md:text-sm font-semibold'>Lands & Plots</li>
        </ul>
      </div>
    </div>
  )
}
