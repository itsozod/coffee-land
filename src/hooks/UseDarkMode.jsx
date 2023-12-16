import { DarkModeContext } from "./ThemeProvider";
import { useContext } from "react";
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
