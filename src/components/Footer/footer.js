import React from 'react';
import "./footer.css"
import Insta from "../../assests/img-2.0/_Instagram.svg"
import Linkedin from "../../assests/img-2.0/_Linkedin.svg"
import Twitter from "../../assests/img-2.0/_Twitter.svg"


function Footer(props) {
    return (
        <div className='footer-section'>
            <div className='footer-detail'>
                <div >
                    <div className='crypit-name'>CrypIT</div>
                    <div className='footer-description'>An unified app to make your digital asset journey much easier and seamless than ever.</div>
                        <div className="follow-handles">
            <div className="follow-text">Follow Us</div>
            <img src={Twitter} alt="insta-icon" style={{marginRight:34}}/>
            <img src={Linkedin} alt="insta-icon" style={{marginRight:34}}/>
            <img src={Insta} alt="insta-icon" style={{marginRight:34}}/>
          </div>
    
                </div>
                <div className='footer-part'>
                    <div className='footer-part1'>
                        <div className='footer-part-title'>About Us</div>
                        <div className='footer-part-title'>Blogs</div>
                    </div>
                    <div className='footer-part2'>
                    <div className='footer-part-title'>FAQ</div>
                    <div className='footer-part-title'>Privacy</div>
                    <div className='footer-part-title'>Terms</div>
                    </div>
                    <div className='footer-part3'>
                    <div className='footer-part-title'>Contact Us</div>
                   <div className='contact-us-desc'>Lorem Ipsum has
been the industry's
standard dummy
when an unknown printer took.
</div>
                    </div>
                </div>
            </div>
           <div className='footer-reserved'>© 2022 Crypit | Security | Your Privacy | Terms</div>
        </div>
    );
}

export default Footer;