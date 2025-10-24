import React from 'react';
import AboutMe from './components/AboutMe';
import type { PersonalInfo } from './types';
import './App.css';

const App: React.FC = () => {
  const personalInfo: PersonalInfo = {
    name: "Jeevan Dhakal",
    profession: "Student",
    location: "Spryfield, NS",
    company: "Saint Mary's University",
    programReason: "I want to enhance my data skills and pursue a career in data engineering."
  };

  return (
    <div className="app">
      <AboutMe data={personalInfo} />
    </div>
  );
};

export default App;