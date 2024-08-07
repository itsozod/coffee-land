/* eslint-disable react/prop-types */
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { useDispatch, useSelector } from "react-redux";
import { Button, Switch, styled } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { setLoggedIn } from "../../store/features/signInSlice/signInSlice";
import { memo, useCallback, useMemo } from "react";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 53,
  height: 30,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 25,
    height: 26,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const navLinks = [
  {
    path: "/menu",
    name: "Menu",
  },
  {
    path: "/cart",
    name: "Cart",
  },
  {
    path: "/orders",
    name: "Orders",
  },
  {
    path: "/booking",
    name: "Book",
  },
  {
    path: "/bookedtable",
    name: "Tables",
  },
  {
    path: "/chatbot",
    name: "Chatbot",
  },
];

const useCart = () => {
  return useSelector((state) => state.cart.cart);

}
const useOrders = () => {
  return useSelector((state) => state.orders.orders);
}
const useOrderedTables = () => {
  return useSelector((state) => state.tables.orderedTables);
}
const useCartQuantity = () => {
  const cart = useSelector((state) => state.cart.cart);
  return useMemo(() => cart.reduce((currentQuantity, { quantity }) => quantity + currentQuantity, 0), [cart]);
};

const useOrdersQuantity = () => {
  const orders = useSelector((state) => state.orders.orders);
  return useMemo(() => orders.reduce((currentOrderQuantity, { quantity }) => quantity + currentOrderQuantity, 0), [orders]);
};

const useOrderedTablesLength = () => {
  const orderedTables = useSelector((state) => state.tables.orderedTables);
  return useMemo(() => orderedTables.length, [orderedTables]);
};

const useLoggedIn = () => {
  return useSelector((state) => state.signin.loggedIn);
};

const Navbar = memo(({ onClick }) => {
  // custom hook to track the state for light/dark mode
  const [darkMode, toggleDarkMode] = useDarkMode();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useCart()
  const totalCartQuantity = useCartQuantity();
  const totalOrdersQuantity = useOrdersQuantity();
  const orderedTablesLength = useOrderedTablesLength();
  const loggedIn = useLoggedIn();
  const orders = useOrders()
  const orderedTables = useOrderedTables()


  const handleLogOut = useCallback(() => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("cart");
    localStorage.removeItem("orders");
    localStorage.removeItem("orderedtables");
    navigate("/");
    window.location.reload();
    dispatch(setLoggedIn(false));
  }, [dispatch, navigate]);
  return (
    <>
      <nav
        className={styles.nav}
        style={{
          backgroundColor: darkMode ? "#003566" : "#fefae0",
          transition: ".3s ease",
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "#15cdfc" } : {};
          }}
          className={darkMode ? styles.navLinkHomeDark : styles.navLinkHome}
          to={"/"}
        >
          <h3>Coffeeland</h3>
          <img className={styles.coffee_img} src="coffee-icon.png" alt="logo" />
        </NavLink>

        <FaBars
          className={styles.faBars}
          onClick={onClick}
          color={darkMode ? "white" : "black"}
        />
        <ul className={styles.nav_menu}>
          {navLinks.map((navLink, idx) => (
            <li className={styles.link_links} key={idx}>
              <NavLink
                style={({ isActive }) => {
                  return isActive
                    ? { color: "#15cdfc", backgroundColor: "darkred" }
                    : {};
                }}
                className={darkMode ? styles.navLinkDark : styles.navLink}
                to={navLink.path}
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
          <li className={styles.cart_length}>
            {cart.length > 0 && totalCartQuantity}
          </li>
          <li className={styles.order_length}>
            {orders.length > 0 && totalOrdersQuantity}
          </li>
          <li className={styles.ordered_tables_length}>
            {orderedTables.length > 0 && orderedTablesLength}
          </li>
          {loggedIn ? (
            <Button
              sx={{ marginLeft: "5px", width: "90px", fontSize: "12px" }}
              variant="contained"
              onClick={() => handleLogOut()}
            >
              Log out
            </Button>
          ) : (
            <Button
              sx={{ marginLeft: "5px", width: "90px", fontSize: "12px" }}
              variant="contained"
              onClick={() => navigate("/signup")}
            >
              Log in
            </Button>
          )}
        </ul>
        <div className={styles.navBtnLink}>
          <FormControlLabel
            control={
              <MaterialUISwitch
                onChange={() => toggleDarkMode()}
                sx={{ m: 1 }}
                checked={darkMode}
              />
            }
          />
        </div>
      </nav>
    </>
  );
});
Navbar.displayName = "Navbar"

export default Navbar
