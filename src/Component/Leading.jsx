import React from "react";
import { FaArrowDown } from "react-icons/fa";
import "../Styles/main.css";

function Leading() {
    return ( 
        <section className="leading" id="leading">
            <div className="health-container">
                <div className="row">
                    <div className="image">
                        <img src="./leading-healthcare.png" alt="" />
                    </div>
                    <div className="leading-text">
                        <h1>Leading healthcare providers</h1>
                        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solution we provide.</p>
                        <button className="btn-outline">Learn more</button>
                    </div>
                </div>
            </div>

            <div className="mobile-container">
                <div className="row">
                    <div className="leading-text">
                        <h1>Download our mobile apps</h1>
                        <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely.</p>
                        <button className="btn-outline btn-flex"><span>Download</span> <FaArrowDown/> </button>
                    </div>
                    <div className="image">
                        <img src="./mobile-app.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Leading;