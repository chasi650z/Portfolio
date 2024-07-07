import React, { useState } from "react"
import "./Navbar.css"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from "./MobileNavbar/MobileNav"
import { Link } from "react-router-dom";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen = {openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wreaper">
                <div className="nav-content">
                    <img className="logo" src="./assets/logo.png"/>
                    <ul>
                        <li>
                        <Link to="/" className="menu-item">Home</Link>
                        </li>
                        <li>
                            <Link to="/skills" className="menu-item">Skills</Link>
                        </li>


                    </ul>

                    <button class="menu-btn" onClick={toggleMenu}>
                        <span 
                            className={"material-symbols-outlined"}
                            style ={{fontSize: "1.8rem"}}
                        > 
                     {    /* colocar iconos más adelante */   }
                            {openMenu ? "X": <FontAwesomeIcon icon={faBars} />}    
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar