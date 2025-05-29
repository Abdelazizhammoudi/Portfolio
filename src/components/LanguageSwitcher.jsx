import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Section.css';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="lang-switcher">
      <button onClick={() => setLanguage('ar')} className={language === 'ar' ? 'active' : ''}>AR</button>
      <button onClick={() => setLanguage('fr')} className={language === 'fr' ? 'active' : ''}>FR</button>
      <button onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;