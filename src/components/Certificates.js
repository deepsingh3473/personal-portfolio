import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "./Particle";

const certificates = [
  {
    name: "Cloud Computing | NPTEL | Proctored | Elite Certification",
    platform: "NPTEL",
    date: "December 2024",
    link: "https://drive.google.com/file/d/1yd5ImmoAMsvEE_T3PEAFmxJyNoW66pz4/view?usp=sharing",
    image: require("../Assets/Certificates/Cloud Computing.jpg"),
  },
  {
    name: "Server-side JavaScript with Node.js",
    platform: "Coursera | NIIT",
    date: "May 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/8AS4G8U7Q4BA",
    image: require("../Assets/Certificates/Coursera-Backend.jpg"),
  },
  {
    name: "HTML, CSS, and JavaScript for Web Developers",
    platform: "Coursera | Johns Hopkins University",
    date: "May 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/NXW2ANS9RNE3",
    image: require("../Assets/Certificates/Coursera-Frontend.jpg"),
  },
  {
    name: "Intelligence Tools for the Digital Age",
    platform: "Coursera | University of Michigan",
    date: "March 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/UFDZD5NYK4BH",
    image: require("../Assets/Certificates/Coursera-IntelligenceTools.jpg"),
  },
];

function Certificates() {
  return (
    <Container fluid className="project-section certificate-section">
      <Particle />
      <h1 className="project-heading">
        My <strong className="purple">Certificates</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {certificates.map((cert, idx) => (
          <Col md={4} className="project-card" key={idx}>
            <Card
              className="project-card-view certificate-card-view"
              style={{
                minHeight: "260px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cert.image && (
                  <Card.Img
                    variant="top"
                    src={cert.image}
                    alt={cert.name}
                    className="card-img-top"
                  />
                )}
                <Card.Title
                  style={{
                    fontWeight: 600,
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.2em",
                  }}
                >
                  {cert.name}
                </Card.Title>
                <Card.Text
                  style={{
                    margin: "10px 0",
                    color: "white",
                    textAlign: "center",
                    fontSize: "1em",
                  }}
                >
                  <b>Platform:</b> {cert.platform}
                  <br />
                  <b>Date:</b> {cert.date}
                </Card.Text>
                <Button
                  variant="primary"
                  href={cert.link && cert.link !== "#" ? cert.link : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: "10px", width: "70%" }}
                  disabled={!cert.link || cert.link === "#"}
                >
                  View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certificates;
