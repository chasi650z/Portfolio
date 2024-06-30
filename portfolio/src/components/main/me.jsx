import React from "react";
import './me.css'

const Me = () => {
    return (
        <section className="me-container">
            <div className="me-content">
                <h2>"La imaginación es más importante que el conocimiento. El conocimiento es limitado; la imaginación rodea el mundo."</h2>
                <p>
                    Apasionado y loco junior front-end developer por el día | Ethical Hacker and pentester por la noche
                </p>
            </div> 
            <div className="me-img">
                    <div>
                    <img src="./assets/Me.jpg" alt=" " />
                    </div>
                    <div>
                        <div className="tech-icon">
                            <img src="logo192.png" alt="" />
                        </div>
                
                        <div className="tech-icon">
                            <img src="./assets/HTML.png" alt="" />
                        </div>
                
                        <div className="tech-icon">
                            <img src="./assets/Phyton.png" alt="" />
                        </div>

                        <div className="tech-icon">
                            <img src="./assets/CSS.png" alt="" />
                        </div>

                        <div className="tech-icon">
                            <img src="./assets/Javascript.png" alt="" />
                        </div>
                </div>
            </div>

        </section>
    )
}

export default Me
