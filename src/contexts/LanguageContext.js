import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  // Language button labels
  const languages = {
    ar: 'العربية',
    fr: 'Français',
    en: 'English'
  };
  
  return (
    <div className="lang-switcher">
      {Object.entries(languages).map(([code, label]) => (
        <button 
          key={code}
          onClick={() => setLanguage(code)}
          className={language === code ? 'active' : ''}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;