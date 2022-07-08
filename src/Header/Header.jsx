import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import Project from "../Project/Project";

const Header = () => {
    return (
        <>
            <div>
                <header className="header">
                    <h3><Link className="headerx " to="/">PT.</Link></h3>
                    <nav className="navbar">
                        <ul className="list ">
                            <Link className="navl secondarys" to="/">Home</Link>
                            <Link className="navl secondarys" to="/Project">project</Link>
                            <Link className="navl secondary" to="/Skill">About</Link>
                            
                        </ul>

                    </nav>
                </header>
            </div>
        </>
    );
}

//<Link className="navl secondary" to="/#Contact">contact</Link>
export default Header;