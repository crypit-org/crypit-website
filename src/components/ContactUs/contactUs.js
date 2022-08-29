import React from 'react';
import "./contact.css"
import {IoMailOpenOutline} from "react-icons/io5"
import { IconContext } from "react-icons";
import { Input , Button} from 'antd';

const { TextArea } = Input;

function ContactUs(props) {
    return (
        <div className='contact-sec'>
        <p className='contact-head'>Get in touch</p>
        {/* <h1 className='contact-head'>Contact us</h1> */}

        <div className='cont-detail'>
            <div className='contact-info-box'>
            <div class="contact-wrapper">
            <IconContext.Provider
                value={{
                  size: "4em",
                  color: "black",
                //   style: { display:'block',margin:'auto'},
                  className: "global-class-name",
                }}
              >
                <IoMailOpenOutline/>
              </IconContext.Provider>
                  <div className="content-mail">
                    <h1 className="content-head">Email us</h1>
                    <p><a className="btn-contact link-btn" href="support@crypit.app">support@crypit.app</a></p>
                  </div>
                </div>                
            </div>
            <div className='about-contact'>
                <h3 className='about-contact-note'>We would love to hear from you</h3>
<div className='names'>
<Input className='input-fields' placeholder="First name" />
<Input className='input-fields field2' placeholder="Second name" />
</div>
<Input className='input-fields' placeholder="Email Address" />
<Input className='input-fields' placeholder="How can i help you?" />
<TextArea placeholder="You can tell us here!" showCount maxLength={100} style={{ height: 120 }}  />
<Button type="primary" className='contact-btn'>Send Message</Button>
            </div>
        </div>

        </div>
    );
}

export default ContactUs;