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
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='AboutPage' smooth={true} activeClass="activeClass">
                            <li>About</li>
                        </Link>
                        <Link spy={true} to='ServicePage' smooth={true} activeClass="activeClass">
                            <li>Services</li>
                        </Link>

                        <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
                            <li>Projects</li>
                        </Link>

                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
                    <button className="button n-button">
                        Contact
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Navbar