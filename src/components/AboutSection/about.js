import React from 'react';
import "./about.css"
import About1 from "../../assests/images/wallet.png"
import About2 from "../../assests/images/about3.png"
import About3 from "../../assests/images/on-ramp.png"
import About4 from "../../assests/images/blog4.png"
import About5 from "../../assests/images/about5.png"
import About6 from "../../assests/images/gift2.png"

function About(props) {
    return (
        <div className='about-section' id="about" >
            <h1 className='about-head'>About</h1>
            <div className='about-points'>
                <div className='container'>
                    <img className="cont-img" src={About1} alt="about img" />
                    <p className='cont-text'>Gateway for all your HODLings</p>  
                </div>
                <div className='container'>
                    <img className="cont-img" src={About2} alt="about img" width={200}/>
                    <p className='cont-text'>Mobile number based Crypto Txns </p>  
                </div>
                <div className='container'>
                    <img className="cont-img" src={About3} alt="about img" />
                    <p className='cont-text'>Multiple on-ramp opportunities</p>  
                </div>
                <div className='container'>
                    <img className="cont-img" src={About5} alt="about img" />
                    <p className='cont-text'>Off-ramp at ease</p>  
                </div>
                <div className='container'>
                    <img className="cont-img" src={About4} alt="about img" />
                    <p className='cont-text'> Earn with your HODLings</p>  
                </div>
                <div className='container'>
                    <img className="cont-img" src={About6} alt="about img" />
                    <p className='cont-text'>Join Bonus &amp; Exciting Rewards</p>  
                </div>
              
 
            </div>
        </div>
    );
}

export default About;