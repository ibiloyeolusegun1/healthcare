import React from "react";
import { FaArrowRight } from "react-icons/fa";
import '../Styles/main.css';


function Article() {
    return ( 
        <section className="blog" id="blog">
            <div className="container">
                <h2 class="section-title">Check out our latest article</h2> 
                <div className="row">
                    <div className="blog-card">
                        <div className="image">
                            <img src="./herbal-med.png" alt="" />
                        </div>
                        <div className="blog-details">
                            <h2>Herbal medicine that are safe for comsumption</h2>
                            <p>Herbal is widely used at this time because of it's very goood for your health...</p>
                            <a href="/"><span>Read more</span> <FaArrowRight/></a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="image">
                            <img src="./skin-care.png" alt="" />
                        </div>
                        <div className="blog-details">
                            <h2>Natural care for healthy facial skin</h2>
                            <p>A healthy lifestyle should start from now and also for your skin health. There are some...</p>
                            <a href="/"><span>Read more</span> <FaArrowRight/></a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="image">
                            <img src="./diseaase-care.png" alt="" />
                        </div>
                        <div className="blog-details">
                            <h2>Disease detection, check up in the laboratory</h2>
                            <p>In this case, the role of the health laboratory is very important to do a disease detection...</p>
                            <a href="/"><span>Read more</span> <FaArrowRight/></a>
                        </div>
                    </div>
                </div>
                <div className="blog-btn">
                    <button className="btn-outline">View all</button>
                </div>
            </div>
        </section>
     );
}

export default Article;