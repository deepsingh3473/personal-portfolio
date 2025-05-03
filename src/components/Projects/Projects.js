import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import weather from "../../Assets/Projects/weather.png";
import chat from "../../Assets/Projects/chat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="MERN Netflix Clone"
              description="A full-stack Netflix clone built using the MERN stack (MongoDB, Express, React, Node.js). Features user authentication, browsing, search, personalized history, and responsive UI."
              ghLink="https://github.com/deepsingh3473/mern-netflix-clone"
              demoLink="https://mern-netflix-clone-83xb.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce Platform (ReactJS)"
              description="A modern e-commerce web application built with ReactJS and Node.js. Features product catalog, cart, user authentication, and order management."
              ghLink="https://github.com/deepsingh3473/ecommerce-reactjs"
              demoLink="https://aditya-clothing-and-shoes.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App (Node.js)"
              description="A real-time weather application built with Node.js. Fetches weather data using APIs and displays location-based forecasts."
              ghLink="https://github.com/deepsingh3473/weather-app-nodejs"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App (Socket.io)"
              description="A real-time chat application using Node.js, Express, and Socket.io. Supports group chat, real-time messaging, and user authentication."
              ghLink="https://github.com/deepsingh3473/chatApp-using-socketio"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
