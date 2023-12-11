/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";
// import styles from "./Sidebar.module.css";
// import { FaHome } from "react-icons/fa";
// import { BsFillInfoSquareFill } from "react-icons/bs";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { GiCoffeeCup } from "react-icons/gi";
import { useState, useEffect } from "react";
export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");
  // const [open, setOpen] = useState(false);

  // const openSidebar = () => {
  //   setOpen((prev) => !prev);
  // };

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

  return;
};
