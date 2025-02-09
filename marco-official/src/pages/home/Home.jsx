import React from 'react'
import Header from '../../components/header/Headerone'
import Centerone from '../../components/centerSection/Centerone'
import Footer from '../../components/footer/Footer'
import FooterTwo from '../../components/footer/FooterTwo'
import '../../styles/custom.css';  // Correct relative path


export default function Home() {
  return (
    <div className=''>
    <div className="bs-container=">
      <Header />
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
