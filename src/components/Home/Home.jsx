import React from 'react'
import './Home.css';
import Vic from '../../img/Victor_Pic.jpg';
import Resume from './Resume_Victor Anokwuru.pdf'

const Intro = () => {
    return (
        <div className="introPage">
            <div id="intro"> 
                <img src={Vic} alt="my pic" />  
                <span id="intro-title">Frontend Developer</span>
                <span id="intro-summary">Highly motivated, self-starting developer with an objective to utilize my skills in web design and development to create engaging and user-friendly interfaces for websites and applications, while keeping up with the latest trends and technologies in the field. I aim to work collaboratively with cross-functional teams to deliver high-quality products that meet client and user needs.</span>
                <div id="resume-link">
                    <a href={Resume} download>
                        <button className="button i-button" >Download CV</button>
                    </a>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Intro