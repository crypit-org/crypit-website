import React, { useState } from "react";
import "./earlybird.css";
import Block1 from "../../assets/img-2.0/block1.png";
import Block2 from "../../assets/img-2.0/block2.png";
import JustCrypit from "../../assets/img-2.0/Just Cryp IT.png";
import { Modal, Form, Input, Button } from "antd";
import emailjs from "@emailjs/browser";
import { NotificationManager } from "react-notifications";

function EarlyBird(props) {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");

  const sendEmail = async () => {
    // User details goes here
    var templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile_no: phone,
   
    };
    try {
      if (
        firstName.trim() === "" ||
        email.trim() === "" 
      ) {
        return;
      }
      let response = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );
      if (response.status === 200) {
        Modal.success({
          title: "Awesome",
          content: "Check you email for more details, we'll see you soon!",
        });
      }
    } catch (err) {
      NotificationManager.warning(
        "Unable to register, Please try again later!",
        "Warning",
        3000
      );
      console.error("Error on Get Early Access: EMAILJS.", err);
    }
  };
  return (
    <div className="early-bird-cont">
      <div className="early-bird-head">Be an Early Bird</div>
      <div className="form-early-access">
        <Form>
          <Form.Item
            className="form-style"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <input
              className="input-email"
              placeholder="First Name"
              type="text"
              required
              onChange={(e) => SetFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item className="form-style">
            <input
              className="input-email"
              placeholder="Last Name"
              type="text"
              onChange={(e) => SetLastName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            className="form-style"
            rules={[
              {
                required: true,
                message: "Please input your email address!",
              },
            ]}
          >
            <input
              className="input-email"
              placeholder="Email"
              type="email"
              onChange={(e) => SetEmail(e.target.value)}
              required
            />
          </Form.Item>
          <Form.Item className="form-style">
            <input
              className="input-email"
              placeholder="Phone Number"
              type="number"
              onChange={(e) => SetPhone(e.target.value)}
            />
          </Form.Item>
          <div className="email-join-cta" onClick={sendEmail}>
            Join Early Access
          </div>
        </Form>
        <img src={Block1} alt="" className="Block1" />
        <img src={Block2} alt="" className="Block2" />
        <img src={JustCrypit} alt="" className="JustCrypit" />
      </div>
    </div>
  );
}

export default EarlyBird;
