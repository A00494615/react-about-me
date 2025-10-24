import React from 'react';
import type { PersonalInfo } from '../types';

interface AboutMeProps {
  data: PersonalInfo;
}

const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
  return (
    <div className="about-me">
      <div className="header-section">
        <h1>About Me</h1>
      </div>
        <img src="/programmer.png" alt="Programmer" className="profile-image" width="100" />
      <div className="content">
        <h2>Hi, I'm {data.name}</h2>
        <p>
          I'm a {data.profession} based in {data.location} currently studying at {data.company}.
        </p>
        <p>
          I joined MCDA because {data.programReason}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;