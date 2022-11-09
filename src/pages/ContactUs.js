import React from 'react';
import Contact from '../components/ContactCard/contact';
import Faq from '../components/FAQsection/Faq';
import Footer from '../components/Footer/Footer';
import GetInTouch from '../components/GetinTouch/GetInTouch';
import Navbar from '../components/Navbar/navbar';
import SocialLinks from '../components/SocialHandles/SocialLinks';

function ContactUs(props) {
    return (
        <div>
            <Navbar/>
            <GetInTouch/>
            <Contact/>
            <SocialLinks/>
            <Faq/>
            <Footer/>
        </div>
    );
}

export default ContactUs;