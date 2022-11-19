import React from 'react';
import Accessbtn from '../JoinAccessBtn/JoinBtn';
import "./faq.css"

function Faq(props) {
    return (
        <div className='faq-section'>
            <div className='faq-heading'>You have questions, we have answers</div>
            {/* <div className='faq-join-cta'>Join Early Access</div> */}
         
            <Accessbtn/>
   
        </div>
    );
}

export default Faq;