import React from "react";
import "../Styles/main.css";

function Service() {
    return ( 
        <section class="service" id="service">
        <div class="container">
            <h2 class="section-title">Our services</h2>
            <p class="service-detail">We provide to you the best choices for you. Adjust it to your health need and make sure you undergo treatment with our highl qualify doctors you can consult with us which type of service is suitable for your health.</p>
            <div class="row">
                <div class="card">
                    <img src="./search.png" alt=""/>
                    <div class="card-text">
                        <h3>Search doctor</h3>
                        <p>Choose your doctor from thousands of specialist, general and trusted hospitals</p>
                    </div>
                </div>
                <div class="card">
                    <img src="./pharmacy.png" alt=""/>
                    <div class="card-text">
                        <h3>Online pharmacy</h3>
                        <p>Buy your medicines with our mobile application with a simple delivery system</p>
                    </div>
                </div>
                <div class="card">
                    <img src="./consultation.png" alt=""/>
                    <div class="card-text">
                        <h3>Search doctor</h3>
                        <p>Choose your doctor from thousands of specialist, general and trusted hospitals</p>
                    </div>
                </div>
                <div class="card">
                    <img src="./details-info.png" alt=""/>
                    <div class="card-text">
                        <h3>Search doctor</h3>
                        <p>Choose your doctor from thousands of specialist, general and trusted hospitals</p>
                    </div>
                </div>
                <div class="card">
                    <img src="./emergency.png" alt=""/>
                    <div class="card-text">
                        <h3>Search doctor</h3>
                        <p>Choose your doctor from thousands of specialist, general and trusted hospitals</p>
                    </div>
                </div>
                <div class="card">
                    <img src="./tracking.png" alt=""/>
                    <div class="card-text">
                        <h3>Search doctor</h3>
                        <p>Choose your doctor from thousands of specialist, general and trusted hospitals</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Service;