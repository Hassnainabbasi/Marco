import React, { useEffect, useState } from 'react'
import HeaderMyads from './HeaderMyads'
import CenterAds from './CenterAds'
import Footer from '../../components/footer/Footer'
import FooterTwo from '../../components/footer/FooterTwo'
import MobileAds from './MobileAds'

export default function Myads() {
  const [mobile , setMobile] = useState(window.innerWidth < 1024)
  
  useEffect(()=>{
    const handleSize = () =>{
      setMobile(window.innerWidth < 1024)
    }
    window.addEventListener('resize',handleSize)
    return () => window.removeEventListener("resize", handleSize)
  },[])
  return (
   <div>
    {mobile ? <MobileAds /> : (
       <div>
       <div>
         <HeaderMyads />
       </div>
       <div>
         <CenterAds />
       </div>
       <div className='mt-10'>
         <Footer />
         <FooterTwo />
       </div>
     </div>
    )}
   </div>
  )
}
