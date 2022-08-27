import React from 'react'
import About from '../components/AboutSection/about';



import HeroSection from '../components/HeroSection/hero';
import Testimonial from '../components/Testimonial/testimonial';
import Team from '../components/OurTeam/Team';
import GetStarted from '../components/GetStarted/getStarted';
import FooterBanner from '../components/FooterBanner/footerBanner';

export default function () {
  return (
    <div>
        
      <HeroSection/>
      <About/>
   <GetStarted/>
      <Testimonial/>
      <FooterBanner/>
      {/* <Team/> */}
      
    </div>
  )
}
