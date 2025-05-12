import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a ThemeContext with default value
const LevelContext = createContext();

export const useLevel = () => useContext(LevelContext);

export const LevelProvider = ({ children }) => {
  // Initialize level from localStorage or default to 0
  const [level, setLevel] = useState(() => {
    const savedLevel = localStorage.getItem('markdownGameLevel');
    return savedLevel ? parseInt(savedLevel, 10) : 0;
  });
  
  // Save level to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('markdownGameLevel', level.toString());
  }, [level]);

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};
