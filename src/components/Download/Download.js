import React from 'react';
import "./download.css"
import MobileVector from "../../assests/img-2.0/mob-overview.svg"

function Download(props) {
    return (
        <div className='download-container'>
            <div className='back-50'>
            <div className='feature-sec-heading'>Download App</div>
     <div className='feature-sec-underline'/>
            </div>
            <img src={MobileVector} alt="mobile" className='mob1' />
            <img src={MobileVector} alt="mobile" className='mob2' />
            <img src={MobileVector} alt="mobile" className='mob3' />
            <div className='back-100'>
                <div className='download-sec'>
                    <div className='description-detail'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</div>
                <div className='join-cta'>Join Early Access</div>
                </div>
            </div>
        </div>
    );
}

export default Download;