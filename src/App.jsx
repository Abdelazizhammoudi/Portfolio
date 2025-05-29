import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Portfolio from './components/Portfolio';
import './styles/Portfolio.css';

function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}

export default App;