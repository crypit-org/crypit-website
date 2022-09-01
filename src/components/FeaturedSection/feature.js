import React from 'react';
import "./feature.css"
import FeatureImg1 from "../../assests/images/f-c.png"
import FeatureImg2 from "../../assests/images/flexible.png"
import FeatureImg3 from "../../assests/images/bank1.0.png"
import FeatureImg4 from "../../assests/images/feature-earn.png"
import FeatureImg5 from "../../assests/images/cooking.png"
import Fade from 'react-reveal/Fade';
import Accessbtn from '../AcessButton/accessbtn';


function Feature(props) {
    return (
        <div className='feature-section' >
            <div className='feature-banner'>
            <div className='banner-detail'>
        <h1 className='banner-head'>Simple and Secure way to manage buy, sell, earn and spend crypto</h1>
        {/* <Button type="primary" className='banner-head-btn' >Join Early Access</Button> */}
        <Accessbtn title="Join Early Access" />
            </div>
            <div className='banner-cards'>
            <div className='single-card'><h2>Buy &amp; Sell crypto</h2><p >Buy, sell, exchange and withdraw crypto easily using the fully featured app</p> </div>
            <div className='single-card'><h2>Wallet</h2><p >Integrate your existing wallets and exchange crypto and fiat in one place</p> </div>
            <div className='single-card'><h2>Earn</h2><p >Up to 14.7% yearly on your crypto and stablecoins</p> </div>
            <div className='single-card'><h2>Spend</h2><p >Sell or make payment using crypto. The receiver gets paid in fiat or crypto of their choice</p> </div>
            </div>
            </div>
            <div className='feature-cont'>
                <div className='cont-1'>
                    
                    <Fade left>
                    <div className='detail1'>
                        <h1 className='detail-head'>Crypto &#60; &#62; Fiat</h1>
                        
                        <ul className='detail-list'>
                                <li>Sit and relax between your Crypto &amp; Fiat , because CrypIT made Crypto to Fiat transfers easy, flexible &amp; more secured</li>
                                
                               
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
                <img  src={FeatureImg4} alt="img1" width={320} />
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
                {/* <div className='cont-1'>
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
                </div> */}
                <div className='cont-1'>    
                
                <Fade right>
                    <div className='detail1'>
                        <h1 className='detail-head'>Cooking more for you... </h1>
  
                            <ul className='detail-list'>
                                <li>Keep in touch with us to know more about CrypIT</li>
                            </ul>
                            <p className='detail-para'> </p>
                    </div>
                    </Fade>
                    <img  src={FeatureImg5} alt="img1" width={450}/>
                </div>
            </div>
         
        </div>
    );
}

export default Feature;