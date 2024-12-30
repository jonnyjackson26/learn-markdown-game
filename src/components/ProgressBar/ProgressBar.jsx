import React, { useEffect, useState } from 'react';
import level_info from '../../assets/level_info';
import './ProgressBar.css';

const ProgressBar = ({ level }) => {
  const [width, setWidth] = useState(0);
  const totalLevels = level_info.length;

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
