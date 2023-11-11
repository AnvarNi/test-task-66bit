import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  const applyTheme = async (newTheme) => {
    setTheme(newTheme);
    await AsyncStorage.setItem("theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    const loadSavedTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("theme"); 
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };

    loadSavedTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};