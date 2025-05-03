import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Deep Singh</span> from Punjab,
            India — a passionate B.Tech student in Computer Science &
            Engineering at Lovely Professional University, currently holding a
            CGPA of 9.08.
            <br />
            <br />I specialize in{" "}
            <span className="purple">JavaScript, Java, C++, C, Python</span>,
            and the <span className="purple">MERN stack</span>. I love building
            scalable web applications, real-time platforms, and e-commerce
            solutions. My drive comes from solving real-world problems and
            staying up-to-date with emerging technologies.
            <br />
            <br />
            I'm always eager to collaborate, build impactful projects, and learn
            something new every day!
            <br />
            <br />
            🚀 Outside of tech, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling to explore new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography – capturing stories through my lens
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1.5em" }}>
            "Driven by curiosity, I strive to build things that make a
            difference!"
          </p>
          <footer className="blockquote-footer">Deep Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
