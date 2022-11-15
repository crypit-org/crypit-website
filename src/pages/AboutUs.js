import React from 'react';
import Description from '../components/AboutDescription/Description';
import EarlyBird from '../components/EarlyBird/EarlyBird';
import Footer from '../components/Footer/footer';
import GetInTouch from '../components/GetinTouch/GetInTouch';
import Navbar from '../components/Navbar/navbar';
import Story from '../components/StoryVission/Story';

function AboutUs(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Navbar/>   
                    <GetInTouch title="About Us"/>
                    <Description/>
                    <Story/>
                    <EarlyBird/>
            <Footer/>
        </div>
    );
}

export default AboutUs;