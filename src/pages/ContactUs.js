import React from 'react';
import Contact from '../components/ContactCard/contact';
import Faq from '../components/FAQsection/Faq';
import Footer from '../components/Footer/footer';
import GetInTouch from '../components/GetinTouch/GetInTouch';
import Navbar from '../components/Navbar/navbar';
import SocialLinks from '../components/SocialHandles/SocialLinks';

function ContactUs(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Navbar/>
            <GetInTouch title="Get In Touch"/>
            <Contact/>
            <SocialLinks/>
            <Faq/>
            <Footer/>
        </div>
    );
}

export default ContactUs;