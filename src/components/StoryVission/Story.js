import React from "react";
import StoryImg from "../../assets/img-2.0/story-img.png";
import "./story.css";
import Vision1 from "../../assets/img-2.0/vision1.png";
import Vision2 from "../../assets/img-2.0/vision2.png";
import Vision3 from "../../assets/img-2.0/vision3.png";
import Vision4 from "../../assets/img-2.0/vision4.png";

function Story(props) {
  return (
    <div className="story-sec-cont">
      <div className="story-sec">
        <img src={StoryImg} alt="" className="storyImg" />
        <div className="story-Cont">
          <div className="story-cont-title">Our Story</div>
          <div className="feature-sec-underline" />
          <div className="story-cont-desc">
            Crypto in not just a investment and HODLable asset, it's a secured,
            de-centralised currency made for transparent and hassle free
            transactions. However, it's not user friendly due to highly volatile
            market, multiple chains & hard to remember wallet addresses, time
            consuming crypto to fiat withdrawals. To avoid all these hurdles and
            to put this digital currency into real use we started this journey.
          </div>
        </div>
      </div>
      <div className="vision-mission-cont">
        <div className="vm-img">
          <div style={{ display: "flex" }}>
            <img src={Vision1} alt="" className="vm-img1" />
            <img src={Vision2} alt="" className="vm-img2" />
          </div>
          <div style={{ display: "flex" }}>
            <img src={Vision3} alt="" className="vm-img3" />
            <img src={Vision4} alt="" className="vm-img4" />
          </div>
        </div>
        <div className="vision-mission-details">
          <div className="story-Cont">
            <div className="story-cont-title">Our Vision</div>
            <div className="feature-sec-underline" />
            <div className="story-sub-topic">
              Simple, User friendly app to manage crypto porfolio and transfers.
            </div>
            <div className="story-cont-desc">
              The core belief is that removing the barrier between crypto and
              fiat and vice-versa transactions, will put the digital asset into
              real world use and get more user adoption thus business adaption.
              We not only aim to simplify this transactions but also change the
              narrative around digital currency by helping user to Learn and
              share their knowledge with the community.
            </div>
          </div>
          <div className="story-Cont" style={{ marginTop: 126 }}>
            <div className="story-cont-title">Our Mission</div>
            <div className="feature-sec-underline" />
            <div className="story-sub-topic">
              Give an unified app for the digital asset world.
            </div>
            <div className="story-cont-desc">
              At CrypIT we re on a mission to make sure crypto management and
              transfers as simple as Fiat currency. We revolutionize the crypto
              world by making an unified app where they can manage, learn, earn
              and spend in simple and flexible manner.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
