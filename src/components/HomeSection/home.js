import React from "react";
import "./home.css";
import HeroMainImg from "../../assests/img-2.0/hero-img.svg";
import { useState } from "react";
import Insta from "../../assests/img-2.0/_Instagram.svg"
import Linkedin from "../../assests/img-2.0/_Linkedin.svg"
import Twitter from "../../assests/img-2.0/_Twitter.svg"
import Wallet from "../../assests/img-2.0/wallet-yellow.svg"
import Learn from "../../assests/img-2.0/learn-yellow.svg"
import Spend from "../../assests/img-2.0/purse-yellow.svg"
import Earn from "../../assests/img-2.0/dollar-yellow.svg"
function Home(props) {
  const [email, setEmail] = useState("");
  return (
    <div className="home-comp">
 
      <div className="hero-sec">
        <div className="hero-right-container">
          <h1 className="just-crypit">Just CrypIT</h1>
          <h2 className="title-text">
            The <span className="title-text-span">Crypto Super App</span> for
            the decentralized future
          </h2>
          <div className="join-early-combo">
          <input
            placeholder="Enter you email"
            className="hero-email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        <button className="hero-join-early-button">Join Ealy Access</button>
          </div>
          <div className="follow-handles">
            <div className="follow-text">Follow Us</div>
            <img src={Twitter} alt="insta-icon" style={{marginRight:34}}/>
            <img src={Linkedin} alt="insta-icon" style={{marginRight:34}}/>
            <img src={Insta} alt="insta-icon" style={{marginRight:34}}/>
          </div>
        </div>
        <img
          className="hero-main-img"
          src={HeroMainImg}
          alt="heroImg"
          title="Crypto Super App"
        />
      </div>

      <div className="hero-card-section">
<div className="single-card">
    <img src={Wallet} alt="icon-hodl" className="card-img"/>
    <div className="card-description">
      <div className="desc-heading">HODL</div>  
      <div className="desc-sub-heading">Not an another wallet, but an unified app that manages your portfolio by linking any crypto wallet and exchange accounts.</div>  
    </div>
</div>
<div className="single-card">
    <img src={Learn} alt="icon-hodl" className="card-img"/>
    <div className="card-description">
      <div className="desc-heading">Learn</div>  
      <div className="desc-sub-heading">Keep update yourself with latest market news, products, events and expert's insights with CrypIT Shorts (news with Less than 30 sec / 100 words read)</div>  
    </div>
</div>
<div className="single-card">
    <img src={Earn} alt="icon-hodl" className="card-img"/>
    <div className="card-description">
      <div className="desc-heading">Earn</div>  
      <div className="desc-sub-heading">Earn with your HODLings with flexible options. Share your market insights,; Become an influencer and monetize your content with Shorts.</div>  
    </div>
</div>
<div className="single-card">
    <img src={Spend} alt="icon-hodl" className="card-img"/>
    <div className="card-description">
      <div className="desc-heading">Spend</div>  
      <div className="desc-sub-heading">Contact based crypto / fiat transfers, UPI & QR fiat payments and many more. We make your crypto off-ramp and spencing instant and hassle free.</div>  
    </div>
</div>
      </div>
    </div>
  );
}

export default Home;
