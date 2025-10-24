import React from 'react';
import type { TownInfo } from '../types';

interface MyTownProps {
  data: TownInfo;
}

const MyTown: React.FC<MyTownProps> = ({ data }) => {
  return (
    <div className="my-town">
      <div className="header-section">
        <h1>My Town</h1>
      </div>
      <div className="content">
        <h2>I live in {data.name}</h2>
        {data.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default MyTown;