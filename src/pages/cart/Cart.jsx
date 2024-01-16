import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { NavLink } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/features/cartSlice/cartSlice";
import { clearCart } from "../../store/features/cartSlice/cartSlice";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import {
  getFromOrders,
  updateOrder,
} from "../../store/features/orderSlice/orderSlice";
import { Alert, Snackbar } from "@mui/material";
import { useSnackBar } from "../../hooks/snackBarHook/UseSnackBar";

export const Cart = () => {
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);
  const [darkMode] = useDarkMode();
  const totalPrice = cart.reduce(
    (currentPrice, { price, quantity }) => price * quantity + currentPrice,
    0
  );
  console.log(totalPrice);
  const totalQuantity = cart.reduce(
    (currentQuantity, { quantity }) => quantity + currentQuantity,
    0
  );
  console.log(totalQuantity);
  const orders = useSelector((state) => state.orders.orders);
  console.log("Orders", orders);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncQuantity = (item) => {
    const checkQuantity = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    dispatch(increaseQuantity(checkQuantity));
  };

  const handleDecQuantity = (item) => {
    const checkQuantity = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity !== 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    const filterQuantity = checkQuantity.filter(
      (cartItem) => cartItem.quantity !== 0
    );
    dispatch(decreaseQuantity(filterQuantity));
  };
  const handleAddToOrders = (cart, orders) => {
    for (const cartItems of cart) {
      const checkOrder = orders.some(
        (orderItem) => orderItem.id === cartItems.id
      );
      if (checkOrder) {
        const updatedOrder = orders.map((orderItem) =>
          orderItem.id === cartItems.id ||
          (orderItem.title === cartItems.title &&
            orderItem.img === cartItems.img)
            ? {
                ...orderItem,
                quantity: orderItem.quantity + cartItems.quantity,
              }
            : orderItem
        );
        dispatch(updateOrder(updatedOrder));
        dispatch(clearCart([]));
        handleOpenSnackBar();
      } else {
        dispatch(getFromOrders(cartItems));
        dispatch(clearCart([]));
        handleOpenSnackBar();
      }
    }
  };
  return (
    <>
      <section
        className={styles.cart_section}
        style={{
          backgroundColor: darkMode ? "#003566" : "#fefae0",
          transition: ".3s",
        }}
      >
        {cart.length === 0 && (
          <div
            className={styles.empty_cart}
            style={{
              color: darkMode ? "white" : "black",
              transition: ".3s",
            }}
          >
            <h3>No items were added yet!</h3>
            <button className={styles.empty_btn}>
              <NavLink className={styles.empty_link} to={"/menu"}>
                Visit our menu page to order!
              </NavLink>
            </button>
          </div>
        )}
        <div className={styles.cart_container}>
          {cart.map((item) => (
            <article key={item.id} className={styles.cart_card}>
              <p>{item.title}</p>
              <img className={styles.cart_img} src={item.img} alt="" />
              <p>Price: ${item.price}</p>
              <button
                className={styles.quantity_btn}
                onClick={() => handleDecQuantity(item)}
              >
                -
              </button>
              <p>Quantity: {item.quantity}</p>
              <button
                className={styles.quantity_btn}
                onClick={() => handleIncQuantity(item)}
              >
                +
              </button>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <Button
                onClick={() => handleRemoveItem(item)}
                variant="contained"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </article>
          ))}
        </div>
        {cart.length > 0 && (
          <>
            <div
              className={styles.totalContainer}
              style={{
                color: darkMode ? "white" : "black",
                transition: ".3s",
              }}
            >
              <p>Total: ${totalPrice}</p>
            </div>
            <div className={styles.checkout_container}>
              <Button
                onClick={() => handleAddToOrders(cart, orders)}
                variant="contained"
                endIcon={<SendIcon />}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
        <Snackbar
          open={snackBar}
          autoHideDuration={4000}
          onClose={() => handleCloseSnackBar()}
        >
          <Alert
            onClose={() => handleCloseSnackBar()}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your order was accepted, check orders tab to see your orders!
          </Alert>
        </Snackbar>
      </section>
    </>
  );
};
