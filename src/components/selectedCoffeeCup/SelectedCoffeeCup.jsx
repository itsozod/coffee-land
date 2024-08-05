import { useSelector, useDispatch } from "react-redux";
import styles from "./SelectedCoffeeCup.module.css";
import { v4 as uuid } from "uuid";
import {
  addToCart,
  updateCart,
} from "../../store/features/cartSlice/cartSlice";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { useSnackBar } from "../../hooks/snackBarHook/UseSnackBar";
import { Alert, Snackbar } from "@mui/material";
import { memo, useCallback, useMemo } from "react";

const SelectedCoffeeCup = memo(() => {
  console.log("Render");
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  // Combine selectors into a single call
  const { coffeeCupImg, coffeeName, coffeePrice, coffeeQuantity, cart, loggedIn } = useSelector((state) => ({
    coffeeCupImg: state.coffeeCup.coffeeCupImg,
    coffeeName: state.coffeeCup.coffeeName,
    coffeePrice: state.coffeeCup.coffeePrice,
    coffeeQuantity: state.coffeeCup.coffeeQuantity,
    cart: state.cart.cart,
    loggedIn: state.signin.loggedIn
  }));

  const dispatch = useDispatch();
  const [darkMode] = useDarkMode();

  const coffeeItem = useMemo(() => ({
    id: uuid(),
    title: coffeeName,
    img: coffeeCupImg,
    price: coffeePrice,
    quantity: coffeeQuantity,
  }), [coffeeName, coffeeCupImg, coffeePrice, coffeeQuantity]);

  const handleAddToCart = useCallback(() => {
    if (!loggedIn) {
      handleOpenSnackBar();
      return;
    }

    const checkedCart = cart.some(
      (cartItem) =>
        cartItem.title === coffeeItem.title && cartItem.img === coffeeItem.img
    );
    if (checkedCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.title === coffeeItem.title && cartItem.img === coffeeItem.img
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      dispatch(updateCart(updatedCart));
      handleOpenSnackBar();
    } else {
      dispatch(addToCart(coffeeItem));
      handleOpenSnackBar();
    }
  }, [dispatch, cart, coffeeItem, loggedIn, handleOpenSnackBar]);
  return (
    <>
      <div className={styles.selected_coffeecup_container}>
        {coffeeName && (
          <article
            className={styles.selectedCoffeeCup}
            style={{ color: darkMode ? "white" : "black" }}
          >
            <h3>{coffeeName}</h3>
            <img
              className={styles.selectedCoffeeCupImg}
              src={coffeeCupImg}
              alt="Selected Coffee Cup"
            />
            <h4>Price: ${coffeePrice}</h4>
            <button
              className={styles.selected_cup_cart}
              onClick={() => handleAddToCart()}
            >
              Add to cart
            </button>
          </article>
        )}
        {loggedIn ? (
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
              Your coffee is added to cart!
            </Alert>
          </Snackbar>
        ) : (
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
              Log in to add items to cart!
            </Alert>
          </Snackbar>
        )}
      </div>
    </>
  );
});
SelectedCoffeeCup.displayName = "SelectedCoffeeCup"

export default SelectedCoffeeCup
