import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Projects() {

    const projects = [
        {
          title: "Price Tracker",
          description: "Web application to compare prices of GEM products with those on various e-marketplaces",
          imgUrl: projImg1,
          projectUrl: "https://github.com/CodeNik07/Gem-Price-Tracker"
        },
        {
          title: "Task Management Tool",
          description: "Task manager with CRUD functionality and a responsive design.",
          imgUrl: projImg2,
          projectUrl: "https://github.com/CodeNik07/Kanban-Board-Task-Management"
        },
        {
          title: "Superhero Hunter",
          description: "Developed a dynamic web application using HTML, CSS, JavaScript, and jQuery to fetch and display superhero information from the Superhero API, providing users with an engaging and interactive experience.",
          imgUrl: projImg3,
          projectUrl: "https://github.com/CodeNik07/superherohunter"
        },
        
      ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Developed diverse web applications including a Price Tracker for comparing GEM product prices with other e-marketplaces, a Task Management Tool utilizing the MERN stack for efficient task handling, and a Superhero Hunter application that fetches and displays superhero information using HTML, CSS, JavaScript, and jQuery.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Project List</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
