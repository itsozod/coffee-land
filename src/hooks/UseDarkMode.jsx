/* eslint-disable react/prop-types */
import { useState } from "react";
export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return [darkMode, toggleDarkMode];
};
