import React from "react";
import "./navbar.css";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {HiOutlineChevronLeft} from "react-icons/hi"
import Logo from "../../assests/images/logo3.0.png"
import {Link} from "react-router-dom";


function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  let page = "";
  const getCurrentPage = () => {
    switch (window.location.pathname) {
      case "/":
        page = "/";
        break;
      case "/about":
        page = "about";
        break;
      case "/feature":
        page = "feature";
        break;
      case "/testimonial":
        page = "testimonial";
        break;
      case "/contact":
        page = "contact";
        break;
      default:
        page = undefined;
    }
  };

  return (
    <>
      <div>
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
               <img src={Logo} alt="logo-img" width={175}/>
                </div>
              </Link>

              <ul className={click ? "nav-menu active" : "nav-menu"}>
               
                <li className="nav-item">
                  <Link
                  to="/" spy={true} smooth={true}
                    exact            
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    
                Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    spy={true} smooth={true}
                    to="/feature"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                Feature
                  
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    exact
                    to="/about"
                    spy={true} smooth={true}
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    exact
                    to="/contact"
                    spy={true} smooth={true}
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                  Contact Us
                  </Link>
                </li>
              </ul>
        



            <div className="nav-icon" onClick={handleClick}>
              <IconContext.Provider
                value={{
                  size: "1em",
                  color: "black",
                  style: { marginRight: "10px" },
                  className: "global-class-name",
                }}
              >
                <div>{click ? <GrClose /> : <GiHamburgerMenu />}</div>
              </IconContext.Provider>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
    
        </nav>

   
      </div>
    </>
  );
}

export default Navbar;
