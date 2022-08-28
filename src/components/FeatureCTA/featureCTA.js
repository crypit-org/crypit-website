import React from 'react';
import { Link } from 'react-router-dom';
import Eth from "../../assests/images/bitcoin-banner.png"
import Exchange from "../../assests/images/blog2.png"
import "./featureCTA.css"

function FeatureCTA(props) {
    return (
        <div className='feature-cta'>
        <h1 className='cta-head'>Not sure where to start?</h1>
        <p className='cta-para'>Our support team will answer all your questions so you feel safe on your journey</p>
        <div className='cta-links'>
            <Link to="/contact">
            <div className='lets-contact'>
                <h2>Let's Connect</h2>
                <p>Connect with our support team</p>
                <img className='floating-img1 floating' src={Eth} alt="eth"/>
               <h3>Chat &rarr;</h3>
            </div>
            </Link>
            <div className='faq-notion'>
            <h2>FAQ</h2>
                <p>Here you'll find everything about the product</p>
                <img className='floating-img2 floating' src={Exchange} alt="eth"/>
               <h3>Explore FAQs &rarr;</h3>
            </div>
        </div>
    </div>
    );
}

export default FeatureCTA;