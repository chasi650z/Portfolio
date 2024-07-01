import React, { useState } from "react"
import "./Navbar.css"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from "./MobileNavbar/MobileNav"

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
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact</a>
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