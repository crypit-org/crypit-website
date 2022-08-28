import React from "react";
import "./footer.css";
import { AiFillMediumCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { IconContext } from "react-icons";
import Logo from "../../assests/images/logo3.0.png";
import { Fade } from "react-reveal";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-email " style={{width:350}}>
      <img className="logo-footer" src={Logo} alt="logo" width={175} />
      <p className="footer-desc">A crypto payment app that makes your Crypto transfers &amp; spendings much easier and seamless than ever.</p>
            </div>
      <div className="footer-email">
        <div className="contact-no">Company</div>
        <ul className="footer-ul-list">
          <li>Home</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
            </div>
      <div className="footer-email">
        <div className="contact-no">More</div>
        <ul className="footer-ul-list">
          <li>FAQ</li>
          <li>Privacy</li>
          <li>Terms</li>
     
        </ul>
            </div>
            

      <div className="footer-detail">
        {/* <img className="logo-footer" src={Logo} alt="logo" width={175} /> */}
        <h1 className="disc-app">Discover our app</h1>
        <div className="section-footer"></div>

        <div className="mail">
          <div className="mail-footer">support@crypit.app</div>
          <div className="social-links">
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                className: "global-class-name",
              }}
            >
              <div style={{ margin: "auto 5px" }}>
                <BsTelegram />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                className: "global-class-name",
              }}
            >
              <div style={{ margin: "auto 5px" }}>
                <AiFillTwitterCircle />
              </div>
            </IconContext.Provider>

            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                className: "global-class-name",
              }}
            >
              <div style={{ margin: "auto 5px" }}>
                <SiYoutubemusic />
              </div>
            </IconContext.Provider>

            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                className: "global-class-name",
              }}
            >
              <div style={{ margin: "auto 5px" }}>
                <AiFillMediumCircle />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
