import { useState } from "react";

export const useSnackBar = () => {
  const [snackBar, setSnackBar] = useState(false);

  const handleOpenSnackBar = () => {
    setSnackBar(true);
  };
  const handleCloseSnackBar = () => {
    setSnackBar(false);
  };

  return [snackBar, handleOpenSnackBar, handleCloseSnackBar];
};
