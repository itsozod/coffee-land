import { useDispatch, useSelector } from "react-redux";
import styles from "./IceCreamCard.module.css";
import { useEffect } from "react";
import { getIceCreams } from "../../store/features/iceCreamSlice/iceCreamSlice";
import { SearchLoader } from "../../components/searchLoader/SearchLoader";
import {
  addToCart,
  updateCart,
} from "../../store/features/cartSlice/cartSlice";
import { useSnackBar } from "../../hooks/snackBarHook/useSnackBar";
import { Alert, Pagination, Snackbar, Stack } from "@mui/material";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";

export const IceCreamCard = () => {
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  const [darkMode] = useDarkMode();
  const iceCreams = useSelector((state) => state.iceCreams.iceCreams);
  const iceLoader = useSelector((state) => state.iceCreams.iceLoader);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const checkCart = (item) => {
    const checkedCart = cart.some((cartItem) => cartItem.id === item.id);
    if (checkedCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      dispatch(updateCart(updatedCart));
      handleOpenSnackBar();
    } else {
      dispatch(addToCart(item));
      handleOpenSnackBar();
    }
  };
  useEffect(() => {
    dispatch(getIceCreams());
  }, [dispatch]);
  return (
    <>
      {iceLoader ? (
        <SearchLoader />
      ) : (
        <div className={styles.ice_cream_container}>
          {iceCreams.map((iceCream) => (
            <article className={styles.iceCream_card} key={iceCream.id}>
              <p className={styles.iceCream_title}>{iceCream.title}</p>
              <img
                className={styles.iceCream_img}
                src={iceCream.img}
                alt={iceCream.title}
              />
              <h3>${iceCream.price}</h3>
              <button
                onClick={() => checkCart(iceCream)}
                className={styles.order_btn}
              >
                Add to cart
              </button>
            </article>
          ))}
        </div>
      )}
      <Stack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"10px"}
        spacing={2}
      >
        <Pagination
          count={2}
          color="primary"
          onChange={(_e, page) => dispatch(getIceCreams(page))}
          sx={{
            "& .MuiPaginationItem-root": {
              color: darkMode ? "white" : "black",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              color: darkMode ? "black" : "white",
            },
          }}
        />
      </Stack>
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
          Your ice-cream is added to cart!
        </Alert>
      </Snackbar>
    </>
  );
};
