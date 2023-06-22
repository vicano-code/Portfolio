import React from "react"
import "./Navbar.css"
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    Victor Anokwuru
                </div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <Link spy={true} to='introPage' smooth={true} activeClass="activeClass">
                            <li>HOME</li>
                        </Link>
                        <Link spy={true} to='AboutPage' smooth={true} activeClass="activeClass">
                            <li>ABOUT</li>
                        </Link>
                        <Link spy={true} to='education' smooth={true} activeClass="activeClass">
                            <li>EDUCATION</li>
                        </Link>
                        <Link spy={true} to='skills' smooth={true} activeClass="activeClass">
                            <li>SKILLS</li>
                        </Link>

                        <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
                            <li>PROJECTS</li>
                        </Link>
                        <Link spy={true} to='contact-form' smooth={true} activeClass="activeClass">
                            <button className="button n-button">
                                CONTACT
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar