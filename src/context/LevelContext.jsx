import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a ThemeContext with default value
const LevelContext = createContext();

export const useLevel = () => useContext(LevelContext);

export const LevelProvider = ({ children }) => {
  const [level, setLevel] = useState(0); 

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};
