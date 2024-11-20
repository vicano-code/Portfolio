import React from 'react';
import "./Projects.css";
import Card from 'react-bootstrap/Card';

const Projects = (props) => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
      
    return (
        <section id="Portfolio">
            <h1>Portfolio Projects</h1>
            <div id="projects">{props.projectList.map(project => {
                return (
                    <div key={project.id} id="project" className='reveal'>
                        <Card>
                            <Card.Img variant="top" src={project.picture} />
                            <div id="tech_stack">
                                <div id="project-title">{project.title}</div>
                                <div>{project.stack}</div>
                                <a href={project.url} target='blank'>
                                    <button className="button">View</button>
                                </a>
                            </div>
                        </Card>
                        
                    </div>
                );
            })}
            </div>
        </section>
    );
};

export default Projects;