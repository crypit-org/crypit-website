import React from "react";
import "./getStarted.css";
import Step1 from "../../assests/images/step1.png";
import Step3 from "../../assests/images/step3.png";
import MainImg from "../../assests/images/hero-img4.png";
import Procedure from "../../assests/images/procedure.png"
function GetStarted(props) {
  return (
    <div className="get-started">
      <h1 className="get-started-head">
      Start your journey with CrypIT  
        <br /> in 3 easy steps.
      </h1>
      <div className="app-sample">
        <div className="left-sample-img">
          <img className="sample-img" src={MainImg} alt="hero " />
        </div>
        <div className="right-detail-started">
          <div className="detail-sec">
            <img
              className="detail-sec-img img-bg"
              src={Step1}
              alt="xyz"
              width={110}
              height={100}
            />
            <div className="about-points-started">
              <div className="point1">1. Download and setup the App</div>
              <div className="point2">
                Download the app, signup using mobile number &amp; Submit KYC.
              </div>
            </div>
          </div>
          <div className="detail-sec ">
            <img
              className="detail-sec-img img-bg"
              src="https://www.cryptimi.com/wp-content/uploads/2019/07/Cryptocurrency-Digital-Wallets.png"
              alt="xyz"
              width={100}
              height={100}
            />
            <div className="about-points-started">
              <div className="point1">2. Setup Wallets</div>
              <div className="point2">
              Import existing wallets &amp; exchange accounts; Easily manage your existing portfolio
              </div>
            </div>
          </div>
          <div className="detail-sec ">
            <img
              className="detail-sec-img img-bg"
              src={Step3} alt="xyz"
              width={100}
              height={100}
            />
            <div className="about-points-started">
              <div className="point1">3. HODL, EARN, SPEND</div>
              <div className="point2">
              Buy crypto with your favourite payment system. Earn with your HODLings. Do the Crypto to Fiat transfer &amp; Crypto to Crypto transfer to anyone.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
