import React from "react";
import "../Styles/main.css";

function Hero() {
    return ( 
        <div className="hero" id="hero">
        <div className="hero-box">
            <div className="hero-text">
                <h1>Virtual healthcare for you</h1>
                <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.</p>
                <button className="btn">Consult today</button>
            </div>
            <div className="image">
            <img src="./banner.png" alt=""/>
            </div>
        </div>
    </div>
     );
}

export default Hero;