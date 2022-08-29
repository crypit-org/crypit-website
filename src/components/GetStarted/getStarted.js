import React from "react";
import "./getStarted.css";
import BannerImage from "../../assests/images/hero-img4.png";
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
          <img className="sample-img" src={Procedure} alt="hero " />
        </div>
        <div className="right-detail-started">
          <div className="detail-sec">
            <img
              className="detail-sec-img"
              src="https://www.cryptimi.com/wp-content/uploads/2019/07/Cryptocurrency-Digital-Wallets.png"
              alt="xyz"
              width={100}
              height={100}
            />
            <div className="about-points-started">
              <div className="point1">1. Download and setup the App</div>
              <div className="point2">
                Download the app, signup using mobile number &amp; Submit KYC.
              </div>
            </div>
          </div>
          <div className="detail-sec">
            <img
              className="detail-sec-img"
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
          <div className="detail-sec">
            <img
              className="detail-sec-img"
              src="https://static.wixstatic.com/media/ebbcfc_9f3a9b94c0dc45eda11226667ad04d09~mv2.png/v1/fill/w_104,h_104,al_c,lg_1,q_85,enc_auto/ebbcfc_9f3a9b94c0dc45eda11226667ad04d09~mv2.png"
              alt="xyz"
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
