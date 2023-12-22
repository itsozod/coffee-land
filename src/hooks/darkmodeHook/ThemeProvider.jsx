/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
export const DarkModeContext = createContext(null);

// Component to wrap around whole app and change its state
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // function to change state from false to true
  const toggleDarkMode = () => {
    setDarkMode((prevDark) => !prevDark);
  };
  return (
    <DarkModeContext.Provider value={[darkMode, toggleDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};
