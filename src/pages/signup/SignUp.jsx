import { Box, Button, TextField } from "@mui/material";
import styles from "./SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setRegPassword,
  setRegUsername,
  setUser,
} from "../../store/features/signUpSlice/SignUpSlice";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const users = useSelector((state) => state.signup.users);
  const regUserName = useSelector((state) => state.signup.regUsername);
  const regPassword = useSelector((state) => state.signup.regPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Done!");
    const newUser = { username: regUserName, password: regPassword };
    dispatch(setUser(newUser));
    console.log(users);
  };
  return (
    <>
      <div className={styles.signup_container}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <Button variant="contained" onClick={() => navigate("/signin")}>
            Sign In
          </Button>
        </Box>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>Sign Up</h1>
          <TextField
            sx={{ margin: "10px" }}
            type="text"
            label="Username"
            value={regUserName}
            onChange={(e) => dispatch(setRegUsername(e.target.value))}
            variant="filled"
          />
          <TextField
            sx={{ margin: "10px" }}
            type="password"
            label="Password"
            value={regPassword}
            onChange={(e) => dispatch(setRegPassword(e.target.value))}
            variant="filled"
          />
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
};
