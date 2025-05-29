import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { language } = useLanguage();
  
  const content = {
    en: {
      title: "About Me",
      description: "I'm a passionate full-stack developer with 3+ years of experience building scalable web applications. My expertise includes backend development with Django, frontend development with React, and database management. I enjoy solving complex problems and learning new technologies.",
      button: "Download CV"
    },
    fr: {
      title: "À Propos",
      description: "Développeur full-stack passionné avec plus de 3 ans d'expérience dans la création d'applications web évolutives. Mes compétences incluent le développement backend avec Django, le frontend avec React et la gestion de bases de données. J'aime résoudre des problèmes complexes et apprendre de nouvelles technologies.",
      button: "Télécharger CV"
    },
    ar: {
      title: "معلومات عني",
      description: "أنا مطور Full-stack متحمس مع خبرة تزيد عن 3 سنوات في بناء تطبيقات ويب قابلة للتطوير. تشمل خبراتي تطوير الواجهة الخلفية باستخدام Django، وتطوير الواجهة الأمامية باستخدام React، وإدارة قواعد البيانات. أستمتع بحل المشكلات المعقدة وتعلم التقنيات الجديدة.",
      button: "تحميل السيرة الذاتية"
    }
  };
  
  const { title, description, button } = content[language];
  
  return (
    <div className="about-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <a 
        href={require('../assets/pdf/resume.pdf')} 
        download="HAMMOUDI_Abdelaziz_CV.pdf"
        className="cv-button"
      >
        {button}
      </a>
    </div>
  );
};

export default AboutSection;