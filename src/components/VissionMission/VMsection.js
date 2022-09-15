import React from "react";
import "./VMsection.css";
import FeatureImg1 from "../../assests/images/vision.avif"
import FeatureImg2 from "../../assests/images/mission.avif"
import Story1 from "../../assests/images/story1.jpg"
import Story2 from "../../assests/images/story2.avif"
import VMHero from "../../assests/images/vm-hero.avif"
import Fade from 'react-reveal/Fade';

function VMsection(props) {
  return (
    <div className="vm-section">
      <div className="section-2">
        <Fade left>
          <div className="section-detail2">
            <h1 className="section-detail-head">Together, let's make our Digital Asset World simple &amp; secure. </h1>

            <div className="section-detail-list">
              CrypIT is a unified wallet and payment app, where a crypto user could manage all of their crypto portfolio at ease. We focus on making the crypto management &amp; transfers simple and secure than ever.
              <br />With this unified app, not only users can manage their assets and earn with HODLings, they can put it into real use by spending and make payment against the fiat in seconds.
            </div>
          </div>
        </Fade>
        <img className="sec-img-header" src={VMHero} alt="img1" />
      </div>
      <div className="story">
        <div className="story-img-flex">
          <img className="story-img img2" src={Story2} alt="" />
          <img className="story-img img1" src={Story1} alt="" />

        </div>
        <h1 className="section-detail-head2" style={{ textAlign: "center" }}> Our Story</h1>
        <div className="story-detail-list" >
          Crypto in not just a investment and HODLable asset, it's a secured, de-centralised currency made for transparent and hassle free transactions. However, it's not user friendly due to highly volatile market, multiple chains &amp; hard to remember wallet addresses, time consuming crypto to fiat withdrawals. To avoid all these hurdles and to put this digital currency into real use we started this journey.

        </div>
      </div>
      <div className="section-1">
        <img className="sec-img" src={FeatureImg1} alt="img1" />
        <Fade right>
          <div className="section-detail1">
            <h1 className="section-detail-head">Our Vision</h1>
            <div className="section-subtest">Simple, User friendly app to manage crypto porfolio and transfers.</div>
            <div className="section-detail-list">
              The core belief is that removing the barrier between crypto and fiat and vice-versa transactions, will put the digital asset into real world use and get more user adoption thus business adaption.
              We not only aim to simplify this transactions but also change the narrative around digital currency by helping user to Learn and share their knowledge with the community.
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
              At CrypIT we re on a mission to make sure crypto management and transfers as simple as Fiat currency. We revolutionize the crypto world by making an unified app where they can manage, learn, earn and spend in simple and flexible manner.
            </div>

          </div>
        </Fade>
        <img className="sec-img" src={FeatureImg2} alt="img1" />
      </div>
    </div>
  );
}

export default VMsection;
