import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return ( 
        <header>
            <div className="nav-header">
                <div className="navContainer">
                    <a href="/#" className="logo"><span>T</span>Trafalgar</a>
                    <nav ref={navRef}>
                        <a href="/#" className="active">Home</a>
                        <a href="/#">Find a doctor</a>
                        <a href="/#">Apps</a>
                        <a href="/#">Testimonials</a>
                        <a href="/#">About us</a>
                        <button className="nav-btn nav-closeBtn" onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                    </nav>
                </div>
                <button className="nav-btn nav-toggleBtn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    );
}

export default Navbar;