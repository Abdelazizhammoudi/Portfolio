import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from '../assets/images/profile.jpg';

const ProfileSection = () => {
  const { language } = useLanguage();
  
  const content = {
    en: {
      greeting: "Hello, My name is",
      name: "HAMMOUDI Abdelaziz",
      description: "Full-stack developer specializing in Django and React with expertise in database management and cloud deployment."
    },
    fr: {
      greeting: "Bonjour, Je m'appelle",
      name: "HAMMOUDI Abdelaziz",
      description: "Développeur full-stack spécialisé dans Django et React avec expertise en gestion de bases de données et déploiement cloud."
    },
    ar: {
      greeting: "مرحبا، اسمي",
      name: "حمودي عبد العزيز",
      description: "مطور Full-stack متخصص في Django و React مع خبرة في إدارة قواعد البيانات والنشر السحابي."
    }
  };
  
  const { greeting, name, description } = content[language];
  
  return (
    <div className="profile-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className={`content ${language === 'ar' ? 'rtl' : ''}`}>
        <h1>{greeting} <span className="highlight">{name}</span></h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileSection;