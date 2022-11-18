import React from "react";
import "./footer.css";
import Insta from "../../assets/img-2.0/_Instagram.svg";
import Linkedin from "../../assets/img-2.0/_Linkedin.svg";
import Twitter from "../../assets/img-2.0/_Twitter.svg";
import Telegram from "../../assets/img-2.0/tele-icon-white.png";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="footer-section">
      <div className="footer-detail">
        <div>
          <div className="crypit-name">CrypIT</div>
          <div className="footer-description">
            An unified app to make your digital asset journey much easier and
            seamless than ever.
          </div>
          <div className="mob-footer-part">
            <div className="mob-footer-part-sec">
            <Link to="*">
              <div className="footer-part-title" onClick={  window.scrollTo(0, 0)}>Home</div></Link>
              <Link to="/about-us">
              <div className="footer-part-title">About Us</div> </Link>
              {/* <div className="footer-part-title">Blogs</div> */}
              <div className="footer-part-title">FAQ</div>
            </div>
            <div>
              <div className="footer-part-title">Privacy</div>
              <div className="footer-part-title">Terms</div>
              <Link to="/about-us">
              <div className="footer-part-title">Contact Us</div></Link>
            </div>
          </div>
          <div className="follow-handles-footer">
            <div className="follow-text">Follow Us</div>
            <a
              href="https://twitter.com/just_crypit?t=qfgOiuSf3iAFuuZOjxVRhw&s=09"
              target="_blank"
            >
              <img
                src={Twitter}
                alt="insta-icon"
                style={{ marginRight: 34, cursor: "pointer" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/crypit/"
              target="_blank"
            >
              <img
                src={Linkedin}
                alt="insta-icon"
                style={{ marginRight: 34, cursor: "pointer" }}
              />
            </a>
            <a
              href="https://instagram.com/just_crypit?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <img
                src={Insta}
                alt="insta-icon"
                style={{ marginRight: 32, cursor: "pointer" }}
              />
            </a>
            <a>
              <img
                src={Telegram}
                alt="insta-icon"
                style={{
                  marginRight: 34,
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
        <div className="footer-part">
          <div className="footer-part1">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="footer-part-title">Home</div>{" "}
            </Link>
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <div className="footer-part-title">About Us</div>
            </Link>
            <div
              className="footer-part-title"
              onClick={() => window.open("http://crypit.blog")}
            >
              Blogs
            </div>
          </div>
          <div className="footer-part2">
            <div className="footer-part-title">FAQ</div>
            <div className="footer-part-title">Privacy</div>
            <div className="footer-part-title">Terms</div>
          </div>
          <div className="footer-part3">
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <div className="footer-part-title">Contact Us</div>
            </Link>
            <div className="contact-us-desc">
              Lorem Ipsum has been the industry's standard dummy when an unknown
              printer took.
            </div>
          </div>
        </div>
      </div>
      <div className="footer-reserved">
        © 2022 Crypit | Security | Your Privacy | Terms
      </div>
    </div>
  );
}

export default Footer;
