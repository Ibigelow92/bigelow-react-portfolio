import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons'

function Navbar() {
    return <div classname="navbar">
        <div className="toggleButton"> 
            <button></button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="experience"> Experience </Link>
        </div>
    </div>;
}

export default Navbar