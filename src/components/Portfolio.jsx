import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ProfileSection from './ProfileSection';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';
import '../styles/Portfolio.css';
import '../styles/Section.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <LanguageSwitcher />
      
      <section className="section profile-section">
        <ProfileSection />
      </section>
      
      <section className="section skills-section">
        <SkillsSection />
      </section>
      
      <section className="section about-section">
        <AboutSection />
      </section>
      
      <section className="section projects-section">
        <h2>My Projects</h2>
        <p>Projects will be displayed here soon...</p>
      </section>
    </div>
  );
};

export default Portfolio;