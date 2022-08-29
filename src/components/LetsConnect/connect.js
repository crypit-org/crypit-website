import React from 'react';
import "./connect.css"
import {IoMailOpenOutline} from "react-icons/io5"
import WPIcon from "../../assests/images/whatsapp.png"
import Twitter from "../../assests/images/twitter.png"
import LinkedIn from "../../assests/images/linkedin.png"
import Insta from "../../assests/images/insta.png"
import Information from "../../assests/images/information.png"


function Connect(props) {
    return (
        <div className='connect-sec'>
  <h1 className='connect-head2'>Let's Connect</h1>
  <div className='connect-box'>
            <div className='connect-info-box'>
            <div class="connect-wrapper">           
                <img src={Twitter} alt="xyz" style={{margin:"15px auto",width:"90px"}} />        
                  <div className="connect-content">
                    <h1 className="connect-head">Twitter</h1>
                    <p className="btn-connect ">support@crypit.app</p>
                  </div>
                </div>                
            </div>
            <div className='connect-info-box'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",width:"90px"}} src={LinkedIn} alt="xyz"/>        
                  <div className="connect-content">
                    <h1 className="connect-head">LinkedIn</h1>
                    <p className="btn-connect ">support@crypit.app</p>
                  </div>
                </div>                
            </div>
            <div className='connect-info-box'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",width:"90px"}} src={Insta} alt="xyz"/>     
                  <div className="connect-content">
                    <h1 className="connect-head">Instagram</h1>
                    <p className="btn-connect ">support@crypit.app</p>
                  </div>
                </div>                
            </div>
            {/* <div className='connect-info-box'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",}} src="https://static.wixstatic.com/media/ebbcfc_7170cb811d30489a945579e58e93bcdb~mv2.png/v1/fill/w_66,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebbcfc_7170cb811d30489a945579e58e93bcdb~mv2.png" alt="xyz"/>        
                  <div className="connect-content">
                    <h1 className="connect-head">Medium</h1>
                    <p className="btn-connect ">support@crypit.app</p>
                  </div>
                </div>                
            </div> */}
            <div className='connect-info-box'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",width:"90px"}} src={WPIcon} alt="xyz"/>       
                  <div className="connect-content">
                    <h1 className="connect-head">Whatsapp</h1>
                    <p className="btn-connect ">support@crypit.app</p>
                  </div>
                </div>                
            </div>
            {/* <div className='connect-info-box'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",}} src="https://static.wixstatic.com/media/ebbcfc_7170cb811d30489a945579e58e93bcdb~mv2.png/v1/fill/w_66,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebbcfc_7170cb811d30489a945579e58e93bcdb~mv2.png" alt="xyz"/>        
                  <div className="connect-content">
                    <h1 className="connect-head">Email us</h1>
                    <p className="btn-connect ">support@crypit.app</p>
                  </div>
                </div>                
            </div> */}
            <div className='connect-info-box2'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",}} src={Information} alt="xyz" width={90}/>    
                  <div className="connect-content">
                    <h1 className="connect-head">Frequently asked questions &rarr;</h1>
                    <p className="btn-connect ">sdkqhebfabv adnbvzhjfbvahfdb andm wrbfvwrhbwbn agebbn</p>
                  </div>
                </div>                
            </div>
            </div>
        </div>
    );
}

export default Connect;