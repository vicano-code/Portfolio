import React from 'react';
import "./Projects.css";
import Card from 'react-bootstrap/Card';

const Projects = (props) => {
    return (
        <section id="Portfolio">
            <h2>Portfolio Projects</h2>
            <div id="projects">{props.projectList.map(project => {
                return (
                    <div key={project.id} id="project">
                        <Card>
                            <Card.Img variant="top" src={project.picture} />
                        </Card>
                        <div id="tech_stack">
                            <div id="project-title">{project.title}</div>
                            <div>{project.stack}</div>
                            <a href={project.url} target='blank'>
                                <button className="button">View</button>
                            </a>
                        </div>
                    </div>
                );
            })}
            </div>
        </section>
    );
};

export default Projects;