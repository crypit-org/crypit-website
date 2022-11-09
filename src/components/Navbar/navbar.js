import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./navbar.css"
function Navbar(props) {
    const navigate = useNavigate()

    const moveContactUs = ( ) => {
        navigate("/contact-us")
    }
    return (
        <div className='nav-comp'>
            <div className='logo-cont'>
                <div className='logo-name'>CrypIT</div>
            </div>
            <div className='routes'>
                <div className='route-name' >About Us</div>
                <div className='route-name' onClick={()=>window.open("http://crypit.blog")} >Blog</div>
                <div className='route-name' onClick={moveContactUs}>Contact Us</div>
                <div className='join-cta'>Join Early Access</div>
            </div>
        </div>
    );
}

export default Navbar;