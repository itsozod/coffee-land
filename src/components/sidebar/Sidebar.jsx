/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { MdCancel } from "react-icons/md";

export const Sidebar = ({ toggle, onClick }) => {
  return (
    <div
      style={{ top: toggle ? "0" : "-100%" }}
      className={styles.sidebar}
      onClick={onClick}
    >
      <nav className={styles.sidebar_nav}>
        <MdCancel className={styles.cancelBtn} />
        <div className={styles.sidebar_ul}>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "#15cdfc" } : {};
            }}
            className={styles.sidebar_link}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "#15cdfc" } : {};
            }}
            className={styles.sidebar_link}
            to={"/menu"}
          >
            Menu
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "#15cdfc" } : {};
            }}
            className={styles.sidebar_link}
            to={"/signin"}
          >
            Sign in
          </NavLink>
          <NavLink className={styles.btnLink} to={"/signup"}>
            Sign Up
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
