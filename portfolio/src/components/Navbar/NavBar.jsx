import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
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

                    <button class="menu-btn" onClick={() => {}}>
                        <span 
                            class={"material-symbols-outlined"}
                            style ={{fontSize: "1.8rem"}}>
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar