import React from 'react'
import Header from '../../components/header/Headerone'
import Centerone from '../../components/centerSection/Centerone'
import Footer from '../../components/footer/Footer'
import FooterTwo from '../../components/footer/FooterTwo'
import '../../styles/custom.css';  // Correct relative path


export default function Home() {
  return (
    // <div className=''>
    //     <Header  />
    //     <Centerone />
    //     <Footer />
    //     <FooterTwo />
    // </div>
    <div>
    <div className="bs-container">
      <Header />
    </div>
    <div className="bs-container">
      <Centerone />
    </div>
    <div className="bs-container">
      <Footer />
    </div>
    <div className="bs-container">
      <FooterTwo />
    </div>
  </div>
  )
}
