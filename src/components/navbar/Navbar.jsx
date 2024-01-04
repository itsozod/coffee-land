/* eslint-disable react/prop-types */
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { useSelector } from "react-redux";

export const Navbar = ({ onClick }) => {
  // custom hook to track the state for light/dark mode
  const [darkMode, toggleDarkMode] = useDarkMode();
  console.log("Dark mode:", darkMode);
  const cartLength = useSelector((state) => state.cart.cart).length;
  const cart = useSelector((state) => state.cart.cart);
  console.log(cartLength);
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
        <ul className={styles.nav_menu}>
          <li className={styles.link_links}>
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
          </li>
          <li className={styles.link_links}>
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
          </li>
          <li className={styles.link_links}>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? { color: "#15cdfc", backgroundColor: "darkred" }
                  : {};
              }}
              className={darkMode ? styles.navLinkDark : styles.navLink}
              to={"/cart"}
            >
              Cart
            </NavLink>
          </li>
          <li className={styles.cart_length}>
            {cart.length > 0 && cartLength}
          </li>
          <li className={styles.link_links}>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? { color: "#15cdfc", backgroundColor: "darkred" }
                  : {};
              }}
              className={darkMode ? styles.navLinkDark : styles.navLink}
              to={"/booking"}
            >
              Book
            </NavLink>
          </li>
          <li className={styles.link_links}>
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
          </li>
        </ul>
        <div className={styles.navBtnLink}>
          <button className={styles.toggleDark} onClick={toggleDarkMode}>
            {darkMode ? "Light" : "Dark"}
          </button>
          <li className={styles.link_links_signup}>
            <NavLink className={styles.btnLink} to="/signup">
              Sign Up
            </NavLink>
          </li>
        </div>
      </nav>
    </>
  );
};
