import React from 'react';
import "./about.css"
import JustCrypit from "../../assests/images/just-crypit.png"
import About1 from "../../assests/images/wallet.png"
import shorts from "../../assests/images/crypto-news.png"
import About2 from "../../assests/images/about3.png"
import About3 from "../../assests/images/on-ramp.png"
import About4 from "../../assests/images/blog4.png"
import About5 from "../../assests/images/about5.png"
import About6 from "../../assests/images/gift2.png"
import Fade from 'react-reveal/Fade';

function About(props) {
    return (
        <div className='about-section'>
            <div className='just-crypit'>
           
            <div className='left-img'>
                <img className='crypit-img' src={JustCrypit} alt="hero "/>
            </div>
            <Fade right>
            <div className='right-detail'>
                <h1 className='crypit-heading'>Just CrypIT</h1>
                <ul className='detail-list-crypit'>
                                <li>Integrate your existing wallets, exchange accounts and manage all your potfolio in single platform.</li>
                                <li>Keep update yourself with latest market news, products, events and expert's insights.</li>
                                <li>Avail hassle free crypto on-ramp via credit card, bank transfers or any of your payment system.</li>
                                <li>Transfer / Pay to anyone via mobile number, wallet address or custom url.</li>
                                <li>And lot more to put your digital world much better.</li>
                            </ul>
            </div>
            </Fade>

            </div>

            <Fade top big cascade>
            <div className='about-points'>
                <div className='container'>
                    <img className="cont-img" src={About1} alt="about img" />
                    <p className='cont-text'>An unified app for your Digital Asset</p>  
                </div>
                <div className='container'>
                    <img className="cont-img" src={shorts} alt="about img" width={200}/>
                    <p className='cont-text'>Market trends &amp; Expert's insights </p>  
                </div>
                <div className='container'>
                    <img className="cont-img" src={About2} alt="about img" width={200}/>
                    <p className='cont-text'>Hassle free transfers to anyone</p>  
                </div>
                <div className='container'>
                    <img className="cont-img" src={About3} alt="about img" />
                    <p className='cont-text'>On-ramp and off-ramp at ease</p>  
                </div>
           
                <div className='container'>
                    <img className="cont-img" src={About4} alt="about img" />
                    <p className='cont-text'>Flexible EARN options</p>  
                </div>
                <div className='container'>
                    <img className="cont-img" src={About6} alt="about img" />
                    <p className='cont-text'>Join Bonus &amp; Exciting Rewards</p>  
                </div>
{/* 
                <div className='container'>
                    <img className="cont-img" src={About5} alt="about img" />
                    <p className='cont-text'> We're cooking much more for you..</p>  
                </div>
  */}
            </div>
            </Fade>
        </div>
    );
}

export default About;