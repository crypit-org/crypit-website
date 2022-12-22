import React from 'react';
import "./whycrypit.css"
import WhyCrypIT from "../../assets/img-2.0/why-crypit.png"
import Dot from "../../assets/img-2.0/logo-icon.png"

function WhyCrypit(props) {
    return (
        <div className='why-crypit'>
            <img src={WhyCrypIT} alt="why-crypit" title='Why CrypIT' className='why-crypit-img' />
            <div className='why-crypit-container'>
            <div className='heading'>Why CrypIT ?</div>
     <div className='underline'/>   
     <div className='container-data'>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  className='logo-head-why'/>         
            <p className='point-data'>Consolidated Portfolio View </p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  className='logo-head-why'/>     
            <p className='point-data'> Hassle free On-Ramp & Off-Ramp solutions</p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  className='logo-head-why'/>     
            <p className='point-data'>Earn passive income & Swap assets at ease </p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  className='logo-head-why'/>     
            <p className='point-data'>Learn, Build, Plan & Invest with the community </p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  className='logo-head-why'/>     
            <p className='point-data'>CrypIT Shorts to stay updated in the decentralized world </p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector" className='logo-head-why' />     
            <p className='point-data'>Instant UPI & QR fiat payments; Fast Bank Withdrawels</p>
        </div>
     </div>
            </div>
        </div>
    );
}

export default WhyCrypit;