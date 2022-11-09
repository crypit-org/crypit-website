import React from 'react';
import "./crypit.css"
import PhoneImg from "../../assests/img-2.0/What is CrypIT.png"

function WhatisCrypit(props) {
    return (
        <div className='what-crypit-comp'> 
          <div >
     <div className='heading'>What is crypit ?</div>
     <div className='underline'/>
     <p className='paragraph'>
     CrypIT is an unified app built to make the users digital currency journey safe, simple and hassle free. It reduces the gap between traditional fiat and decentralised crypto currecncy.
      </p>
          </div>
          <img src={PhoneImg} alt="What is crypit?" className='crypit-phone'/>
        </div>
    );
}

export default WhatisCrypit;