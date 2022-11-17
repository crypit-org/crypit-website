import React from 'react';
import "./earlybird.css"

function EarlyBird(props) {
    return (
        <div className='early-bird-cont'>
                <div className='early-bird-head'>Be an Early Bird</div>
                <div className='form-early-access'>
        <input className='input-email' placeholder='First Name' type='text' />
        <input className='input-email' placeholder='Last Name'  type='text'/>
        <input className='input-email' placeholder='Email'  type='email'/>
        <input className='input-email' placeholder='Phone Number'  type='number'/>
        <div className='email-join-cta'>Join Early Access</div>
     
     </div>
        </div>
    );
}

export default EarlyBird;