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
            Hi, my name is Victor Chukwudi Anokwuru. Hello! I'm a skilled geophysicist turned software engineer who has recently graduated from the ALX Software Engineering Program. Throughout my journey, I've gained hands-on experience with full-stack development, working with modern technologies like JavaScript, React, Node.js, Express, and MongoDB. My background in problem-solving and analytical thinking has been honed through both my academic studies and personal projects.
          </p>
          <p>
            I thrive in building efficient, scalable, and user-friendly web applications. Whether it's designing an intuitive user interface with React or crafting a robust backend API with Node.js, I take pride in creating seamless, high-performing experiences.
          </p>
          <p>
            I am eager to continue expanding my skill set, tackling complex challenges, and contributing to impactful projects. As I venture into the tech industry, I'm excited to collaborate with like-minded professionals to create innovative solutions.
          </p>
          <p>
            Feel free to browse through my portfolio to see my work, and don't hesitate to reach out if you'd like to connect or collaborate!
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
