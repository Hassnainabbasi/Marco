import React, { useEffect, useState } from 'react'
import BannerSection from '../../tools/BannerSection'
import AllCategories from '../../tools/Categories/AllCategories'
import { RecentData } from '../recent/RecentData'
import LastSection from '../../tools/LastSection'
import { Link } from 'react-router-dom'
import { MobileRecentData } from '../../tools/MobileRecentData'
import MobileLastSection from '../../tools/MobileLastSection'

export default function Centerone() {
  const [mobile, setMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleSize = () => {
      setMobile(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
  }, [])
  return (
    <div>
      <div className="bs-container">
        <BannerSection />
      </div>
      <div className="bs-container">
        <AllCategories />
      </div>
      <div className={`${mobile ? '' : 'bs-container'}`}>
        {mobile ? <MobileRecentData /> : <RecentData />}
      </div>
      <div>{mobile ? <MobileLastSection /> : <LastSection />}</div>
    </div>
  )
}
