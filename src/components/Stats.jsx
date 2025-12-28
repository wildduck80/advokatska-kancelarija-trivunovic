import React from 'react';
import { companyData } from '../data/content';

const Stats = () => {
  return (
    <div className="stats-bar">
      <div className="container stats-flex">
        {companyData.stats.map((item, index) => (
          <div key={index} className="stat-item">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
