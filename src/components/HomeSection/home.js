import React from "react";
import "./home.css";
import HeroMainImg from "../../assets/img-2.0/hero-img.svg";
import { useState } from "react";
import Insta from "../../assets/img-2.0/_Instagram.svg";
import Linkedin from "../../assets/img-2.0/_Linkedin.svg";
import Twitter from "../../assets/img-2.0/_Twitter.svg";
import Wallet from "../../assets/img-2.0/wallet-yellow.svg";
import Learn from "../../assets/img-2.0/learn-yellow.svg";
import Spend from "../../assets/img-2.0/purse-yellow.svg";
import Earn from "../../assets/img-2.0/dollar-yellow.svg";
import Telegram from "../../assets/img-2.0/tele-icon-white.png";
import emailjs from "@emailjs/browser";
import { NotificationManager } from "react-notifications";
import { Form, Button, Modal } from "antd";

function Home(props) {
  const [email, setEmail] = useState("");
  const [mailId, setMailId] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);


  const joinEarly = async () => {
    // User details goes here
    var templateParams = {
      from_name: "user",
      email: mailId,
    };
    try {
      if (mailId.trim() === "") {
        return;
      }
      let response = await emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_PUBLIC_KEY
        );

      if (response.status === 200) {
        setIsModalVisible(false);
        Modal.success({
          title: 'Awesome',
          content: "Check you email for more details, we'll see you soon!",
        });
   
      }
     
    } catch (err) {
      NotificationManager.warning(
        "Unable to register, Please try again later!",
        "Warning",
        3000
      );
      console.error("Error on Get Early Access: EMAILJS.");
    }
  };
  return (

    <div className="home-comp">
   
      <div className="hero-sec">
        <div className="hero-right-container">
          <h1 className="just-crypit">Just CrypIT</h1>
          <h2 className="title-text">
            The <span className="title-text-span">Crypto Super App</span> for
            the decentralized future
          </h2>
          <div className="join-early-combo">
            <input
              placeholder="Enter you email"
              className="hero-email-input"
              onChange={(e) => setMailId(e.target.value)}
            />
            <button className="hero-join-early-button" onClick={joinEarly} style={{cursor:"pointer"}}>Join Ealy Access</button>
          </div>
          <div className="follow-handles">
            <div className="follow-text">Follow Us</div>
            <a
              href="https://twitter.com/just_crypit"
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
              href="https://instagram.com/just_crypit"
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
        <img
          className="hero-main-img"
          src={HeroMainImg}
          alt="heroImg"
          title="Crypto Super App"
        />
      </div>
      <div className="hero-card-section">
        <div className="single-card">
          <img src={Wallet} alt="icon-hodl" className="card-img" />
          <div className="card-description">
            <div className="desc-heading">HODL</div>
            <div className="desc-sub-heading">
              Supercharged crypto wallet. A unified wallet experience with your
              multiple crypto wallets and exchange accounts in one place.
            </div>
          </div>
        </div>
        <div className="single-card">
          <img src={Learn} alt="icon-hodl" className="card-img" />
          <div className="card-description">
            <div className="desc-heading">Learn</div>
            <div className="desc-sub-heading">
              Keep uptodate with the dynamic world of Crypto in less than 30
              secs! Latest news, products, events and expert's insights with
              CrypIT Shorts.
            </div>
          </div>
        </div>
        <div className="single-card">
          <img src={Earn} alt="icon-hodl" className="card-img" />
          <div className="card-description">
            <div className="desc-heading">Earn</div>
            <div className="desc-sub-heading">
              Earn with your HODLings with flexible options. Share your market
              insights,; Become an influencer and monetize your content with
              CrypIT Shorts.
            </div>
          </div>
        </div>
        <div className="single-card">
          <img src={Spend} alt="icon-hodl" className="card-img" />
          <div className="card-description">
            <div className="desc-heading">Spend</div>
            <div className="desc-sub-heading">
              Contact based crypto - fiat transfers, UPI & QR fiat payments and
              many more. We make your crypto off-ramp and spending instant and
              hassle free.
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
