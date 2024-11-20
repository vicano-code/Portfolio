import React from 'react'
import './Home.css';
import Vic from '../../img/Vic_Passport.jpg';
import Resume from './Resume_Victor Anokwuru.pdf'

const Intro = () => {
    return (
        <div className="introPage">
            <div id="intro"> 
                <img src={Vic} alt="my pic" />  
                <span id="intro-name">Victor Anokwuru</span>
                <span id="intro-title">Software Developer</span>
                <span id="intro-summary">I am a highly motivated, frontend developer with an objective to utilize my skills in web design and development to create engaging and user-friendly interfaces for websites and applications, while keeping up with the latest trends and technologies in the field. I aim to work collaboratively with cross-functional teams to deliver high-quality products that meet client and user needs.</span>
                <div id="resume-link">
                    <a href={Resume} download>
                        <button className="button i-button" >DOWNLOAD RESUME</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro