import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai";
import "./resume.css";

// Use the public folder for the PDF
const pdf = process.env.PUBLIC_URL + "/CV_HAMMOUDI_Abdelaziz_2025_eng.pdf";

function ResumeNew() {
  const [, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ minHeight: "90vh", display: "flex", flexDirection: "column" }}>
      <Container fluid className="resume-section" style={{ flex: 1, minHeight: "80vh" ,height: "100%" }}>
        <Particle />
        <Row className="resume-btn-row" style={{ justifyContent: "center", position: "relative", marginBottom: 20 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="resume-btn"
            style={{ maxWidth: "250px", marginRight: "10px" }}
          >
            <AiOutlineEye />
            &nbsp;View CV
          </Button>
          <Button
            variant="secondary"
            href={pdf}
            download
            className="resume-btn"
            style={{ maxWidth: "250px", marginRight: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>

        </Row>
      </Container>
  
    </div>
  );
}

export default ResumeNew;
