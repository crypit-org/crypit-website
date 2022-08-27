import React from "react";
import "./getStarted.css";
import BannerImage from "../../assests/images/hero-img4.png";
function GetStarted(props) {
  return (
    <div className="get-started">
      <h1 className="get-started-head">
        Get started with CrypIT
        <br /> in 3 easy steps.
      </h1>
      <div className="app-sample">
        <div className="left-sample-img">
          <img className="sample-img" src={BannerImage} alt="hero " />
        </div>
        <div className="right-detail-started">
          <div className="detail-sec">
            <img
              className="detail-sec-img"
              src="https://static.wixstatic.com/media/ebbcfc_9f3a9b94c0dc45eda11226667ad04d09~mv2.png/v1/fill/w_104,h_104,al_c,lg_1,q_85,enc_auto/ebbcfc_9f3a9b94c0dc45eda11226667ad04d09~mv2.png"
              alt="xyz"
            />
            <div className="about-points-started">
              <div className="point1">1. Download the App</div>
              <div className="point2">
                Download the app, signup using mobile number &amp; Submit KYC.
              </div>
            </div>
          </div>
          <div className="detail-sec">
            <img
              className="detail-sec-img"
              src="https://static.wixstatic.com/media/ebbcfc_9f3a9b94c0dc45eda11226667ad04d09~mv2.png/v1/fill/w_104,h_104,al_c,lg_1,q_85,enc_auto/ebbcfc_9f3a9b94c0dc45eda11226667ad04d09~mv2.png"
              alt="xyz"
            />
            <div className="about-points-started">
              <div className="point1">1. Download the App</div>
              <div className="point2">
                Download the app, signup using mobile number &amp; Submit KYC.
              </div>
            </div>
          </div>
          <div className="detail-sec">
            <img
              className="detail-sec-img"
              src="https://static.wixstatic.com/media/ebbcfc_9f3a9b94c0dc45eda11226667ad04d09~mv2.png/v1/fill/w_104,h_104,al_c,lg_1,q_85,enc_auto/ebbcfc_9f3a9b94c0dc45eda11226667ad04d09~mv2.png"
              alt="xyz"
            />
            <div className="about-points-started">
              <div className="point1">1. Download the App</div>
              <div className="point2">
                Download the app, signup using mobile number &amp; Submit KYC.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
