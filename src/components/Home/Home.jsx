import React from 'react'
import './Home.css';
import Vic from '../../img/Victor_Anokwuru_pic.jpg';
import Resume from './Resume-Victor-Anokwuru.pdf'

const Intro = () => {
    return (
        <div className="introPage">
            <div id="intro"> 
                <img src={Vic} alt="my pic" />  
                <span id="intro-name">Victor Anokwuru</span>
                <span id="intro-title">Software Engineer</span>
                <span id="intro-summary">I am a highly motivated, frontend developer with an objective to utilize my skills in web design and development to create engaging and user-friendly interfaces for websites and applications, while keeping up with the latest trends and technologies in the field. I aim to work collaboratively with cross-functional teams to deliver high-quality products that meet client and user needs.</span>
                <div id="resume-link">
                    <a href="https://drive.google.com/file/d/1pTzBoKfyoC9LEYFF-GOatGl5E06RK7NI/view?usp=sharing">
                        <button className="button i-button" >VIEW RESUME</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro