import React from 'react';
import "./feature.css"
import FeatureImg1 from "../../assests/images/f-c.png"
import FeatureImg2 from "../../assests/images/flexible.png"
import FeatureImg3 from "../../assests/images/bank1.0.png"
import FeatureImg4 from "../../assests/images/earn2.png"
import Fade from 'react-reveal/Fade';


function Feature(props) {
    return (
        <div className='feature-section' >
            <div className='feature-cont'>
                <div className='cont-1'>
                    
                    <Fade left>
                    <div className='detail1'>
                        <h1 className='detail-head'>Fiat &#60; &#62; Crypto</h1>
                        
                        <ul className='detail-list'>
                                <li>Sit and relax between your Fiat &amp; Crypto, because CrypIT made Fiat to Crypto transfers easy, flexible &amp; more secured</li>
                                <li>Buy crypto using your favourite payment system</li>
                               
                            </ul>
                    </div>
                    </Fade>
                    <img src={FeatureImg1} alt="img1" width={390}/>
                </div>
                <div className='cont-2'>
                <img  src={FeatureImg2} alt="img1" width={350} height={305}/>
                <Fade right>
                    <div className='detail2'>
                        <h1 className='detail-head'>Flexible </h1>
  
                            <ul className='detail-list'>
                                <li>Manage all your exchange &amp; wallet HODLings in single mobile app</li>
                                <li>Buy crypto using your favourite payment system</li>
                                <li>Self transfer between your wallets</li>
                            </ul>
                            <p className='detail-para'> </p>
                    </div>
                    </Fade>
                    
                </div>
                <div className='cont-1'>
                    <Fade left>
                    <div className='detail1'>
                        <h1 className='detail-head'>Super-Easy</h1>
                        <ul className='detail-list'>
                                <li>Link mobile number and set primary wallet for all in/out crypto transactions</li>
                                <li>Crypto Transfers using mobile number without worrying about wallet address</li>
                                <li>Hassle free UPI, QR code, Bank transfer from Crypto.</li>
                                <li>No more confusion with all crypto buzzwords &amp; complexity</li>
                            </ul>
                    </div>
                    </Fade>
                    <img src={FeatureImg3} alt="img1" width={400}/>
                </div>
                <div className='cont-2'>    
                <img  src={FeatureImg4} alt="img1" width={300}/>
                <Fade right>
                    <div className='detail2'>
                        <h1 className='detail-head'>Earn </h1>
  
                            <ul className='detail-list'>
                                <li>Earn passive income on you crypto HODLings</li>
                                <li>Get Join Bonus &amp; Exciting Referral rewards</li>
                            </ul>
                            <p className='detail-para'> </p>
                    </div>
                    </Fade>
                   
                </div>
                <div className='cont-1'>
                    <Fade left>
                    <div className='detail1'>
                        <h1 className='detail-head'>Learn</h1>
                        <ul className='detail-list'>
                                <li>Link mobile number and set primary wallet for all in/out crypto transactions</li>
                                <li>Crypto Transfers using mobile number without worrying about wallet address</li>
                                <li>Hassle free UPI, QR code, Bank transfer from Crypto.</li>
                                <li>No more confusion with all crypto buzzwords &amp; complexity</li>
                            </ul>
                    </div>
                    </Fade>
                    <img src={FeatureImg3} alt="img1" width={400}/>
                </div>
                <div className='cont-2'>    
                <img  src={FeatureImg4} alt="img1" width={300}/>
                <Fade right>
                    <div className='detail2'>
                        <h1 className='detail-head'>Cooking more for you </h1>
  
                            <ul className='detail-list'>
                                <li>Earn passive income on you crypto HODLings</li>
                                <li>Get Join Bonus &amp; Exciting Referral rewards</li>
                            </ul>
                            <p className='detail-para'> </p>
                    </div>
                    </Fade>
                   
                </div>
            </div>
        </div>
    );
}

export default Feature;