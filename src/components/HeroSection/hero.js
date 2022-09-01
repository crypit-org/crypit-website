import React, { useState } from "react";
import "./hero.css";
import BannerImage from "../../assests/images/started-main.png";
import Rocket from "../../assests/images/rocket.png";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Button, Input, Modal } from "antd";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import emailjs from '@emailjs/browser';

function HeroSection(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  //join early btn
  const showModal = () => {
    setIsModalVisible(true);
  };

  //Get access btn
  const joinEarly = async () => {
    // User details goes here
    var templateParams = {
      from_name: 'Joe',
      email: "test@gmail.com"
    };
    try {
      let response = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY);
      console.log('SUCCESS!', response.status, response.text);
      setIsModalVisible(false);
      alert("success!");
    } catch (err) {
      console.error("Error on Get Early Access: EMAILJS.");
      console.error(err);
    }
  };

  // cross icon
  const handleCancel = () => {
    setIsModalVisible(false);
  };



  return (
    <div className="hero-section">
      <div className="left-cont">
        <Fade left>
          <h1 className="hero-section-header">HODL, EARN, SPEND</h1>{" "}
        </Fade>
        <Fade left>
          <p>
            A crypto payment app that makes your Fiat &#60; &#62; Crypto
            transfers &amp; spendings much easier and seamless than ever.
          </p>
        </Fade>
        <Fade left>
          {" "}
          <div className="get-playstore">
            <Button type="primary" className="join-early" onClick={() => { showModal() }}>
              Join Early Access
            </Button>
            <Button type="primary" className="how-work">
              <div style={{ display: "flex", alignItem: "center" }}>
                <IconContext.Provider
                  value={{
                    size: "1.5em",
                    color: "#0f2310",
                    style: { marginRight: 5 },
                    className: "global-class-name",
                  }}
                >
                  <AiFillPlayCircle />
                </IconContext.Provider>
                How CrypIT works{" "}
              </div>
            </Button>
          </div>
        </Fade>
      </div>
      <Modal
        visible={isModalVisible}
        onOk={joinEarly}
        okText="Get Access"
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <img className="Rocket-img" src={Rocket} alt="Rocket" />
        <h3 style={{ textAlign: 'center', marginBottom: "10px" }}>Enter your Name</h3>
        <Input placeholder="Name" type="text" style={{ marginBottom: "20px" }} />
        <h3 style={{ textAlign: 'center', marginBottom: "10px" }}>Enter your Email Address</h3>
        <Input placeholder="Email Id" type="email" style={{ marginBottom: "20px" }} />
      </Modal>

      <div className="right-cont">
        <img className="hero-img" src={BannerImage} alt="hero " />
      </div>
    </div>
  );
}

export default HeroSection;
