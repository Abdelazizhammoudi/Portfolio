import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Engineer",
          "Full Stack Developer",
          "Web Developer",
          "Conceptor",
          "Web Deployer and Maintainer In VPS and Cloud",
          "Network",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      
    />
  );
}

export default Type;
