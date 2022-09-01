import React from 'react';
import "./connect.css"
import WPIcon from "../../assests/images/whatsapp.png"
import Twitter from "../../assests/images/twitter.png"
import LinkedIn from "../../assests/images/linkedin.png"
import Insta from "../../assests/images/insta.png"
import Information from "../../assests/images/information.png"
import { Link } from 'react-router-dom';



function Connect(props) {
    return (
        <div className='connect-sec'>
  <h1 className='connect-head2'>Let's Connect</h1>
  <div className='connect-box'>
    <Link to="/contact">
            <div className='connect-info-box'>
            <div class="connect-wrapper">           
                <img src={Twitter} alt="xyz" style={{margin:"15px auto",width:"90px"}} />        
                  <div className="connect-content">
                    <h1 className="connect-head">Twitter</h1>
                    <p className="btn-connect ">@crypit</p>
                  </div>
                </div>                
            </div>
            </Link>
            <Link to="/contact">
            <div className='connect-info-box'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",width:"90px"}} src={LinkedIn} alt="xyz"/>        
                  <div className="connect-content">
                    <h1 className="connect-head">LinkedIn</h1>
                    <p className="btn-connect ">@crypit</p>
                  </div>
                </div>                
            </div>
            </Link>
            <Link to="/contact">
            <div className='connect-info-box'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",width:"90px"}} src={Insta} alt="xyz"/>     
                  <div className="connect-content">
                    <h1 className="connect-head">Instagram</h1>
                    <p className="btn-connect ">@crypit</p>
                  </div>
                </div>                
            </div>
            </Link>
            <Link to="/contact">
            <div className='connect-info-box'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",width:"90px"}} src={WPIcon} alt="xyz"/>       
                  <div className="connect-content">
                    <h1 className="connect-head">Whatsapp</h1>
                    <p className="btn-connect ">(+91) 9876543210</p>
                  </div>
                </div>                
            </div>
            </Link>
            <Link to="/contact">
                      <div className='connect-info-box2'>
            <div class="connect-wrapper">           
            <img style={{margin:"15px auto",}} src={Information} alt="xyz" width={90}/>    
                  <div className="connect-content">
                    <h1 className="connect-head">Frequently asked questions &rarr;</h1>
                    <p className="btn-connect ">Here you'll find everything about our CrypIT.</p>
                  </div>
                </div>                
            </div>
            </Link>
            </div>
        </div>
    );
}

export default Connect;