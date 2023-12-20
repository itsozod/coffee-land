/* eslint-disable react/prop-types */
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../../hooks/UseDarkMode";

export const Navbar = ({ onClick }) => {
  // custom hook to track the state for light/dark mode
  const [darkMode, toggleDarkMode] = useDarkMode();
  console.log("Dark mode:", darkMode);
  return (
    <>
      <nav
        className={styles.nav}
        style={{
          backgroundColor: darkMode ? "#1a193a" : "bisque",
          transition: ".3s ease",
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "#15cdfc" } : {};
          }}
          className={darkMode ? styles.navLinkHomeDark : styles.navLinkHome}
          to={"/"}
        >
          <h3>Coffeeland</h3>
          <img className={styles.coffee_img} src="coffee-icon.png" alt="logo" />
        </NavLink>
        <FaBars className={styles.faBars} onClick={onClick} />
        <div className={styles.nav_menu}>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "#15cdfc", backgroundColor: "darkred" }
                : {};
            }}
            className={darkMode ? styles.navLinkDark : styles.navLink}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "#15cdfc", backgroundColor: "darkred" }
                : {};
            }}
            className={darkMode ? styles.navLinkDark : styles.navLink}
            to={"/menu"}
          >
            Menu
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "#15cdfc", backgroundColor: "darkred" }
                : {};
            }}
            className={darkMode ? styles.navLinkDark : styles.navLink}
            to={"/signin"}
          >
            Sign In
          </NavLink>
        </div>
        <div className={styles.navBtnLink}>
          <button className={styles.toggleDark} onClick={toggleDarkMode}>
            {darkMode ? "Light" : "Dark"}
          </button>
          <NavLink className={styles.btnLink} to="/signup">
            Sign Up
          </NavLink>
        </div>
      </nav>
    </>
  );
};
