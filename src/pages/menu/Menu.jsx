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
          backgroundColor: darkMode ? "#003566" : "#fefae0",
          transition: ".3s",
        }}
      >
        <div className={styles.menu_links_container}>
          <NavLink
            style={{
              borderBottom:
                location.pathname === "/coffee-land/menu/coffeecard" ||
                location.pathname === "/coffee-land/menu"
                  ? "2px solid brown"
                  : "none",
              color: darkMode ? "white" : "brown",
            }}
            className={styles.menu_link_tab}
            to={"/coffee-land/menu/coffeecard"}
          >
            Coffees
          </NavLink>
          <NavLink
            style={{
              borderBottom:
                location.pathname === "/coffee-land/menu/icecreamcard"
                  ? "2px solid brown"
                  : "none",
              color: darkMode ? "white" : "brown",
            }}
            className={styles.menu_link_tab}
            to={"/coffee-land/menu/icecreamcard"}
          >
            Ice-creams
          </NavLink>
        </div>
        <Outlet />
      </section>
    </>
  );
};
