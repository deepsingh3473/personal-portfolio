import React from "react";
import { Container } from "react-bootstrap";
import Particle from "./Particle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgRead } from "react-icons/cg";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "Since August 2022",
    result: "CGPA: 9.08",
  },
  {
    degree: "Intermediate",
    institution: "Sarla International Academy",
    location: "Basti, UP",
    duration: "April 2019 – March 2021",
    result: "Percentage: 95.4%",
  },
  {
    degree: "Matriculation",
    institution: "Sarla International Academy",
    location: "Basti, UP",
    duration: "April 2018 – March 2019",
    result: "Percentage: 95.8%",
  },
];

function Education() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <VerticalTimeline lineColor="#c770f0">
          {educationData.map((edu, idx) => (
            <VerticalTimelineElement
              key={idx}
              contentStyle={{
                border: "2px solid #c770f0",
                background: "transparent",
                boxShadow: "none",
              }}
              contentArrowStyle={{ borderRight: "7px solid #c770f0" }}
              date={
                <span style={{ color: "#bdbdbd", fontWeight: 500 }}>
                  {edu.duration}
                </span>
              }
              iconStyle={{ background: "#c770f0", color: "#fff" }}
              icon={<CgRead size={28} />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#c770f0", fontWeight: 600 }}
              >
                {edu.degree}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "white", fontWeight: 500 }}
              >
                {edu.institution}
              </h4>
              <p style={{ color: "#a588c0", marginBottom: 0 }}>
                {edu.location}
              </p>
              <p style={{ color: "white", marginBottom: 0 }}>{edu.result}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Education;
