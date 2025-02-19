import React from 'react'
import Header from '../../components/header/Headerone'
import GetCustomerAccountCategorise from '../../tools/Categories/GetCustomerAccountCategorise'
import GetCustomerBanner from '../../tools/GetCustomerBanner'
import Footer from '../../components/footer/Footer'
import HeaderCat from '../../components/header/HeaderCat'

export default function CustomerAccount() {
  return (
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
  )
}
