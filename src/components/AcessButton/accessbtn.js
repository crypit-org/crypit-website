import React, { useState } from "react";
import "./accessbtn.css"
import "antd/dist/antd.css";
import { Button, Input, Modal } from "antd";
import emailjs from '@emailjs/browser';
import Rocket from "../../assests/images/rocket.png";

function Accessbtn({title}) {
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
        <div>
            <Button type="primary" className="join-early" onClick={() => { showModal() }}>
         {title}
             </Button>
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
        </div>
    );
}

export default Accessbtn;