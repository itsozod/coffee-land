/* eslint-disable react/prop-types */
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Navbar = ({ onClick }) => {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "#15cdfc" } : {};
          }}
          className={styles.navLinkHome}
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
            className={styles.navLink}
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
            className={styles.navLink}
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
            className={styles.navLink}
            to={"/signin"}
          >
            Sign In
          </NavLink>
        </div>
        <div className={styles.navBtnLink}>
          <NavLink className={styles.btnLink} to="/signup">
            Sign Up
          </NavLink>
        </div>
      </nav>
    </>
  );
};
