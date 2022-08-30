import React from 'react';
import "./hero.css"
import BannerImage from "../../assests/images/started-main.png"
import Fade from 'react-reveal/Fade';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IconContext } from "react-icons";

function HeroSection(props) {
    return (
      
        <div className='hero-section'>
         
            <div className='left-cont'>
            <Fade left>
                <h1 className='hero-section-header'>HODL, EARN, SPEND</h1> </Fade>
                <Fade left>
                <p>A crypto payment app that makes your Fiat &#60; &#62; Crypto transfers &amp; spendings much easier and seamless than ever.</p></Fade>
                <Fade left> <div className='get-playstore'>
                       <Button type="primary" className='join-early'>Join Early Access</Button>
                       <Button type="primary" className='how-work'>
                        <div style={{display:'flex',alignItem:'center'}}>
                       <IconContext.Provider
                value={{
                  size: "1.5em",
                  color: "#0f2310",    
                  style:{marginRight:5}  ,         
                  className: "global-class-name",
                }}
              >
              <AiFillPlayCircle/>
              </IconContext.Provider>
                        How CrypIT works </div></Button>
                </div></Fade>
            </div>
           
            <div className='right-cont'>
                <img className='hero-img' src={BannerImage} alt="hero "/>
            </div>
        </div>
       
    );
}

export default HeroSection;