import React from 'react';
import './About.css';
import Education from '../Education/Education';

const About = () => {
    return (
        <div className="AboutPage">
            <div id="about-title"><h2>About Me</h2></div>
            <div id="about">
                <div>
                    <p>I hold a BSc in Petroleum Engineering from the Federal University of Technology Owerri in Nigeria and an MSc in Petroleum Engineering from the University of Stavanger in Norway. </p>
                    <p>My first experience in programming was during my master program. We were taught practically on how to write models with matlab to simulate drill cuttings removal during oil well drilling. I also learnt how to do complex computations on Excel from our Geostatistics course. Since then I have developed strong interest in programming. </p>
                    <p>I acquired skills in HTML, CSS, JavaScript, React, D3, Python, SQL, Data Science and Excel VBA through courses on coursera, freecodecamp, w3schools, codecademy, youtube and more. I am currently working hard to improve my skills and expand my tech stack.</p>
                </div>
                <Education />
                
            </div>
        </div>
    );
};

export default About;