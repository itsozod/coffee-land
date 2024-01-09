import styles from "./Booking.module.css";
import { Tables } from "../../components/tables/Tables";
import { Button, Snackbar, Alert } from "@mui/material";
import { useSnackBar } from "../../hooks/snackBarHook/useSnackBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setTableImg,
  setTableFoodImg,
} from "../../store/features/tablesSlice/tablesSlice";
import { DishesContainer } from "../../components/dishesContainer/DishesContainer";
import { DateTimePicker } from "../../components/dateTimePicker/DateTimePicker";

export const Booking = () => {
  const tableImg = useSelector((state) => state.tables.tableImg);
  const tableFoodImg = useSelector((state) => state.tables.tableFoodImg);
  const dispatch = useDispatch();
  const [
    snackBar,
    handleOpenSnackBar,
    handleCloseErrorSnackBar,
    handleCloseSuccessSnackBar,
  ] = useSnackBar();

  const handleClearTable = () => {
    handleCloseSuccessSnackBar();
    dispatch(setTableImg(""));
    dispatch(setTableFoodImg(""));
  };

  return (
    <section className={styles.booking_section}>
      <h1 style={{ position: "relative", color: "#fff", textAlign: "center" }}>
        Book a table
      </h1>
      <article className={styles.img_container}>
        <Tables />
      </article>
      <h1 style={{ position: "relative", color: "#fff", textAlign: "center" }}>
        Our dishes
      </h1>
      <DishesContainer />
      {tableImg ? (
        <div className={styles.booked_img_container}>
          {tableFoodImg && (
            <img className={styles.table_dish} src={tableFoodImg}></img>
          )}
          <img className={styles.booked_img} src={tableImg} alt="Image"></img>
          <div className={styles.book_table_btn_container}>
            <Button
              sx={{
                backgroundColor: "aqua",
                ":hover": { backgroundColor: "aquamarine" },
              }}
              onClick={() => handleOpenSnackBar()}
            >
              Book Table
            </Button>
            {tableFoodImg ? (
              <Snackbar
                open={snackBar}
                autoHideDuration={4000}
                onClose={() => handleClearTable()}
              >
                <Alert
                  onClose={() => handleClearTable()}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Your table order was accepted successfully, we will contact
                  you!
                </Alert>
              </Snackbar>
            ) : (
              <Snackbar
                open={snackBar}
                autoHideDuration={4000}
                onClose={() => handleCloseErrorSnackBar()}
              >
                <Alert
                  onClose={() => handleCloseErrorSnackBar()}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  Choose a dish before booking your table!
                </Alert>
              </Snackbar>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <DateTimePicker />
    </section>
  );
};
