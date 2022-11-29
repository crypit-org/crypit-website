import React from "react";
import "./navbar.css";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {HiOutlineChevronLeft} from "react-icons/hi"
import {Link,useNavigate} from "react-router-dom";
import Accessbtn from "../JoinAccessBtn/JoinBtn";
import Logo from "../../assets/img-2.0/Logo-white.png"


function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const navigate = useNavigate();

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
      <div className="nav-sticky-cont">
        {getCurrentPage()}
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar-nav" onClick={(e) => e.stopPropagation()}>
       
            
              <Link exact to="*" className="nav-logo">
                <div className="backndlogo">
                  {page === "staking-farm" ? <>
                  <Link to="/">
                   <IconContext.Provider
                    value={{
                      size: "1.2em",
                      color: "white",
                      style: { marginRight: "10px", marginBottom: "5px" },
                      className: "global-class-name",
                    }}
                  >
                    <div>
                      <HiOutlineChevronLeft />
                    </div>
                  </IconContext.Provider>
                  </Link>
                  </>
                  :""}
                  {/* <div className="title-logo">CrypIT</div> */}
               <img src={Logo} alt="logo-img" className="logo-img"/>
                </div>
              </Link>

              <ul className={click ? "nav-menu active" : "nav-menu"}>
               
                <li className="nav-item">
                    <Link
                    to="/" spy={true} smooth={true}
                      exact            
                      activeClassName="active"
                      className={page===""?"text-highlight":"nav-links"}
                      onClick={click ? handleClick : null}
                    >
                    
                Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    
                    to="/about-us"
                    spy={true} smooth={true}
                    activeClassName="active"
                    className={page==="about-us"?"text-highlight":"nav-links"}
                    onClick={click ? handleClick : null}
                  >
                    About Us
                  </Link>
                </li>

                {/* <li className="nav-links " onClick={()=>window.open("http://crypit.blog")}>
             

                 Blog
                
                  
                </li>  */}

                <li className="nav-item">
                  <Link
                    to="/contact-us"
                    spy={true} smooth={true}
                    activeClassName="active"
                    className={page==="contact-us"?"text-highlight":"nav-links"}
                    onClick={click ? handleClick : null}
                  >
                  Contact Us
                  </Link>
                </li>
                {/* <div className="join-cta">Join Early Access</div> */}
                <div className="jea-btn">
                <Accessbtn/></div>
              </ul>
        


            <div className="mob-view-cta" >
              <div className="mob-join-cta">
              <Accessbtn/></div>
            <div className="nav-icon" onClick={handleClick}>
            
              <IconContext.Provider
                value={{
                  size: "1em",
                  color: "#fff",
                  style: { marginRight: "10px" },
                  className: "global-class-name",
                }}
              >
                <div>{click ? <GrClose /> : <GiHamburgerMenu />}</div>
              </IconContext.Provider>
              {/* <i className={click ? "fa fa-times" : "fa fa-bars"}></i> */}
            </div>
            </div>
        </nav>

   
      </div>
    </>
  );
}

export default Navbar;