import React from "react";
import "../Styles/main.css";


function Footer() {
    return ( 
        <footer>
            <div className="footer-box f-width">
                <a href="/#" className="logo"><span>T</span>Trafalgar</a>
                <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.</p>
                <p className="copyright">&copy;Trafalgar PYT LTD 2023. All right reserved</p>
            </div>
            <div className="footer-box">
                <h2>Company</h2>
                <a href="/" className="a-link">About</a>
                <a href="/" className="a-link">Testimonials</a>
                <a href="/" className="a-link">Find a doctor</a>
                <a href="/" className="a-link">App</a>
            </div>
            <div className="footer-box">
                <h2>Region</h2>
                <a href="/" className="a-link">Nigeria</a>
                <a href="/" className="a-link">Canada</a>
                <a href="/" className="a-link">USA</a>
                <a href="/" className="a-link">Hongkong</a>
            </div>
            <div className="footer-box">
                <h2>Help</h2>
                <a href="/" className="a-link">Help center</a>
                <a href="/" className="a-link">Contact support</a>
                <a href="/" className="a-link">Instructions</a>
                <a href="/" className="a-link">How it works</a>
            </div>
        </footer>
     );
}

export default Footer;