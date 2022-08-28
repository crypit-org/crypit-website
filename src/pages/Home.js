import React, { useEffect } from 'react'
import About from '../components/AboutSection/about';
import HeroSection from '../components/HeroSection/hero';
import GetStarted from '../components/GetStarted/getStarted';
import FooterBanner from '../components/FooterBanner/footerBanner';

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        
      <HeroSection/>
      <About/>
   <GetStarted/>
      {/* <Testimonial/> */}
      <FooterBanner/>
      {/* <Team/> */}
      
    </div>
  )
}
