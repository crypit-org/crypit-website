import React from 'react';
import "./earlybird.css"
import Block1 from "../../assets/img-2.0/block1.png"
import Block2 from "../../assets/img-2.0/block2.png"
import JustCrypit from "../../assets/img-2.0/Just Cryp IT.png"

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
<img src={Block1} alt="" className='Block1' />
     <img src={Block2} alt="" className='Block2' />
     <img src={JustCrypit} alt="" className='JustCrypit' />
     
     </div>
        </div>
    );
}

export default EarlyBird;