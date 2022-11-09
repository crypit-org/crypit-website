import React from 'react';
import Download from '../components/Download/Download';
import Faq from '../components/FAQsection/Faq';
import Feature from '../components/FeatureSection/Feature';
import Footer from '../components/Footer/footer';
import Home from '../components/HomeSection/home';
import HowItWorks from '../components/HowitWorks/HowItWorks';
import Navbar from '../components/Navbar/navbar';
import WhatisCrypit from '../components/WhatIsCrypit/WhatisCrypit';
import WhyCrypit from '../components/WhyCrpit/WhyCrypit';

function HomePage(props) {
    return (
        <div>
          <Navbar/>
          <Home/> 
          <WhatisCrypit/> 
          <Feature/>
          <WhyCrypit/>
          <HowItWorks/>
          <Download/>
          <Faq/>
          <Footer/>
        </div>
    );
}

export default HomePage;