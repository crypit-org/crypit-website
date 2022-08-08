import React from 'react';
import "./team.css"
import { IconContext } from "react-icons";
import Profile1 from "../../assests/images/alwyn.png"
import Profile2 from "../../assests/images/muthu.png"
import Profile3 from "../../assests/images/vaishu.png"


function TeamMember(props) {
    return (
        <div>
   <div className="team">
   <div className="member">
            <div className="card mb-3" style={{width: "22rem"}}>
                <img className="card-img-top"src={Profile1}   alt="Card  cap"/>
                <div className="product-detail">
                    <h4 className="card-title heading text-center">Allwyn Leo</h4>
                    <span className="subheading">Founding Team</span>
                    <blockquote>
                        <p>Industry and Business Expert with 12 years of experience in multiple domains, majorly on Banking and Finance. Worked on top banking core system and finance products in different countries. A person, who nurtures the business to the next level by thinking proactively about the market.</p>
                    </blockquote>
                    <IconContext.Provider value={{ color: "greenyellow", className: "global-class-name",size:"22px" }} >
            <div className='socials' style={{padding:"6px 0", display:"block",margin:"1px auto" ,cursor:"pointer"}}>
              {/* <FaLinkedinIn/> */}
            </div>
            </IconContext.Provider>
                   </div>
            </div>
        </div>
        <div className="member">
            <div className="card mb-3" style={{width: "22rem"}}>
                <img className="card-img-top" src={Profile2} alt="Card cap"/>
                <div className="product-detail">
                    <h4 className="card-title heading text-center">Muthu Thavamani</h4>
                    <span className="subheading">Founding Team</span>
                    <blockquote>
                   <p>A passionate Engineer with 7 years of experience, worked with various startups from their 0 to 1 journey.. He is a Polyglot Engineer, Tech Architect, Lead Blockchain Engineer with strong experience in Go, Solidity, Cosmos, Polygon., Always loves to learn and find better solutions.</p>
                    </blockquote>
                 
                    <IconContext.Provider value={{ color: "greenyellow", className: "global-class-name",size:"22px" }} >
            <div className='socials' style={{padding:"6px 0", display:"block",margin:"1px auto" ,cursor:"pointer"}}>
              {/* <FaLinkedinIn/> */}
            </div>
            </IconContext.Provider>
                   </div>
            </div>
        </div>
        
        <div className="member">
                <div className="card mb-3" style={{width: "22rem"}}>
                        <img className="card-img-top" src={Profile3}   alt="Card cap"/>
                        <div className="product-detail">
                            <h4 className="card-title heading text-center">Vaishnavi</h4>
                            <span className="subheading">Founding Team</span>
                            <blockquote>
                                <p>Enthusiast Full-stack web3 Engineer with 2 years of experience. Strong in web3 Frontend and backend. She is an avid leaner and hustler whether the things are in Tech or Blogging.</p>
                            </blockquote>
                            <IconContext.Provider value={{ color: "greenyellow", className: "global-class-name",size:"22px" }} >
            <div className='socials' style={{padding:"6px 0", display:"block",margin:"1px auto" ,cursor:"pointer"}}>
              {/* <FaLinkedinIn/> */}
            </div>
            </IconContext.Provider>
                            
                           </div>
                    </div>
        </div>
       
    </div>

        </div>
    );
}

export default TeamMember;