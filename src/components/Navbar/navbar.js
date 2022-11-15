import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
function Navbar(props) {
  const navigate = useNavigate();

  const moveContactUs = () => {
    navigate("/contact-us");
  };
  const moveAboutUs = () => {
    navigate("/about-us");
  };
  const moveHome = () => {
    navigate("*");
  };


  
  let page = "";
  const getCurrentPage = () => {
    switch (window.location.pathname) {
      case "/":
        page = "";
        break;
      case "/about-us":
        page = "about-us";
        break;
      case "/contact-us":
        page = "contact-us";
        break;
    
      default:
        page = undefined;
    }
  };
  return (
    <>
        {getCurrentPage()}
    <div className="nav-comp">
      <div className="logo-cont">
        <div className="logo-name" onClick={moveHome}>
          CrypIT
        </div>
      </div>
      <div className="routes">
        <div className="route-name" onClick={moveHome}>
          Home
        </div>
        <div className="route-name" onClick={moveAboutUs}>
          About Us
        </div>
        <div
          className="route-name"
          onClick={() => window.open("http://crypit.blog")}
        >
          Blog
        </div>
        <div className="route-name" onClick={moveContactUs}>
          Contact Us
        </div>
        <div className="join-cta">Join Early Access</div>
      </div>
    </div>
    </> 
  );
}

export default Navbar;
