import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiPython, DiJava, DiMysql, DiGit } from "react-icons/di";
import { SiDjango, SiPostgresql, SiHtml5, SiCss3, SiGithub} from "react-icons/si";
import { FaServer, FaProjectDiagram } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML" />
        <h5>HTML</h5>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS" />
        <h5>CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript"/>
        <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
        <h5>React.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango title="Django / Django REST Framework" />
        <h5>Django Rest</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python 3" />
        <h5>Python 3</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java EE" />
        <h5>Java EE</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql title="MySQL" />
        <h5>MySQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
        <h5>PostgreSQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
        <h5>GitHub</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer title="Deployment VPS" />
        <h5>Deployment VPS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram title="Project Management" />
        <h5>Project Management</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram title="UML Diagram" />
        <h5>UML3 Conception Diagrams</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
