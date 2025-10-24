import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import type { PersonalInfo, TownInfo } from './types';
import './App.css';
import MyTown from './components/MyTown';

type View = 'about' | 'town';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('about');

  const personalInfo: PersonalInfo = {
    name: "Jeevan Dhakal",
    profession: "Student",
    location: "Spryfield, NS",
    company: "Saint Mary's University",
    programReason: "I want to enhance my data skills and pursue a career in data engineering."
  };

  const townInfo: TownInfo = {
    name: "Lumbini",
    description: "Lumbini is a famous pilgrimage site located in the Rupandehi District of Nepal. It is the birthplace of Siddhartha Gautam, who became the Buddha."

  };

  return (
    <div className="app">
      <nav className="navigation">
        <button
          className={`nav-button ${currentView === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentView('about')}
        >
          About Me
        </button>
        <button
          className={`nav-button ${currentView === 'town' ? 'active' : ''}`}
          onClick={() => setCurrentView('town')}
        >
          My Town
        </button>
      </nav>

      {currentView === 'about' && <AboutMe data={personalInfo} />}
      {currentView === 'town' && <MyTown data={townInfo} />}
    </div>
  );
};

export default App;