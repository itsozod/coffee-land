import { useCallback, useState } from "react";

export const useSnackBar = () => {
  const [snackBar, setSnackBar] = useState(false);

  const handleOpenSnackBar = useCallback(() => {
    setSnackBar(true);
  }, []);
  const handleCloseSnackBar = useCallback(() => {
    setSnackBar(false);
  }, []);

  return [snackBar, handleOpenSnackBar, handleCloseSnackBar];
};
