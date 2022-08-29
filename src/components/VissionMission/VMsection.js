import React from "react";
import "./VMsection.css";
import FeatureImg1 from "../../assests/images/f-c.png"
import FeatureImg2 from "../../assests/images/flexible.png"
import Fade from 'react-reveal/Fade';

function VMsection(props) {
  return (
    <div className="vm-section">
          <div className="section-2">
        <Fade left>
          <div className="section-detail2">
            <h1 className="section-detail-head">Together, let's make our Crypto transfers simple &amp; secure. </h1>

            <div className="section-detail-list">
            CrypIT is a unified wallet and payment app, where a crypto user could manage all their crypto portfolio at ease. We focus on making the crypto transfers and spending simple and secure than ever.
            <br/>With this unified app, not only user can manage their assets and earn by HODLing, they can put it into real use by spending and make payment against the fiat within seconds.

              </div>
           
          </div>
        </Fade>
        <img className="sec-img-header" src='https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80'  alt="img1"  />
      </div>
        <div className="story">
            <img className="story-img" src="https://investmates.io/images/Rectangle3.jpg" alt="" style={{display:'block', margin:"30px auto"}}/>
            <h1 className="section-detail-head2" style={{textAlign:"center"}}> Our Story</h1>
            <div className="story-detail-list" >
            Crypto in not just a investment and HODLable asset, it's a secured, de-centralised currency made for transparent and hassle free transactions. However, it's not user friendly due to different chains, hard to remember wallet addresses, time consuming crypto to fiat withdrawals. To avoid all these hurdles and to put this digital currency into real user we started this journey.

              </div>
        </div>
      <div className="section-1">
        <img className="sec-img" src="https://investmates.io/images/our%20vision.jpg" alt="img1"  />
        <Fade right>
          <div className="section-detail1">
            <h1 className="section-detail-head">Our Vision</h1>
            <div className="section-subtest">Simple, User friendly app to manage crypto porfolio and transfers.</div>
            <div className="section-detail-list">
            The core belief is that removing the barrier between crypto and fiat and vice-versa transactions, will put the digital asset into real world use and get more user adoption thus business adaption.
We not only aim to simplify this transactions but also change the narrative around digital currency by helping user to use it in their real-life spendings.
              </div>
          </div>
        </Fade>
      </div>
      <div className="section-2">
        <Fade left>
          <div className="section-detail2">
            <h1 className="section-detail-head">Our Mission </h1>
<div className="section-subtest">Give an unified app for the digital asset world</div>
            <div className="section-detail-list">
            At CrypIT we re on a mission to make sure crypto management and payments as simple as Fiat currency. We revolutionize the crypto world by making an unified app where they can manage, learn, earn and spend in simple and flexible manner.
              </div>
           
          </div>
        </Fade>
        <img className="sec-img" src='https://investmates.io/images/our%20mission.jpg' alt="img1"  />
      </div>
    </div>
  );
}

export default VMsection;
