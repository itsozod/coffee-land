/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
export const Sidebar = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.top_section}>
          <h1>Logo</h1>
          <div className={styles.bars}>
            <RxHamburgerMenu />
          </div>
        </div>
        <NavLink to={"/"}>
          <div className={styles.logo}>
            <FaHome />
          </div>
          <div className={styles.text}>Home</div>
        </NavLink>
        <NavLink to={"/about"}>
          <div className={styles.logo}>
            <FaHome />
          </div>
          <div className={styles.text}>About</div>
        </NavLink>
        <NavLink to={"/menu"}>
          <div className={styles.logo}>
            <FaHome />
          </div>
          <div className={styles.text}>Menu</div>
        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  );
};

{
  /* <NavLink to={"/"}>
<FaHome />
<div>Home</div>
</NavLink>
<NavLink to={"/about"}>
<FaHome />
<div>Abour</div>
</NavLink>
<NavLink to={"/menu"}>
<FaHome />
<div>Menu</div>
</NavLink> */
}
