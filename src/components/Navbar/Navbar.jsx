import "./Navbar.css";
import { Link } from 'react-scroll';
import Grid from "@mui/material/Grid";
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useEffect } from "react";

const Navigbar = () => {

    function handleWindowResize() {
        if (window.innerWidth > 768) {
            document.getElementById("navList").style.display = "flex";
            document.getElementById("menu-icon").style.display = "none";
        } else {
            document.getElementById("navList").style.display = "none";
            document.getElementById("menu-icon").style.display = "block";
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    function handleMenuToggle() {
        var navListDisplay = document.getElementById("navList").style.display;
        if (navListDisplay === 'none') {
            document.getElementById("navList").style.display = "block";
        } else {
            document.getElementById("navList").style.display = "none";
        }
    }
    
    return (
        <header className="n-wrapper">
            <div className="n-left">
                <h3>Victor Anokwuru</h3>
            </div>
            <nav className="n-mid">
                <div className="n-list" >
                    <Grid item xs={1} id="menu-icon" onClick={handleMenuToggle}>
                        <MenuIcon />
                    </Grid>
                    <ul id="navList" style={{ listStyleType: "none" }}>  
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
                        
                    </ul>
                </div>
            </nav>
            <div className="n-right">
                <a href="https://www.linkedin.com/in/victor-anokwuru-19091a81/" target="_blank" rel="noreferrer">
                    <LinkedInIcon style={{backgroundColor: 'white', color:'#0099cc'}} />
                </a>
                <a href="https://twitter.com/VcAnokwuru" target="_blank" rel="noreferrer">
                    <TwitterIcon style={{backgroundColor: 'white', color:'blue'}} />
                </a>
                <a href="https://github.com/vicano-code" target="_blank" rel="noreferrer">
                    <GitHubIcon style={{backgroundColor: 'white', color:'black'}} />
                </a>
                <Link spy={true} to='contact-form' smooth={true} activeClass="activeClass">
                    <button className="button n-button" id="navBtn">
                        CONTACT
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Navigbar