import styles from "./Menu.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import { CoffeeCupSelection } from "../../components/coffeeCupSelection/CoffeeCupSelection";
// import { SelectedCoffeeCup } from "../../components/selectedCoffeeCup/SelectedCoffeeCup";
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
            }}
            className={styles.menu_link_tab}
            to={"/menu/icecreamcard"}
          >
            Icecreams
          </NavLink>
        </div>
        <Outlet />
      </section>
    </>
  );
};

{
  /* <div className={styles.menu_btn_container}>
          <button
            style={{ backgroundColor: show ? "#fb8500" : "" }}
            className={styles.menu_btn}
            onClick={() => setShow(true)}
          >
            Coffees
          </button>
          <button
            style={{ backgroundColor: !show ? "#fb8500" : "" }}
            className={styles.menu_btn}
            onClick={() => setShow(false)}
          >
            Ice-creams
          </button>
        </div>
        {show ? <CoffeeCard /> : <IceCreamCard />}
        {show && (
          <>
            <div className={styles.coffeeCupContainer}>
              <CoffeeCupSelection />
            </div>
            <SelectedCoffeeCup />
          </>
        )} */
}

{
  /* get back to this */
}
{
  /* <div className={styles.paginate_container}>
          <button
            onClick={() => dispatch(getDatas())}
            className={styles.paginate_btn}
          >
            1
          </button>
          <button
            onClick={() => dispatch(getDatas(2))}
            className={styles.paginate_btn}
          >
            2
          </button>
        </div>
        <div className={styles.coffeeCupContainer}>
          <CoffeeCupSelection />
        </div>
        <SelectedCoffeeCup /> */
}
