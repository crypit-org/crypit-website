import React from 'react';
import "./whycrypit.css"
import WhyCrypIT from "../../assests/img-2.0/why-crypit.svg"
import Dot from "../../assests/img-2.0/dot.png"

function WhyCrypit(props) {
    return (
        <div className='why-crypit'>
            <img src={WhyCrypIT} alt="why-crypit" title='Why CrypIT' className='why-crypit-img' />
            <div className='why-crypit-container'>
            <div className='heading'>What is crypit ?</div>
     <div className='underline'/>   
     <div className='container-data'>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  />         
            <p className='point-data'>An unified app for your Digital Asset </p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  />     
            <p className='point-data'>An unified app for your Digital Asset </p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  />     
            <p className='point-data'>An unified app for your Digital Asset </p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  />     
            <p className='point-data'>An unified app for your Digital Asset </p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  />     
            <p className='point-data'>An unified app for your Digital Asset </p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={Dot} alt="vector"  />     
            <p className='point-data'>An unified app for your Digital Asset </p>
        </div>
     </div>
            </div>
        </div>
    );
}

export default WhyCrypit;