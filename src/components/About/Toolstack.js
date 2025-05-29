import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiGit,
  SiDocker,
  SiWindows,
  SiMicrosoftedge,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa"; // Another alternative for UML/diagram

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows" />
        <h5>Windows 11</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
        <h5>VS Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
        <h5>GitHub</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit title="Git" />
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
        <h5>Docker</h5>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram title="UML Diagram" />
        <h5>UML Diagram</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftedge title="Microsoft Edge" />
        <h5>Microsoft Edge</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
