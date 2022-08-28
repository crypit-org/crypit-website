import React from 'react';
import "./roadmap.css"

function Roadmap(props) {
    return (
        <div className='roadmap-section'>
     

<div id="line">
        <div class="branch flip">
            <img src="https://thehelpfultipper.github.io/dynamic_timeline/timeline-icons/1971.png" alt=""/>
            <div class="content left">
                <p class="year">0.1.0</p>
                <p class="text">
                    <ul className='roadmap-list'>
                        <li>Beta Launch</li>
                        <li>Android mobile app</li>
                        <li>Wallet integrate / import</li>
                        <li>Crypto transfer to wallet / self / contacts</li>
                        <li>Manage all your portfolio</li>
                    </ul>
                </p>
            </div>
        </div>
        <div class="branch mirror-down turn">
          <img src="https://thehelpfultipper.github.io/dynamic_timeline/timeline-icons/1988.png" alt=""/>
            <div class="content right">
              <p class="year">0.1.5</p>
              <p class="text">
              <ul className='roadmap-list'>
                        <li>Chat with fellow users</li>
                        <li>Request crypto, create custom url for payments</li>
                        <li>Referral rewards</li>  
                         </ul>    
                </p>
            </div>
          
        </div>
        <div class="branch flip">
          <img src="https://thehelpfultipper.github.io/dynamic_timeline/timeline-icons/1991.png" alt=""/>
             <div class="content left">
                 <p class="year">0.2.0</p>
                 <p class="text">
                 <ul className='roadmap-list'>
                        <li>Android &amp; IOS app release</li>
                        <li>CrypIT token release</li>
                        <li>Join Bonus &amp; Rewards</li>
                        <li>Buy Crypto using fiat currency</li>
                        <li>create new account</li>
                    </ul> </p>
             </div>
         </div>
        <div class="branch mirror-down turn">
          <img src="https://thehelpfultipper.github.io/dynamic_timeline/timeline-icons/1999.png" alt=""/>
            <div class="content right">
                <p class="year">0.2.5</p>
                <p class="text">
                <ul className='roadmap-list'>
                        <li>User Flow improvements</li>
                        <li>More wallets and exchange integration</li>
                        <li>Exciting Rewards &amp; offers </li>
                          </ul></p>
                
            </div>
        </div>
        <div class="branch flip">
          <img src="https://thehelpfultipper.github.io/dynamic_timeline/timeline-icons/2001.png" alt=""/>
            <div class="content left">
                <p class="year">0.3.0</p>
                <p class="text">
                 
                <ul className='roadmap-list'>
                        <li>Crypto to Fiat payments</li>
                        <li>Crypto to fiat bank withdrawals</li>
                        <li>UPI &amp; Contact Fiat transfers</li>
                    </ul></p>
            </div>
        </div>
         <div class="branch mirror-down turn">
           <img src="https://thehelpfultipper.github.io/dynamic_timeline/timeline-icons/2006.png" alt=""/>
             <div class="content right">
                  <p class="year">0.3.5</p>        
                <p class="text">
                  <ul className='roadmap-list'>
                        <li>Improved Fiat payments</li>
                        <li>Fiat QR code payments </li>
                    </ul>
             </p>
                 
             </div>
         </div>
        <div class="branch flip">
              <img src="https://thehelpfultipper.github.io/dynamic_timeline/timeline-icons/2008.png" alt=""/>
            <div class="content left">
                <p class="year">0.4.0</p>
                <p class="text">
                <ul className='roadmap-list'>
                        <li>Earn with your HODLings</li>
                        <li>No lock-in period</li>
                        <li>Create gift cards &amp; coupons using Crypto</li>
                    </ul> </p>
            </div>
        </div>
        <div class="branch mirror-down turn">
           <img src="https://thehelpfultipper.github.io/dynamic_timeline/timeline-icons/2006.png" alt=""/>
             <div class="content right">
                  <p class="year">0.4.5</p>                 
                  <p class="text">We're cooking more for you....</p>
                 
             </div>
         </div>

     
    </div>

        </div>
    );
}

export default Roadmap;