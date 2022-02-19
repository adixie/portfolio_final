import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = (props) => {

    return (

        <>

            <div className="navBarDiv">
                <ul className="navLinks">
                    <li><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></li>
                    <li><Link to="/projects" style={{textDecoration:"none",color:"white"}}>Projects</Link></li>
                    <li><Link to="/skills" style={{textDecoration:"none",color:"white"}}>Skills</Link></li>
                    <li><Link to="/contact" style={{textDecoration:"none",color:"white"}}>Contact</Link></li>
                </ul>
            </div>

        </>
    )
}

export default Navbar;