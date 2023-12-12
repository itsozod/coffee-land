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
          <NavLink className={styles.sidebar_link} to={"/about"}>
            About
          </NavLink>
          <NavLink className={styles.sidebar_link} to={"/menu"}>
            Menu
          </NavLink>
          <NavLink className={styles.sidebar_link} to={"/signin"}>
            Sign in
          </NavLink>
          <NavLink className={styles.btnLink} to={"/signin"}>
            Sign Up
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
