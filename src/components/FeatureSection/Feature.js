import React from 'react';
import "./feature.css"
import PhoneImg from "../../assets/img-2.0/What is CrypIT.png"
import JustCrypit from "../../assets/img-2.0/just-crypit.svg"

function Feature(props) {
    return (

        <div className='feature-Section'>
            <div className='feature-sec-heading'>Features</div>
     <div className='feature-sec-underline'/>
     <div className='Feature1'>
        <div className='feature1-details'>
            <div className='feature1-heading'>
            Not just another Wallet, It's  <span style={{color:'#FBE043'}}>Super Wallet!</span>
</div>
                
            <div className='feature1-desc'>
            View and manage all your existing crypto accounts through ONE app. View Portfolio, Profit / Loss info & track all transactions. Earn secure yields on your HODLings. Swap assets without any hassle.
                </div>
        </div>
        <img src={PhoneImg} alt=" " title='Feature 1' className='feature-img'/>
     </div>

     <div className='Feature1'>
     <img src={PhoneImg} alt=" " title='Feature 1' className='feature-img'/>

        <div className='feature2-details'>
            <div className='feature2-heading'>
            Stay Updated, Learn and Invest and  <span style={{color:'#FBE043'}}>become an Expert!</span></div>
            <div className='feature2-desc'>CrypIT makes your Crypto management and Crypto &#60; &#62;  Fiat transfers easy, flexible & more secured. CrypIT makes your Crypto management.</div>
        </div>
     </div>


     <div className='Feature1'>
        <div className='feature1-details'>
            <div className='feature1-heading'>
            <span style={{color:'#FBE043'}}>    Crypto &#60; &#62; Fiat </span>transactions - It's easy-peasy!</div>

            <div className='feature1-desc'>CrypIT makes your Crypto management and Crypto &#60; &#62;  Fiat transfers easy, flexible & more secured. CrypIT makes your Crypto management.</div>
        </div>
        <img src={PhoneImg} alt=" " title='Feature 1' className='feature-img'/>
     </div>



     <img src={JustCrypit} alt="just-crypit" title='Just CrypIT' className='crypit-just' />
        </div>
    );
}

export default Feature;