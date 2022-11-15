import React from "react";
import "./work.css";
import Line1 from "../../assets/img-2.0/line1.png";
import Line2 from "../../assets/img-2.0/line2.png";
import Arrow1 from "../../assets/img-2.0/arrow1.png";
import Arrow2 from "../../assets/img-2.0/arrow2.png";
import Ecllipse from "../../assets/img-2.0/Ellipse .png";
function HowItWorks(props) {
  return (
    <div className="how-it-works">
      <div className="feature-sec-heading">How it works</div>
      <div className="feature-sec-underline" />
      <div className="step1">
        <div style={{ display: "flex" }}>
          <div className="number-opacity">01</div>
          <div className="step-head">Download and setup the App</div>
        </div>
        <div className="step-desc">
          Download the app, signup using mobile number & Submit KYC.
        </div>
      </div>
      <div className="step2">
        <div style={{ display: "flex" }}>
          <div className="number-opacity">02</div>
          <div className="step-head">Setup Wallets</div>
        </div>
        <div className="step-desc">
          Import existing wallets & exchange accounts; Manage your crypto
          portfolio in single place
        </div>
      </div>
      <div className="step3">
        <div style={{ display: "flex" }}>
          <div className="number-opacity">03</div>
          <div className="step-head">HODL, EARN, SPEND</div>
        </div>
        <div className="step-desc">
          Buy crypto with your favourite payment system. Earn with your
          HODLings. Do the Crypto to Fiat transfer & Crypto to Crypto transfer
          to anyone.
        </div>
      </div>
      <img src={Line1} alt="vectors" className="line1" />
      <img src={Line2} alt="vectors" className="line2" />
      <img src={Arrow1} alt="vectors" className="arrow1" />
      <img src={Arrow2} alt="vectors" className="arrow2" />
      <img src={Ecllipse} alt="vectors" className="ecllipse1" />
      <img src={Ecllipse} alt="vectors" className="ecllipse2" />
    </div>
  );
}

export default HowItWorks;
