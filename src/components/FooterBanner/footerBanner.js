import React from 'react';
import "./footerBanner.css"
import 'antd/dist/antd.css';
import { Button } from 'antd';
import Eth from "../../assests/images/bitcoin-banner.png"
import Exchange from "../../assests/images/blog2.png"
import Earn from "../../assests/images/earn.png"
import App from "../../assests/images/float-img.png"

function FooterBanner(props) {
    return (
        <div className='app-banner'>
            <h1 className='app-banner-heading'>Be an Early Bird</h1>
            <p className='app-banner-Desc'>Register below to be an early user and get Exciting Rewards.</p>
            <Button type="primary" className='footer-banner-btn'>Get Early Access</Button>
            <img className='floating-img1 floating' src={Eth} alt="eth"/>
            <img className='floating-img2 floating' src={Exchange} alt="eth"/>
            <img className='floating-img3 floating' src={Earn} alt="eth"/>
            <img className='floating-img4 floating' src={App} alt="eth"/>
        </div>
    );
}

export default FooterBanner;