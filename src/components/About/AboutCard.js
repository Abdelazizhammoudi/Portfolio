import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">HAMMOUDI Abdelaziz </span>
            from <span className="purple"> Constantine, Algeria.</span>
            <br />
             I am a 25-year-old developer, born on May 1st, 1999. 
             I am passionate and creative, with solid technical expertise and proven ability to solve complex problems,
             as well as my team-oriented nature.
             My Full stack skills include HTML, CSS, JavaScript, React, Tailwind, and some knowledge in Flutter. 
             For the backend, I primarily use Django/Django Rest Framework and MySQL/Postgres, but I am also skilled in Java (JEE) and Python.
            <br />
            I have completed Masters degree (MSc) in Computer Science specialising in "Information System and Web Technologies" 
            from the NTIC departement at the University of Constantine 2.
            <br />
            <br />
            Apart from coding and Problem solving, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football.
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking and camping 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn and devlop my skills, build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdelaziz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
