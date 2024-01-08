import { useDispatch, useSelector } from "react-redux";
import styles from "./Orders.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { clearOrders } from "../../store/features/orderSlice/orderSlice";
import { Alert, Snackbar } from "@mui/material";
import { useSnackBar } from "../../hooks/snackBarHook/useSnackBar";

export const Orders = () => {
  const [darkMode] = useDarkMode();
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  const navigate = useNavigate();
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  console.log("Orders", orders);
  const handleClearOrders = () => {
    dispatch(clearOrders([]));
    handleOpenSnackBar();
  };
  return (
    <section
      className={styles.orders_section}
      style={{ backgroundColor: darkMode ? "#1a193a" : "bisque" }}
    >
      {orders.length === 0 && (
        <div
          className={styles.empty_order_container}
          style={{ color: darkMode ? "white" : "brown" }}
        >
          <h2>No orders were made yet!</h2>
          <Button
            variant="contained"
            className={styles.empty_order_btn}
            onClick={() => navigate("/cart")}
          >
            Visit cart
          </Button>
        </div>
      )}
      <div className={styles.orders_container}>
        {orders.map((order) => (
          <article className={styles.order_card} key={order.id}>
            <p>{order.title}</p>
            <img
              className={styles.order_img}
              src={order.img}
              alt={order.title}
            />
            <p>Price: ${order.price}</p>
            <p>Quantity: {order.quantity}</p>
          </article>
        ))}
      </div>
      {orders.length > 0 && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"10px"}
        >
          <Button onClick={() => handleClearOrders()} variant="contained">
            Clear Orders
          </Button>
        </Box>
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
          Orders were cleared successfully!
        </Alert>
      </Snackbar>
    </section>
  );
};
