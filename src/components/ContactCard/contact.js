import React from 'react';
import "./contact.css"
import Map from "../../assests/img-2.0/map.png"

function Contact(props) {
    return (
        <div className='contact-section'>
            <div className='contact-card'>
            <div className='heading'>Email Us</div>
     <div className='underline'/>
     <div style={{display:'flex',flexDirection:'column' ,margin:"25px 0px 15px"}}>
        <input className='input-email' placeholder='First Name' type='text' />
        <input className='input-email' placeholder='Last Name'  type='text'/>
        <input className='input-email' placeholder='Email'  type='email'/>
        <input className='input-email' placeholder='Phone Number'  type='number'/>
        <p className='textarea-text'>You can tell us here!</p>
        <textarea rows="4" cols="50" className='textarea-email'></textarea>
        <div className='email-join-cta'>Send Message</div>
     
     </div>
            </div>
            <div className='address-card'>
            <div className='heading'>Address</div>
     <div className='underline'/>
     <div style={{display:'flex',flexDirection:'column' ,margin:"25px 0px 15px"}}>
<div className='addr-text'>Lorem Ipsum has
been the industry's
standard dummy
when an unknown</div>
<div className='phone-email'>
    <div><div className='phone-head'>Phone</div>
    <div className='phone-number'>98444400011</div></div>
    <div><div className='phone-head'>Email</div>
    <div className='phone-number'>support@crypit.app</div></div>

</div>

<div className='location'>
<div className='phone-number'>Location Map</div>
<img src={Map} alt="map" title='Office Location' className='location-img'/>
</div>
    </div>
            </div>
        </div>
    );
}

export default Contact;