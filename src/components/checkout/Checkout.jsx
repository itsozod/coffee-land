/* eslint-disable react/prop-types */
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import styles from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getFromOrders,
  updateOrder,
} from "../../store/features/orderSlice/orderSlice";
import { clearCart } from "../../store/features/cartSlice/cartSlice";
import { useSnackBar } from "../../hooks/snackBarHook/UseSnackBar";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const Checkout = ({ closePayment }) => {
  const [inputData, setInputData] = useState({
    "card-number": "",
    "card-holder": "",
    "expire-month": "",
    "expire-year": "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  const totalPrice = cart.reduce(
    (currentPrice, { price, quantity }) => price * quantity + currentPrice,
    0
  );
  const orders = useSelector((state) => state.orders.orders);
  console.log("Orders", orders);

  const handleAddToOrders = (cart, orders) => {
    if (
      inputData["card-number"] === "" ||
      inputData["card-holder"] === "" ||
      inputData["expire-month"] === "" ||
      inputData["expire-year"] === "" ||
      inputData["cvc"] === ""
    ) {
      handleOpenSnackBar();
      return;
    }
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
      } else {
        dispatch(getFromOrders(cartItems));
        dispatch(clearCart([]));
      }
    }
  };
  return (
    <>
      <div className={styles.checkout_container}>
        <form className={styles.checkout_form}>
          <Button onClick={closePayment} sx={{marginTop: "-15px", marginBottom: "10px"}}>
            <DeleteIcon />
          </Button>
          <h2>Payment</h2>
          <TextField
            sx={{ margin: "10px" }}
            id="card-number"
            name="card-number"
            value={inputData["card-number"]}
            onChange={handleChange}
            label="Card Number"
            variant="filled"
          />
          <TextField
            sx={{ margin: "10px" }}
            id="card-holder"
            name="card-holder"
            value={inputData["card-holder"]}
            onChange={handleChange}
            label="Card Holder"
            variant="filled"
          />
          <div className={styles.expire_container}>
            <TextField
              sx={{ margin: "10px" }}
              id="expiry-month"
              label="MM"
              name="expire-month"
              value={inputData["expire-month"]}
              onChange={handleChange}
              variant="filled"
            />
            <TextField
              sx={{ margin: "10px" }}
              id="expiry-year"
              name="expire-year"
              value={inputData["expire-year"]}
              onChange={handleChange}
              label="YY"
              variant="filled"
            />
            <TextField
              sx={{ margin: "10px" }}
              id="cvc"
              name="cvc"
              value={inputData["cvc"]}
              onChange={handleChange}
              label="CVC"
              variant="filled"
            />
          </div>
          <Button
            variant="contained"
            onClick={() => handleAddToOrders(cart, orders)}
          >
            Pay ${totalPrice}
          </Button>
        </form>
      </div>
      <Snackbar
        open={snackBar}
        autoHideDuration={4000}
        onClose={() => handleCloseSnackBar()}
      >
        <Alert
          onClose={() => handleCloseSnackBar()}
          severity="error"
          sx={{ width: "100%" }}
        >
          Fill the inputs before making a payment!
        </Alert>
      </Snackbar>
    </>
  );
};
