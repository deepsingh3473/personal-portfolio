import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Card } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="deepsingh3473"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <h1
        className="project-heading"
        style={{
          textAlign: "center",
          padding: "40px 0 20px 0",
          fontSize: "2em",
        }}
      >
        LeetCode <strong className="purple">Streak</strong>
      </h1>
      <Card
        className="project-card-view"
        style={{
          marginBottom: "2em",
          background: "rgba(60, 20, 80, 0.85)",
          border: "2px solid #c770f0",
          borderRadius: "12px",
          boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)",
          maxWidth: "540px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5em",
            width: "100%",
          }}
        >
          <img
            src="https://leetcard.jacoblin.cool/deepsingh3473?theme=dark&ext=contest"
            alt="LeetCode Stats"
            style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
          />
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Github;
