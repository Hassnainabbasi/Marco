import React, { useEffect, useState } from 'react'
import HeaderMyads from '../MyAds/HeaderMyads'
import EditeProfileCenter from './EditeProfileCenter'
import EditeMobile from './EditeMobile'

export default function EditProfile() {
 const [mobile, setMobile] = useState(window.innerWidth < 1024)
 useEffect(()=>{
  const handleSize = () =>{
    setMobile(window.innerWidth < 1024)
  }
  window.addEventListener("resize", handleSize)
  return ()=> window.removeEventListener("resize", handleSize)
 },[])
  return (
    <div>
      {mobile ? <EditeMobile /> : (
        <div className=''>
        <div>
          <HeaderMyads />
          
        </div>
        <div>
          <EditeProfileCenter />
        </div>
      </div>
      )}
    </div>
  )
}
