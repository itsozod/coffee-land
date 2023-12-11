/* eslint-disable react/prop-types */
import styles from "./Sidebar.module.css";

export const Sidebar = ({ toggle, onClick }) => {
  return (
    <div
      style={{ top: toggle ? "0" : "-100%" }}
      className={styles.sidebar}
      onClick={onClick}
    >
      <h1 className={styles.sidebar_title}>Sidebar</h1>
    </div>
  );
};
