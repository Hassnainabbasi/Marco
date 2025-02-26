import React from 'react'
import AccountHeader from '../../components/header/AccountHeader'
import AccountCategories from './AccountCategories'
import MobileBanner from './MobileBanner'

export default function MobileAcoount() {
  return (
    <div>
   <div>
   <AccountHeader />
   </div>
   <div className='bs-container'>
    <AccountCategories />
   </div>
   <div>
    <MobileBanner />
   </div>
    </div>
  )
}
