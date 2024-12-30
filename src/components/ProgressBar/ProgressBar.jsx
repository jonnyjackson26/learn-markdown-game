import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ level }) => {
  const [width, setWidth] = useState(0);
  const totalLevels = 23; // Adjust this based on your total number of levels

  useEffect(() => {
    setWidth((level / totalLevels) * 100);
  }, [level]);

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar-fill" 
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
