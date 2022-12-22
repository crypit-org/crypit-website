import React from "react";
import "./crypit.css";
import PhoneImg from "../../assets/img-2.0/WhatisCrypIt.png";

function WhatisCrypit(props) {
  return (
    <div className="what-crypit-comp">
      <div style={{ paddingTop: 106 }}>
        <div className="heading">What is CrypIT ?</div>
        <div className="underline" />
        <p className="paragraph">
          CrypIT is an unified crypto super app built to make the web3 journey
          of everyday people safe, simple and hassle free. CrypIT aims to bridge
          the gap between traditional fiat and crypto currency.
        </p>
      </div>
      <img src={PhoneImg} alt="What is crypit?" className="crypit-phone" />
    </div>
  );
}

export default WhatisCrypit;
