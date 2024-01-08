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
  const handleCloseSuccessSnackBar = () => {
    setSnackBar(false);
  };
  return [
    snackBar,
    handleOpenSnackBar,
    handleCloseSnackBar,
    handleCloseErrorSnackBar,
    handleCloseSuccessSnackBar,
  ];
};
