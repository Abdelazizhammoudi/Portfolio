import React from 'react';

const skills = [
  { name: 'Django / Django REST Framework', icon: 'django' },
  { name: 'React JS', icon: 'react' },
  { name: 'MySQL / PostgreSQL / Oracle', icon: 'mysql' },
  { name: 'Python 3 / Java / Java EE', icon: 'python' },
  { name: 'JavaScript / HTML / CSS', icon: 'javascript' },
  { name: 'UML 3', icon: 'uml' },
  { name: 'CISCO Packet Tracer', icon: 'cisco' },
  { name: 'Projects Deployment on VPS', icon: 'vps' }
];

const SkillsSection = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              <img 
                src={require(`../assets/icons/${skill.icon}.svg`)} 
                alt={skill.name}
              />
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;