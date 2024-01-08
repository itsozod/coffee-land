import styles from "./Menu.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { NavLink, Outlet, useLocation } from "react-router-dom";
export const Menu = () => {
  const [darkMode] = useDarkMode();
  const location = useLocation();

  return (
    <>
      <section
        className={styles.menu_section}
        style={{
          backgroundColor: darkMode ? "#1a193a" : "bisque",
          transition: ".3s",
        }}
      >
        <div className={styles.menu_links_container}>
          <NavLink
            style={{
              borderBottom:
                location.pathname === "/menu/coffeecard" ||
                location.pathname === "/menu"
                  ? "2px solid white"
                  : "none",
              color: darkMode ? "white" : "brown",
            }}
            className={styles.menu_link_tab}
            to={"/menu/coffeecard"}
          >
            Coffees
          </NavLink>
          <NavLink
            style={{
              borderBottom:
                location.pathname === "/menu/icecreamcard"
                  ? "2px solid white"
                  : "none",
              color: darkMode ? "white" : "brown",
            }}
            className={styles.menu_link_tab}
            to={"/menu/icecreamcard"}
          >
            Ice-creams
          </NavLink>
        </div>
        <Outlet />
      </section>
    </>
  );
};
