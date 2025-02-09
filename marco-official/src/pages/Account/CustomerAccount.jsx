import React from 'react'
import Header from '../../components/header/Headerone'
import GetCustomerAccountCategorise from '../../tools/Categories/GetCustomerAccountCategorise'
import GetCustomerBanner from '../../tools/GetCustomerBanner'
import Footer from '../../components/footer/Footer'

export default function CustomerAccount() {
  return (
    <div className="">
       <div className='bs-container'>
       <Header />
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
