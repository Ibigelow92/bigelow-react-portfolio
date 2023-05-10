import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return <div classname="navbar" id={expandNavbar ? "open" : "closed"}>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="experience"> Resume </Link>
        </div>
    </div>;
}

export default Navbar