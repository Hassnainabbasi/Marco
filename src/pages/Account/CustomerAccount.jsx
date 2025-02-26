import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Headerone'
import GetCustomerAccountCategorise from '../../tools/Categories/GetCustomerAccountCategorise'
import GetCustomerBanner from '../../tools/GetCustomerBanner'
import Footer from '../../components/footer/Footer'
import HeaderCat from '../../components/header/HeaderCat'
import MobileAcoount from './MobileAcoount'
import FooterTwo from '../../components/footer/FooterTwo'

export default function CustomerAccount() {

 const [ mobile , setMobile] = useState(window.innerWidth <1024)

 useEffect(()=>{
  const handleMobile = () =>{
    setMobile(window.innerWidth < 1024)
  }

  window.addEventListener("resize",handleMobile)
  return () => window.removeEventListener("resize",handleMobile)
 },[])

  return (
   <div>
    {mobile ? (
      <MobileAcoount />
    ) : (
   <div className="">
       <div className='bs-container mb-10'>
       <HeaderCat />
       </div>
       <div className='bs-container'>
        <GetCustomerAccountCategorise />
       </div>
       <div className='bs-container'>
        <GetCustomerBanner />
       </div>
       <div>
        <Footer />
        <FooterTwo />
       </div>
        </div>
    )}
   </div>
   
  )
}
