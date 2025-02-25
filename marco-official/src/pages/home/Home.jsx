import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Headerone'
import Centerone from '../../components/centerSection/Centerone'
import Footer from '../../components/footer/Footer'
import FooterTwo from '../../components/footer/FooterTwo'
import '../../styles/custom.css';  // Correct relative path
import HomeMobileHeader from '../../components/header/HomeMobileHeader'


export default function Home() {
  const [mobile, setMobile] = useState(window.innerWidth <1024)

  useEffect(()=>{
   const handleSize = () =>{
    setMobile(window.innerWidth < 1024)
   }
  window.addEventListener("resize",handleSize)
  return () => window.removeEventListener("resize",handleSize)
  },[])
  return (
    <div className=''>
    <div className="">
      {mobile ? 
    <HomeMobileHeader />
    :
    <Header/>  
    }
    </div>
    <div className="bs-container">
      <Centerone />
    </div>
    <div className="">
      <Footer />
    </div>
    <div className="">
      <FooterTwo />
    </div>
  </div>
  )
}
