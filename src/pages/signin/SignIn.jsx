import { useDispatch, useSelector } from "react-redux";
import {
  setLoggedIn,
  setPassword,
  setUsername,
} from "../../store/features/signInSlice/signInSlice";
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import styles from "./SignIn.module.css";
import { useState } from "react";
import { useSnackBar } from "../../hooks/snackBarHook/UseSnackBar";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";

export const SignIn = () => {
  const username = useSelector((state) => state.signin.username);
  const password = useSelector((state) => state.signin.password);
  const dispatch = useDispatch();
  const [usernameValidation, setUsernameValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  const users = useSelector((state) => state.signup.users);
  const navigate = useNavigate();
  const [darkMode] = useDarkMode();

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
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (username !== "" && password !== "" && user) {
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("password", JSON.stringify(password));
      dispatch(setLoggedIn(true));
      console.log("Correct!");
      navigate("/");
    } else {
      handleOpenSnackBar();
      console.log("Incorrect!");
    }
  };
  return (
    <>
      <div
        className={styles.form_container}
        style={{
          backgroundColor: darkMode ? "#003566" : "#fefae0",
          transition: ".3s ease",
        }}
      >
        <div className={styles.full_container}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{ margin: "10px" }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </Box>
          <form onSubmit={handleLogin} className={styles.form}>
            <h1>Sign In</h1>
            <TextField
              sx={{ margin: "10px" }}
              type="text"
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
        </div>
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
