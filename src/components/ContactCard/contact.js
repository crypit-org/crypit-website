import React,{useState} from "react";
import "./contact.css";
import Map from "../../assets/img-2.0/map.png";
import { Modal, Form, Input, Button } from "antd";
import emailjs from "@emailjs/browser";
import {
  NotificationManager,
} from "react-notifications";

function Contact(props) {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [desc, SetDesc] = useState("");

  const sendEmail = async () => {
    // User details goes here
    var templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile_no: phone,
      desc: desc,
    };
    try {
      if (
        firstName.trim() === "" ||
        email.trim() === "" ||
        desc.trim() === ""
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
    <div className="contact-section">
      <div className="contact-card">
        <div className="heading">Email Us</div>
        <div className="underline" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "25px 0px 15px",
          }}
        >
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
              />{" "}
            </Form.Item>
            <Form.Item className="form-style">
              <input
                className="input-email"
                placeholder="Last Name"
                type="text"
                onChange={(e) => SetLastName(e.target.value)}
              />{" "}
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
                required
                onChange={(e) => SetEmail(e.target.value)}
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
            <p className="textarea-text">You can tell us here!</p>
            <Form.Item
              name="intro"
              rules={[
                {
                  required: true,
                  message: "Don't forget to share your thoughts",
                },
              ]}
            >
              <textarea
                rows="4"
                cols="50"
                className="textarea-email"
                onChange={(e) => SetDesc(e.target.value)}
              ></textarea>
            </Form.Item>
            <div className="email-join-cta" onClick={sendEmail}>Send Message</div>
          </Form>
        </div>
      </div>
      <div className="address-card">
        <div className="heading">Address</div>
        <div className="underline" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "25px 0px 15px",
          }}
        >
          <div className="addr-text">
            Lorem Ipsum has been the industry's standard dummy when an unknown
          </div>
          <div className="phone-email">
            {/* <div>
        <div className='phone-head'>Phone</div>
    <div className='phone-number'>98444400011</div>
    </div> */}
            <div>
              <div className="phone-head">Email</div>
              <div className="phone-number">support@crypit.app</div>
            </div>
          </div>

          <div className="location">
            <div className="phone-number">Location Map</div>
            <img
              src={Map}
              alt="map"
              title="Office Location"
              className="location-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
