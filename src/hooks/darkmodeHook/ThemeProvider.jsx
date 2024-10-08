/* eslint-disable react/prop-types */
import { useState, createContext, useCallback } from "react";
export const DarkModeContext = createContext(null);

// Component to wrap around whole app and change its state
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );
  localStorage.setItem("darkMode", JSON.stringify(darkMode));

  // function to change state from false to true
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevDark) => !prevDark);
  }, []);
  return (
    <DarkModeContext.Provider value={[darkMode, toggleDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};
