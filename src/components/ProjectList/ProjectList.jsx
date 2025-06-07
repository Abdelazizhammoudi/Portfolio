import React from "react";
import ProjectCards from "../Projects/ProjectCards";
import "./projectList.css";
import { projectsData } from "../../Assets/data/Front-data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My projects</h1>
        <p className="pl-desc">
          Each project is a unique piece of development 🧩 Click on the picture
          to go to the website (Live Demo).
        </p>
      </div>
      <div className="pl-list">
        {projectsData.map((item) => {
          return (
            <ProjectCards
              key={item.id}
              title={item.title}
              desc={item.desc}
              img={item.img}
              link={item.link}
              gitLink={item.gitLink}
              tech={item.tech}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;