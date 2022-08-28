import React, { useEffect } from 'react';
import FooterBanner from '../components/FooterBanner/footerBanner';
import Navbar from '../components/Navbar/navbar';
import Roadmap from '../components/Roadmap/roadmap';
import VMsection from '../components/VissionMission/VMsection';

function About(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
        <VMsection/>
        <Roadmap/>
            <FooterBanner/>
        </div>
    );
}

export default About;