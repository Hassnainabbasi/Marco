import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Headerone'
import GetCustomerAccountCategorise from '../../tools/Categories/GetCustomerAccountCategorise'
import GetCustomerBanner from '../../tools/GetCustomerBanner'
import Footer from '../../components/footer/Footer'
import HeaderCat from '../../components/header/HeaderCat'
import MobileAcoount from './MobileAcoount'

export default function CustomerAccount() {

 const [ mobile , setMobile] = useState(window.innerWidth <768)

 useEffect(()=>{
  const handleMobile = () =>{
    setMobile(window.innerWidth < 768)
  }

  window.addEventListener("resize",handleMobile)
  return () => window.removeEventListener("resize",handleMobile)
 },[])

  return (
   <div>
    {mobile ? (
      <MobileAcoount />
    ) : (
   <div className="bs-container">
       <div className='bs-container mb-56'>
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
       </div>
        </div>
    )}
   </div>
   
  )
}
