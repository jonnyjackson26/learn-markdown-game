import React, { createContext, useContext, useState, useEffect } from 'react';
import { trackEvent } from '../utils/analytics';
import level_info from '../assets/level_info';

// Create a LevelContext with default value
const LevelContext = createContext();

export const useLevel = () => useContext(LevelContext);

export const LevelProvider = ({ children }) => {
  // Initialize level from localStorage or default to 0
  const [level, setLevel] = useState(() => {
    const savedLevel = localStorage.getItem('markdownGameLevel');
    return savedLevel ? parseInt(savedLevel, 10) : 0;
  });
  
  // Initialize highest level reached
  const [highestLevelReached, setHighestLevelReached] = useState(() => {
    const savedHighestLevel = localStorage.getItem('markdownGameHighestLevel');
    return savedHighestLevel ? parseInt(savedHighestLevel, 10) : 0;
  });
  
  // Save level to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('markdownGameLevel', level.toString());
    
    // Update highest level reached if current level is higher
    if (level > highestLevelReached) {
      setHighestLevelReached(level);
      localStorage.setItem('markdownGameHighestLevel', level.toString());
      
      // Track milestone levels reached
      if (level % 5 === 0 || level === 1) { // Track level 1, 5, 10, 15, etc.
        trackEvent('milestone_level_reached', {
          level_number: level,
          total_levels: getTotalLevelsCount(),
          progress_percentage: Math.round((level / getTotalLevelsCount()) * 100)
        });
      }
      
      // Track completion of tutorial if reaching the final level
      if (level === getTotalLevelsCount() - 1) {
        trackEvent('tutorial_completed', {
          time_to_complete: calculateTimeToComplete()
        });
      }
    }
  }, [level, highestLevelReached]);
  
  // Get the total number of levels in the game
  const getTotalLevelsCount = () => {
    return level_info.length;
  };
  
  // Calculate the total time taken to complete the tutorial
  const calculateTimeToComplete = () => {
    const tutorialStartTime = localStorage.getItem('tutorialStartTime');
    if (!tutorialStartTime) return 0;
    
    const timeSpent = Math.floor((Date.now() - parseInt(tutorialStartTime, 10)) / 1000); // in seconds
    return timeSpent;
  };
  
  // Set tutorial start time if not already set
  useEffect(() => {
    if (!localStorage.getItem('tutorialStartTime')) {
      localStorage.setItem('tutorialStartTime', Date.now().toString());
    }
  }, []);

  return (
    <LevelContext.Provider value={{ 
      level, 
      setLevel, 
      highestLevelReached,
      totalLevels: getTotalLevelsCount(),
      getProgressPercentage: () => Math.round((highestLevelReached / getTotalLevelsCount()) * 100)
    }}>
      {children}
    </LevelContext.Provider>
  );
};
