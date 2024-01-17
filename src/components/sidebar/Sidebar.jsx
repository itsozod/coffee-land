/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../../store/features/signInSlice/signInSlice";

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

export const Sidebar = ({ toggle, onClick }) => {
  // cart
  const cart = useSelector((state) => state.cart.cart);
  const totalCartQuantity = cart.reduce(
    (currentQuantity, { quantity }) => quantity + currentQuantity,
    0
  );

  // orders
  const orders = useSelector((state) => state.orders.orders);
  const totalOrdersQuantity = orders.reduce(
    (currentOrderQuantity, { quantity }) => quantity + currentOrderQuantity,
    0
  );

  // orderedTables
  const orderedTablesLength = useSelector(
    (state) => state.tables.orderedTables
  ).length;
  const orderedTables = useSelector((state) => state.tables.orderedTables);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem("loggedIn");
    dispatch(setLoggedIn(false));
  };
  const loggedIn = useSelector((state) => state.signin.loggedIn);
  console.log(loggedIn);

  const navigate = useNavigate();
  return (
    <div
      style={{ top: toggle ? "0" : "-100%" }}
      className={styles.sidebar}
      onClick={onClick}
    >
      <nav className={styles.sidebar_nav}>
        <div className={styles.sidebar_ul}>
          {navLinks.map((navLink, idx) => (
            <li key={idx} className={styles.side_link}>
              <NavLink
                style={({ isActive }) => {
                  return isActive
                    ? { color: "#15cdfc", backgroundColor: "darkred" }
                    : {};
                }}
                to={navLink.path}
                className={styles.sidebar_link}
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
        </div>
      </nav>
    </div>
  );
};
