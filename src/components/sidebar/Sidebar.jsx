/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { FaHome } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCoffeeCup } from "react-icons/gi";
import { useState, useEffect } from "react";
export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [open, setOpen] = useState(false);

  const openSidebar = () => {
    setOpen((prev) => !prev);
  };

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
    <div style={{ width: open ? "200px" : "50px" }} className={styles.sidebar}>
      <div className={styles.top_section}>
        <h1
          style={{ display: open ? "block" : "none" }}
          className={styles.logo}
        >
          Logo
        </h1>
        <div className={styles.bars}>
          <RxHamburgerMenu
            style={{ marginLeft: open ? "50px" : "0px" }}
            className={styles.toggle}
            onClick={() => openSidebar()}
          />
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
        <div
          style={{ display: open ? "block" : "none" }}
          className={styles.link_text}
        >
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/about"}
        className={activeLink === "/about" ? styles.active : styles.link}
        onClick={() => handleActive("/about")}
      >
        <div className={styles.icon}>
          <BsFillInfoSquareFill />
        </div>
        <div
          style={{ display: open ? "block" : "none" }}
          className={styles.link_text}
        >
          About
        </div>
      </NavLink>
      <NavLink
        to={"/menu"}
        className={activeLink === "/menu" ? styles.active : styles.link}
        onClick={() => handleActive("/menu")}
      >
        <div className={styles.icon}>
          <GiCoffeeCup />
        </div>
        <div
          style={{ display: open ? "block" : "none" }}
          className={styles.link_text}
        >
          Menu
        </div>
      </NavLink>
    </div>
  );
};
