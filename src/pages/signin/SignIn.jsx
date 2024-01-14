import { useDispatch, useSelector } from "react-redux";
import {
  setLoggedIn,
  setPassword,
  setUsername,
} from "../../store/features/signInSlice/signInSlice";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import styles from "./SignIn.module.css";
import { useState } from "react";
import { useSnackBar } from "../../hooks/snackBarHook/UseSnackBar";

export const SignIn = () => {
  const username = useSelector((state) => state.signin.username);
  const password = useSelector((state) => state.signin.password);
  const dispatch = useDispatch();
  const [usernameValidation, setUsernameValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "") {
      setUsernameValidation(true);
    } else {
      setUsernameValidation(false);
    }

    if (password === "") {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }

    if (username === "Ozod" && password === "ozod2905") {
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("password", JSON.stringify(password));
      dispatch(setLoggedIn(true));
    } else if (
      (username !== "" && username !== "Ozod") ||
      (password !== "" && password !== "ozod2905")
    ) {
      handleOpenSnackBar();
    }
  };
  return (
    <>
      <div className={styles.form_container}>
        <form onSubmit={handleLogin} className={styles.form}>
          <h1>Sign In</h1>
          <TextField
            sx={{ margin: "10px" }}
            type="text"
            id="filled-basic"
            label="Username"
            variant="filled"
            error={usernameValidation}
            helperText={usernameValidation ? "Enter your username" : ""}
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <TextField
            sx={{ margin: "10px" }}
            type="password"
            id="filled-basic"
            label="Password"
            variant="filled"
            error={passwordValidation}
            helperText={passwordValidation ? "Enter your password" : ""}
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </form>
        <Snackbar
          open={snackBar}
          autoHideDuration={3000}
          onClose={() => handleCloseSnackBar()}
        >
          <Alert
            onClose={() => handleCloseSnackBar()}
            severity="error"
            sx={{ width: "100%" }}
          >
            Incorrent username or password!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};
