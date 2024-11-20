import React from "react";
import "./About.css";
import Education from "../Education/Education";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Cert0 from "../../img/ALX_Cert.png";
import Cert1 from "../../img/Frontend_Cert_FreeCodeCamp.PNG";
import Cert2 from "../../img/JavaScript_Algorithms_DataStructures_Cert.PNG";
import Cert3 from "../../img/Responsive-web-design_Cert.PNG";
import Cert4 from "../../img/IBM_Data_Science_Cert.JPG";
import Cert5 from "../../img/SQL_Cert.JPG";

const About = () => {
 
  return (
    <section className="AboutPage">
      <h1>About Me</h1>
      <div id="about">
        <div>
          <p>
            I hold a BSc in Petroleum Engineering from the Federal University of
            Technology Owerri in Nigeria and an MSc in Petroleum Engineering
            from the University of Stavanger in Norway.{" "}
          </p>
          <p>I have five years experience working as a seismic data processing geophysicist. The processing software for our job is installed on a linux workstation. As such, I had to learn how to work with file systems in linux. During the process, I helped the company to troubleshoot and solve some problems relating to the software functionality. In the process, I developed interest in software engineering. I took some web development courses on freeCodeCamp. </p>
          <p>
            Previously, I had some programming experience in Matlab. During my master program in Norway, we used Matlab to write models such as a model for
            simulating drill cuttings removal during oil well drilling. I also
            The Geostatistics course exposed me to intermediate/advanced Excel. Some time later, I learnt how program in Excel using ExcelVBA.{" "}
          </p>
          <p>
            I have acquired skills in HTML, CSS, JavaScript, React, D3, Python, SQL,
            Data Science and Excel VBA through courses on coursera,
            freecodecamp, w3schools, youtube and more. I am
            currently working hard to improve my skills and expand my tech
            stack. Although, I have faced some challenge finding intern/entry level positions, I am not giving up yet! </p>
            <p>So if you are looking for someone who is HARDWORKING, TEACHABLE, COMMITTED, INNOVATIVE and A TEAM PLAYER, then just <span style={{color: 'red', fontSize: 'larger'}}>HIRE ME !!!</span>
          </p>
        </div>
        <Education />
        <div id="cert">
            <h3>My Certificates</h3>
            <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={Cert0} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Cert1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Cert2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Cert3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Cert4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Cert5} alt="" /></SwiperSlide>
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
