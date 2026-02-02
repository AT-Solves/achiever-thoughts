import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/ATIcon-White.png"; 

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-inner container">
                <a href="/#/" className="brand">
                    <img
                        src={logo}
                        alt="Achiever Thoughts logo"
                        className="brand-logo"
                    />
                    
                </a>

                <button
                    className="nav-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    Menu
                </button>

                {/*<span className="brand-text">*/}
                {/*    Achiever Thoughts*/}
                {/*</span>*/}

                <nav
                    className={`nav ${open ? "open" : ""}`}
                    aria-label="Main navigation"
                >
                    <a href="/#/">Home</a>
                    <a href="/#/products">Products</a>
                    <a href="/#/demos">Demos</a>
                    <a href="/#/investors">Investors</a>
                </nav>
            </div>
        </header>
    );
}
