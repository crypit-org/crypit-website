import React from 'react';
import "./feature.css"
import FeatureImg1 from "../../assets/images/f-c.png"
import FeatureImg2 from "../../assets/images/flexible.png"
import FeatureImg3 from "../../assets/images/bank1.0.png"
import MarketLearnImg from "../../assets/images/digital-market-news.png"
import FeatureImg4 from "../../assets/images/feature-earn.png"
import FeatureImg5 from "../../assets/images/cooking.png"
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
                    <div className='single-card'><h2>HODL</h2><p >Integrate your existing Wallets and Exchange accounts to manage your crypto potfolio in one place.</p> </div>
                    <div className='single-card'><h2>LEARN</h2><p >Latest crypto trends &amp; experts insights from CrypIT-Shorts, helps you to understand the market better.</p> </div>
                    <div className='single-card'><h2>EARN</h2><p >Up to 14.7% yearly on your crypto and stablecoins. Flexible Earn option with no-lock in period.</p> </div>
                    <div className='single-card'><h2>SPEND</h2><p >Contact based Crypto - Crypto / Fiat transfers. And much more options to spend your digital asset in real world use.</p> </div>
                </div>
            </div>
            <div className='feature-cont'>
                <div className='cont-1'>

          
                        <div className='detail1'>
                            <h1 className='detail-head'>Crypto &#60; &#62; Fiat</h1>

                            <ul className='detail-list'>
                                <li>Sit and relax between your Crypto &amp; Fiat</li>
                                <li>CrypIT makes your Crypto management and Crypto &#60; &#62; Fiat transfers easy, flexible &amp; more secured</li>
                            </ul>
                        </div>
               
                    <img src={FeatureImg1} alt="img1" width={390} />
                </div>
                <div className='cont-2'>
                    <img src={FeatureImg2} alt="img1" width={350} height={305} />
               
                        <div className='detail2'>
                            <h1 className='detail-head'>Flexible </h1>

                            <ul className='detail-list'>
                                <li>Manage all your exchange &amp; wallet HODLings in single mobile app</li>
                                <li>Buy crypto using your favourite payment system</li>
                                <li>Self transfer between your wallets for better portfolio management</li>
                            </ul>
                            <p className='detail-para'> </p>
                        </div>
              

                </div>
                <div className='cont-1'>
              
                        <div className='detail1'>
                            <h1 className='detail-head'>Super-Easy</h1>
                            <ul className='detail-list'>
                                <li>Link mobile number and set primary wallet for all in/out crypto transactions</li>
                                <li>Crypto Transfers using mobile number without worrying about wallet address</li>
                                <li>Hassle free UPI, QR code, Bank transfer from Crypto.</li>
                                <li>No more confusion with all crypto buzzwords &amp; complexity</li>
                            </ul>
                        </div>
           
                    <img src={FeatureImg3} alt="img1" width={400} />
                </div>
                <div className='cont-2'>
                    <img src={MarketLearnImg} alt="img1" width={400} />
                
                        <div className='detail2'>
                            <h1 className='detail-head'>Learn</h1>
                            <ul className='detail-list'>
                                <li>CrypIT-Shorts keeps you updated with latest market news, events, products.,</li>
                                <li>Get expert's insights and predictions</li>
                                <li>Share your portfolio and knowledge; Monetize your content</li>
                                <li>Plan your investments with market performance</li>
                            </ul>
                            <p className='detail-para'> </p>
                        </div>
                

                </div>
                <div className='cont-1'>
               
                        <div className='detail2'>
                            <h1 className='detail-head'>Earn</h1>
                            <ul className='detail-list'>
                                <li>Earn passive income on your crypto HODLings</li>
                                <li>Flexible Earn with no lock-in period</li>
                                <li>Get Join Bonus &amp; Exciting Referral rewards</li>
                            </ul>
                            <p className='detail-para'> </p>
                        </div>
            
                    <img src={FeatureImg4} alt="img1" width={450} />
                </div>
                <div className='cont-2'>
                    <img src={FeatureImg5} alt="img1" width={450} />
                   
                        <div className='detail1'>
                            <h1 className='detail-head'>Cooking more for you... </h1>

                            <ul className='detail-list'>
                                <li>Keep in touch with us to know more about CrypIT</li>
                            </ul>
                            <p className='detail-para'> </p>
                        </div>
               
                </div>
            </div>

        </div>
    );
}

export default Feature;