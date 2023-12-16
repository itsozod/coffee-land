/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
export const DarkModeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDark) => !prevDark);
  };
  return (
    <DarkModeContext.Provider value={[darkMode, toggleDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};
