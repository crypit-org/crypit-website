import React, { useEffect } from 'react';
import ContactUs from '../components/ContactUs/contactUs';
import Connect from '../components/LetsConnect/connect';


function Contact(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
        
            <ContactUs/>
            <Connect/>
        </div>
    );
}

export default Contact;