import styles from "./Booking.module.css";
import { tables, dishes } from "../../../tableAndDishes";
import { useState } from "react";
import { Tables } from "../../components/tables/Tables";
import { DishesMenu } from "../../components/dishesMenu/DishesMenu";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Button, Snackbar, Alert } from "@mui/material";

export const Booking = () => {
  const [tablesImg, setTablesImg] = useState("");
  const [menuFood, setMenuFood] = useState("");
  const [rotate, setRotate] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleBookBtn = () => {
    setOpenSnackBar(true);
  };

  const handleCloseSuccess = () => {
    setOpenSnackBar(false);
    setTimeout(() => {
      setTablesImg("");
      setMenuFood("");
    }, 1500);
  };
  const handleCloseError = () => {
    setOpenSnackBar(false);
  };
  return (
    <section className={styles.booking_section}>
      <h1 style={{ position: "relative", color: "#fff" }}>Book a table</h1>
      <article className={styles.img_container}>
        {tables.map((table) => (
          <Tables
            key={table.id}
            tables={tablesImg}
            table={table}
            onClick={() => setTablesImg(table.table)}
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
                menuFood={menuFood}
                onClick={() => setMenuFood(dish.food)}
              />
            ))}
          </div>
          <div className={styles.back}>
            {dishes.map((dish) => (
              <DishesMenu
                key={dish.id}
                dish={dish}
                menuFood={menuFood}
                onClick={() => setMenuFood(dish.food)}
              />
            ))}
          </div>
        </div>
      </div>
      {tablesImg ? (
        <div className={styles.booked_img_container}>
          {menuFood && <img className={styles.table_dish} src={menuFood}></img>}
          <img className={styles.booked_img} src={tablesImg} alt="Image"></img>
          <div className={styles.book_table_btn_container}>
            <Button
              sx={{
                backgroundColor: "aqua",
                ":hover": { backgroundColor: "aquamarine" },
              }}
              onClick={() => handleBookBtn()}
            >
              Book Table
            </Button>
            {menuFood ? (
              <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={handleCloseSuccess}
              >
                <Alert
                  onClose={handleCloseSuccess}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Your table order was accepted successfully, we will contact
                  you!
                </Alert>
              </Snackbar>
            ) : (
              <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={handleCloseError}
              >
                <Alert
                  onClose={handleCloseError}
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
