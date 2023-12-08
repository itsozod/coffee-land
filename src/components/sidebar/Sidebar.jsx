/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");

  function getFromLocalStorage() {
    const storedActiveLink = JSON.parse(localStorage.getItem("activeLink"));
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }

  useEffect(() => {
    getFromLocalStorage();
  }, [activeLink]);

  const handleActive = (link) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", JSON.stringify(link));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.top_section}>
        <h1 className={styles.logo}>Logo</h1>
        <div className={styles.bars}>
          <RxHamburgerMenu />
        </div>
      </div>
      <NavLink
        to={"/"}
        className={activeLink === "/" ? styles.active : styles.link}
        onClick={() => handleActive("/")}
      >
        <div className={styles.icon}>
          <FaHome />
        </div>
        <div className={styles.link_text}>Home</div>
      </NavLink>
      <NavLink
        to={"/about"}
        className={activeLink === "/about" ? styles.active : styles.link}
        onClick={() => handleActive("/about")}
      >
        <div className={styles.icon}>
          <FaHome />
        </div>
        <div className={styles.link_text}>About</div>
      </NavLink>
      <NavLink
        to={"/menu"}
        className={activeLink === "/menu" ? styles.active : styles.link}
        onClick={() => handleActive("/menu")}
      >
        <div className={styles.icon}>
          <FaHome />
        </div>
        <div className={styles.link_text}>Menu</div>
      </NavLink>
    </div>
  );
};
