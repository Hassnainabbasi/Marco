import React from 'react'
import BannerSection from '../../tools/BannerSection'
import AllCategories from '../../tools/Categories/AllCategories'
import { RecentData } from '../recent/RecentData'
import LastSection from '../../tools/LastSection'

export default function Centerone() {
  return (
    <div>
        <div>
        <BannerSection />  
        </div>
        <div>
         <AllCategories/>
        </div>
        <div>
        <RecentData />
        </div>
        <div>
        <LastSection />
        </div>
    </div>
  )
}
