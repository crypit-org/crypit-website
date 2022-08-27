import React from "react";
import "./testimonial.css";
import Avatar1 from "../../assests/images/avatar1.jpg";
import Avatar2 from "../../assests/images/avatar2.jpg";
import Avatar3 from "../../assests/images/avatar3.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fade from 'react-reveal/Fade';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Testimonial(props) {
  return (
    <div className="testimonial-section" >
      <h1 className="test-head">Testimonials</h1>

      <Carousel showDots={true} responsive={responsive} >
      <Fade cascade>
        <div className="test-box">
        <p className="box-detail-head">"Save a lot of time."</p>
          <p className="box-detail">
          “You made it so simple. I can transfer crypto is so much faster , easier and trust-worthy way."
          </p>
          <p className='stars'>⭐⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar1} alt="aave" />
            <p className="founder">
            Arpit Shukla <br />
            @aRpee
            </p>
          </div>
        </div>
        </Fade>
       <Fade cascade>
        <div className="test-box">
        <p className="box-detail-head">"Flexible to use."</p>
          <p className="box-detail">
          “I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you."

          </p>
          <p className='stars'>⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar2} alt="aave" />
            <p className="founder">
              Sakshi Gupta <br />
              @sakshi
            </p>
          </div>
        </div>
        </Fade>
        <Fade cascade>
        <div className="test-box">
        <p className="box-detail-head">"Super easy transaction"</p>
          <p className="box-detail">
          "I feel very comfortable using the app as it is like any other payments app but just for crypto. It is really smooth and navigable."
          </p>
          <p className='stars'>⭐⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar3} alt="aave" />
            <p className="founder">
              Arpit Agarwal <br />
             @arpit30
            </p>
          </div>
        </div>
        </Fade>
        <Fade cascade>
        <div className="test-box">
          <p className="box-detail-head">"Easy to use."</p>
          <p className="box-detail">
          “You made it so simple. I can transfer crypto is so much faster , easier and trust-worthy way."
          </p>
          <p className='stars'>⭐⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar1} alt="aave" />
            <p className="founder">
             Hrithik <br />
              @hrikithi
            </p>
          </div>
        </div>
        </Fade>
      </Carousel>
    </div>
  );
}

export default Testimonial;

