import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming And problem solving, Still learning in this vast field, everyday. 
              <br />
              <br />I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, 
              web services and online stores,Api's , and whatever you can think of.
              <br />
              Whenever possible, I also apply my passion for developing products
              with <i> <b className="purple"> Django Rest Framework</b></i> and
              <i>
                <b className="purple">
                  {" "}
                  React JS
                </b>
              </i>
              <br/>
              <br/> 
                <i>
                 <b className="purple">
                  <h2> Always Ready for New Adventures and chalenges.</h2>
                  </b>
                </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} 
              className="img-fluid" 
              alt="profil" 
              style={{
                borderRadius: "50%",   
                width: "500px",        
                height: "500px",       
                objectFit: "cover"     
              }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Abdelazizhammoudi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdelaziz-hammoudi-6348b9291/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/213676876596"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
