import { DarkModeContext } from "./ThemeProvider";
import { useContext } from "react";

// custom hook to change state light/dark in other components
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
