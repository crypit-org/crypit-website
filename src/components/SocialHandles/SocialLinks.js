import React from "react";
import "./links.css";
import Twitter from "../../assests/img-2.0/twitter.png";
import LinkedIn from "../../assests/img-2.0/linkedin.png";
import Insta from "../../assests/img-2.0/insta.png";
import Telegram from "../../assests/img-2.0/wp.png";

function SocialLinks(props) {
  return (
    <div className="faq-sec">
      <div className="feature-sec-heading">Let’s Connect</div>
      <div className="feature-sec-underline" />
      <div className="handles">
        <div className="social-media-box">
          <img src={Twitter} alt="vector" className="social-icon" />
          <div className="user-name">Twitter</div>
          <div className="user-id">@crypit</div>
        </div>
        <div className="social-media-box">
          <img src={LinkedIn} alt="vector" className="social-icon" />
          <div className="user-name">LinkedIn</div>
          <div className="user-id">@crypit</div>
        </div>
        <div className="social-media-box">
          <img src={Insta} alt="vector" className="social-icon" />
          <div className="user-name">Twitter</div>
          <div className="user-id">@crypit</div>
        </div>
        <div className="social-media-box">
          <img src={Telegram} alt="vector" className="social-icon" />
          <div className="user-name">Telegram</div>
          <div className="user-id">@crypit</div>
        </div>
        <div className="social-media-box">
          <img src={Telegram} alt="vector" className="social-icon" />
          <div className="user-name">What's App</div>
          <div className="user-id">@crypit</div>
        </div>
       
      </div>
    </div>
  );
}

export default SocialLinks;
