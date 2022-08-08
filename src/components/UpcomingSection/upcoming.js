import React from 'react';
import "./upcoming.css"
import TeamMate1 from "../../assests/images/team-mate1.png"
import TeamMate2 from "../../assests/images/team-mate2.png"
import TeamMate3 from "../../assests/images/team-mate3.png"

function Upcoming(props) {
    return (
        <div className='upcoming-section'>
            <div className='up-head'>Our Team</div>
          
<div class="container">
  <div class="card">
    <img src={TeamMate1} alt="Team Mate1"/>
    <h2 >Team Mate1</h2>
    <div class="content">
     
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

    </div>
  </div>
  
  <div class="card">
    <img src={TeamMate2} alt="Team Mate2"/>
    <h2>Team Mate2</h2>
    <div class="content">
     
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

    </div>
  </div>
  
  <div class="card">
    <img src={TeamMate3} alt="Team Mate3"/>
    <h2>Team Mate3</h2>
    <div class="content">
     
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

    </div>
  </div>
</div>

        {/* 3 -> avatar, name, position, hover = exp& details */}
{/* fipto , crypit */}
        
        </div>
    );
}

export default Upcoming;