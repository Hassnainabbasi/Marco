import React, { useEffect, useState } from 'react'
import HeaderMyads from '../MyAds/HeaderMyads'
import ChatPageCenter from './ChatPageCenter'
import ChatMobile from './ChatMobile'

export default function Chatpage() {
  const [mobile, setMobile] = useState(window.innerWidth < 1024)

  useEffect(()=>{
    const handleSize = () => {
      setMobile(window.innerWidth < 1024)
    }
    window.addEventListener("resize",handleSize)
    return ()=> window.removeEventListener("resize", handleSize)
  })
  return (
  <div>
    {mobile ? <ChatMobile /> : (
        <div>
        <div>
         <HeaderMyads />
        </div>
        <div className='bs-container mt-5'>
          <ChatPageCenter />
        </div>
        </div>
    )}
  </div>
  )
}
