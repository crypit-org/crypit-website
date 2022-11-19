import React from "react";
import "./links.css";
import Twitter from "../../assets/img-2.0/twitter.png";
import LinkedIn from "../../assets/img-2.0/linkedin.png";
import Insta from "../../assets/img-2.0/insta.png";
import Telegram from "../../assets/img-2.0/tele-icon.png";

import Insta1 from "../../assets/img-2.0/_Instagram.svg";
import Linkedin1 from "../../assets/img-2.0/_Linkedin.svg";
import Twitter1 from "../../assets/img-2.0/_Twitter.svg";
function SocialLinks(props) {
  return (
    <div className="faq-sec">
      <div className="feature-sec-heading">Let’s Connect</div>
      <div className="feature-sec-underline" />
      <div className="handles">
        <a
          href="https://twitter.com/just_crypit"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="social-media-box">
<div className="icon-bg">
            <img src={Twitter} alt="vector" className="social-links-icon"/></div>
            <div className="user-name">Twitter</div>
            <div className="user-id">@just_crypit</div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/crypit/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="social-media-box">
          <div className="icon-bg">
            <img src={LinkedIn} alt="vector"  className="social-links-icon"/></div>
            <div className="user-name">LinkedIn</div>
            <div className="user-id">@just_crypit</div>
          </div>
        </a>
        <a
          href="https://instagram.com/just_crypit"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="social-media-box">
          <div className="icon-bg">
            <img src={Insta} alt="vector"  className="social-links-icon"/></div>
            <div className="user-name">Instagram</div>
            <div className="user-id">@just_crypit</div>
          </div>
        </a>
        <div className="social-media-box">
        <div className="icon-bg">
          <img src={Telegram} alt="vector" className="social-links-icon"/></div>
          <div className="user-name">Telegram</div>
          <div className="user-id">@just_crypit</div>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
