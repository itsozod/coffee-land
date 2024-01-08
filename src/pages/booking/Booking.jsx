import styles from "./Booking.module.css";
import { tables, dishes, dishesBack } from "../../../tableAndDishes";
import { useState } from "react";
import { Tables } from "../../components/tables/Tables";
import { DishesMenu } from "../../components/dishesMenu/DishesMenu";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Button, Snackbar, Alert } from "@mui/material";
import { useSnackBar } from "../../hooks/snackBarHook/useSnackBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setTableImg,
  setTableFoodImg,
} from "../../store/features/tablesSlice/tablesSlice";

export const Booking = () => {
  const [rotate, setRotate] = useState(false);
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
      <h1 style={{ position: "relative", color: "#fff" }}>Book a table</h1>
      <article className={styles.img_container}>
        {tables.map((table) => (
          <Tables
            key={table.id}
            tables={tableImg}
            table={table}
            onClick={() => dispatch(setTableImg(table.table))}
          />
        ))}
      </article>
      <h1 style={{ position: "relative", color: "#fff" }}>Our dishes</h1>
      <button
        onClick={() => setRotate((prevRotate) => !prevRotate)}
        className={styles.rotate_btn}
      >
        {rotate ? <FaArrowAltCircleLeft /> : <FaArrowAltCircleRight />}
      </button>
      <div className={styles.container}>
        <div
          className={styles.card}
          style={{ transform: rotate ? "rotateY(180deg)" : "" }}
        >
          <div className={styles.front}>
            {dishes.map((dish) => (
              <DishesMenu
                key={dish.id}
                dish={dish}
                menuFood={tableFoodImg}
                onClick={() => dispatch(setTableFoodImg(dish.food))}
              />
            ))}
          </div>
          <div className={styles.back} style={{ zIndex: rotate ? "1" : 0 }}>
            {dishesBack.map((dish) => (
              <DishesMenu
                key={dish.id}
                dish={dish}
                menuFood={tableFoodImg}
                onClick={() => dispatch(setTableFoodImg(dish.food))}
              />
            ))}
          </div>
        </div>
      </div>
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
    </section>
  );
};
