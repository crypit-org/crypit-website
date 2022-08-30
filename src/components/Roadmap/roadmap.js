import React from 'react';
import "./roadmap.css"
import Img1 from "../../assests/images/0.1.png"
import Img2 from "../../assests/images/1.5.png"
import Img3 from "../../assests/images/0.2.png"
import Img4 from "../../assests/images/2.5.png"
import Img5 from "../../assests/images/0.3.png"
import Img6 from "../../assests/images/3.5.png"
import Img7 from "../../assests/images/4.0.png"

function Roadmap(props) {
    return (
        <div className='roadmap-section'>
     

<div id="line">
        <div class="branch flip">
            <img src={Img1} alt="" width={200}/>
            <div class="content left">
                <p class="year">0.1.0</p>
                <p class="text">
                    <ul className='roadmap-list'>
                        <li>Beta Launch</li>
                        <li>Wallet integrate</li>
                        <li>Crypto transfer </li>
                    </ul>
                </p>
            </div>
        </div>
        <div class="branch mirror-down turn">
        <img src={Img4} alt="" width={200}/>
            <div class="content right">
              <p class="year">0.1.5</p>
              <p class="text">
              <ul className='roadmap-list'>
                        <li>Request for payments</li>
                        <li>Referral rewards</li>  
                         </ul>    
                </p>
            </div>
          
        </div>
        <div class="branch flip">
        <img src={Img3} alt="" width={200}/>
             <div class="content left">
                 <p class="year">0.2.0</p>
                 <p class="text">
                 <ul className='roadmap-list'>
                        <li>CrypIT token release</li>
                        <li>Join Bonus &amp; Rewards</li>
                        <li>On-ramp using Fiat</li>
                    </ul> </p>
             </div>
         </div>
        <div class="branch mirror-down turn">
        <img src={Img5} alt="" width={200}/>
            <div class="content right">
                <p class="year">0.2.5</p>
                <p class="text">
                <ul className='roadmap-list'>
                        <li>Exchange integration</li>
                        <li>Exciting Rewards &amp; offers </li>
                          </ul></p>
                
            </div>
        </div>
        <div class="branch flip">
        <img src={Img5} alt="" width={180}/>
            <div class="content left">
                <p class="year">0.3.0</p>
                <p class="text">
                 
                <ul className='roadmap-list'>
                        <li>Crypto to Fiat payments</li>
                        <li>UPI &amp; Mobile Fiat transfers</li>
                    </ul></p>
            </div>
        </div>
         <div class="branch mirror-down turn">
         <img src={Img7} alt="" width={210}/>
             <div class="content right">
                  <p class="year">0.3.5</p>        
                <p class="text">
                  <ul className='roadmap-list'>
                        <li>Improved User flow</li>
                        <li>Fiat QR code payments </li>
                    </ul>
             </p>
                 
             </div>
         </div>
        <div class="branch flip">
        <img src={Img6} alt="" width={180} height={190}/>
            <div class="content left">
                <p class="year">0.4.0</p>
                <p class="text">
                <ul className='roadmap-list'>
                        <li>Earn with your HODLings</li>
                    </ul> </p>
            </div>
        </div>
        <div class="branch mirror-down turn">
        <img src={Img2} alt="" width={200}/>
             <div class="content right">
                  <p class="year">0.4.5</p>                 
                  <p class="text">
                    <li>We're cooking more for you...</li></p>
                 
             </div>
         </div>

     
    </div>

        </div>
    );
}

export default Roadmap;