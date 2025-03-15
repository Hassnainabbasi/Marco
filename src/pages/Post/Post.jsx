import React, { useEffect, useState } from 'react'
import PostHeader from './PostHeader'
import PostCenter from './PostCenter'
import PostMobile from './PostMobile'

export default function Post() {
  const [mobile, setMobile] = useState(window.innerWidth < 1024)
  useEffect(() => {
    const handleSize = () => {
     setMobile(window.innerWidth < 1024)
    }

    window.addEventListener('resize',handleSize)
    return()=> window.removeEventListener('resize',handleSize)
  })
  return (
   <div>
    {mobile ? <PostMobile /> : (
       <div className='overflow-x-hidden'>
       <div>
         <PostHeader />
       </div>
       <div>
         <PostCenter />
       </div>
     </div>
    )}
   </div>
  )
}
