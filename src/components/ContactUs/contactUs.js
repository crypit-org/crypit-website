import React, { useState } from "react";
import "./contact.css";
import { IoMailOpenOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Input, Button } from "antd";
import emailjs from "@emailjs/browser";
import {
  NotificationManager,
} from "react-notifications";

const { TextArea } = Input;

function ContactUs(props) {
  const[firstName,SetFirstName]=useState("")
  const[lastName,SetLastName]=useState("")
  const[email,SetEmail]=useState("")
  const[phone,SetPhone]=useState("")
  const[desc,SetDesc]=useState("")

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
      // let response = await emailjs.send(
      //   process.env.REACT_APP_SERVICE_ID,
      //   process.env.REACT_APP_TEMPLATE_ID,
      //   templateParams,
      //   process.env.REACT_APP_PUBLIC_KEY
      // );
     
      NotificationManager.success(
        "Check you email for more details, we'll see you soon!",
        "Awesome"
      );
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
    <div className="contact-sec">
      <p className="contact-head">Get in touch</p>
      {/* <h1 className='contact-head'>Contact us</h1> */}

      <div className="cont-detail">
        <div className="contact-info-box">
          <div class="contact-wrapper">
            <IconContext.Provider
              value={{
                size: "4em",
                color: "black",
                //   style: { display:'block',margin:'auto'},
                className: "global-class-name",
              }}
            >
              <IoMailOpenOutline />
            </IconContext.Provider>
            <div className="content-mail">
              <h1 className="content-head">Email us</h1>
              <p>
                <a className="btn-contact link-btn" href="support@crypit.app">
                  support@crypit.app
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="about-contact">
          <h3 className="about-contact-note">We would love to hear from you</h3>
          <div className="names">
            <Input className="input-fields" placeholder="First name" type="text" required onChange={(e)=>SetFirstName(e.target.value)}/>
            <Input className="input-fields field2" placeholder="Last name" type="text" onChange={(e)=>SetLastName(e.target.value)}/>
          </div>
          <div className="names">
          <Input className="input-fields" placeholder="Email Address" type="email" required onChange={(e)=>SetEmail(e.target.value)}/>
          <Input className="input-fields field2" placeholder="Phone Number" type="number"  onChange={(e)=>SetPhone(e.target.value)}/>
          </div>
          <TextArea
            placeholder="You can tell us here!"
            showCount
            maxLength={100}
            style={{ height: 120 }} 
            onChange={(e)=>SetDesc(e.target.value)}
          />
          <Button type="primary" className="contact-btn" onClick={sendEmail}>
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
