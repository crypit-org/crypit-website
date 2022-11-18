import React from "react";
import "./links.css";
import Twitter from "../../assets/img-2.0/twitter.png";
import LinkedIn from "../../assets/img-2.0/linkedin.png";
import Insta from "../../assets/img-2.0/insta.png";
import Telegram from "../../assets/img-2.0/tele-icon.png";

function SocialLinks(props) {
  return (
    <div className="faq-sec">
      <div className="feature-sec-heading">Let’s Connect</div>
      <div className="feature-sec-underline" />
      <div className="handles">
        <a
          href="https://twitter.com/just_crypit?t=qfgOiuSf3iAFuuZOjxVRhw&s=09"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="social-media-box">
            <img src={Twitter} alt="vector" className="social-icon" />
            <div className="user-name">Twitter</div>
            <div className="user-id">@just_crypit</div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/admin-crypit-11b437255"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="social-media-box">
            <img src={LinkedIn} alt="vector" className="social-icon" />
            <div className="user-name">LinkedIn</div>
            <div className="user-id">@just_crypit</div>
          </div>
        </a>
        <a
          href="https://instagram.com/just_crypit?igshid=YmMyMTA2M2Y="
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="social-media-box">
            <img src={Insta} alt="vector" className="social-icon" />
            <div className="user-name">Instagram</div>
            <div className="user-id">@just_crypit</div>
          </div>
        </a>
        <div className="social-media-box">
          <img src={Telegram} alt="vector" className="social-icon" />
          <div className="user-name">Telegram</div>
          <div className="user-id">@just_crypit</div>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
