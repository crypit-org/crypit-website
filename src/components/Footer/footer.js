import React from 'react';
import "./footer.css"
import {AiFillMediumCircle} from "react-icons/ai"
import {BsTelegram} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {SiYoutubemusic} from "react-icons/si"
import { IconContext } from "react-icons";
import Logo from "../../assests/images/logo3.0.png"

function Footer(props) {
    return (
   <div className='footer' id="contact">
    <div className='footer-email'>
      <div className='contact-no'>Get us through mail:</div>
      <input className="mail-input" placeholder='Enter your email' />
      <button className='btn-submit' onClick={() => window.location = 'mailto:muthucse33@gmail.com'}>Send</button>
    </div>
    <div className='footer-detail'>
    <img className='logo-footer' src={Logo} alt="logo" width={175}/>

<div className='section-footer'>
  
</div>

<div className='mail'>

<div  className='mail-footer'>info@crypit.com</div>
<div className='social-links'> 
            
            <IconContext.Provider value={{ color: "white", size:"2em",className: "global-class-name" }}>
              <div style={{margin:"auto 5px"}}>
                <BsTelegram />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", size:"2em",className: "global-class-name" }}>
              <div style={{margin:"auto 5px"}}>
                <AiFillTwitterCircle />
              </div>
            </IconContext.Provider>
            
            <IconContext.Provider value={{ color: "white", size:"2em",className: "global-class-name" }}>
              <div style={{margin:"auto 5px"}}>
                <SiYoutubemusic />
              </div>
            </IconContext.Provider>
            
            <IconContext.Provider value={{ color: "white", size:"2em",className: "global-class-name" }}>
              <div style={{margin:"auto 5px"}}>
                <AiFillMediumCircle />
              </div>
            </IconContext.Provider>
            </div>
</div>
   </div>
   </div>
    );
}

export default Footer;