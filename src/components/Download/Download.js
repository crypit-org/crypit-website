import React from 'react';
import "./download.css"
import MobileVector from "../../assets/img-2.0/mob-overview.svg"
import Accessbtn from '../JoinAccessBtn/JoinBtn';

function Download(props) {
    return (
        <div className='download-container'>
                {/* <div className='back-50'>
                <div className='feature-sec-heading'>Download App</div>
        <div className='feature-sec-underline'/>
                </div>
                <img src={MobileVector} alt="mobile" className='mob1' />
                <img src={MobileVector} alt="mobile" className='mob2' />
                <img src={MobileVector} alt="mobile" className='mob3' /> */}
            <div className='back-100'>
                <div className='dwl-app-title'>
                 <div className='dwl-app-feature-sec-heading'>Download App</div>
     <div className='underline'/>
     </div>
                <div className='download-sec'>
                    <div className='description-detail'>
                    Download the app today to experience the world of crypto at your fingertips!
                        </div>
                {/* <div className='join-cta'>Join Early Access</div> */}

                <Accessbtn/>
                </div>
            </div>
        </div>
    );
}

export default Download;