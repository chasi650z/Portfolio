import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="nav-wraooer">
                <div className="nav-content">
                    <img/>
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

                </div>
            </nav>
        </>
    )
}

export default Navbar