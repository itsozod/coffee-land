import { useState } from "react";

export const useSnackBar = () => {
  const [snackBar, setSnackBar] = useState(false);

  const handleOpenSnackBar = () => {
    setSnackBar(true);
  };
  const handleCloseSnackBar = () => {
    setSnackBar(false);
  };
  const handleCloseErrorSnackBar = () => {
    setSnackBar(false);
  };
  const handleCloseSuccessSnackBar = (setTablesImg, setMenuFood) => {
    setSnackBar(false);
    setTimeout(() => {
      setTablesImg("");
      setMenuFood("");
    }, 1500);
  };

  return [
    snackBar,
    handleOpenSnackBar,
    handleCloseSnackBar,
    handleCloseErrorSnackBar,
    handleCloseSuccessSnackBar,
  ];
};
