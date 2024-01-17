import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/features/cartSlice/cartSlice";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Checkout } from "../../components/checkout/Checkout";
import { useState } from "react";
import { useSnackBar } from "../../hooks/snackBarHook/UseSnackBar";
import { Alert, Snackbar } from "@mui/material";

export const Cart = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState(false);
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
    handleOpenSnackBar();
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
            <h2 style={{ color: darkMode ? "white" : "brown" }}>
              No items were added yet!
            </h2>
            <Button
              variant="contained"
              sx={{ margin: "10px" }}
              onClick={() => navigate("/menu")}
            >
              Visit our menu page
            </Button>
          </div>
        )}
        <div className={styles.full_container}>
          <div className={styles.cart_container}>
            {cart.map((item) => (
              <article key={item.id} className={styles.cart_card}>
                <p>{item.title}</p>
                <img className={styles.cart_img} src={item.img} alt="" />
                <p>Price: ${item.price}</p>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "12px", margin: "10px" }}
                  onClick={() => handleDecQuantity(item)}
                >
                  -
                </Button>
                <p>Quantity: {item.quantity}</p>
                <Button
                  sx={{ borderRadius: "12px", margin: "10px" }}
                  variant="contained"
                  onClick={() => handleIncQuantity(item)}
                >
                  +
                </Button>
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
                  onClick={() => setPayment(true)}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Checkout
                </Button>
                {payment ? (
                  <Checkout closePayment={() => setPayment(false)} />
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
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
            Item was removed from cart!
          </Alert>
        </Snackbar>
      </section>
    </>
  );
};
