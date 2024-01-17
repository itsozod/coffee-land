import { TextField } from "@mui/material";
import styles from "./Checkout.module.css";

export const Checkout = () => {
  return (
    <div className={styles.checkout_container}>
      <form className={styles.checkout_form}>
        <TextField
          sx={{ margin: "10px", width: "100%" }}
          id="card-number"
          label="Card Number"
          variant="filled"
        />
        <TextField
          sx={{ margin: "10px", width: "100%" }}
          id="card-holder"
          label="Card Holder"
          variant="filled"
        />
        <div className={styles.expire_container}>
          <TextField
            sx={{ margin: "10px", width: "calc(33.33% - 20px)" }}
            id="expiry-month"
            label="MM"
            variant="filled"
          />
          <TextField
            sx={{ margin: "10px", width: "calc(33.33% - 20px)" }}
            id="expiry-year"
            label="YY"
            variant="filled"
          />
          <TextField
            sx={{ margin: "10px", width: "calc(33.33% - 20px)" }}
            id="cvc"
            label="CVC"
            variant="filled"
          />
        </div>
      </form>
    </div>
  );
};
