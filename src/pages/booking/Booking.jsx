import styles from "./Booking.module.css";
import { tables, dishes, dishesBack } from "../../../tableAndDishes";
import { useState } from "react";
import { Tables } from "../../components/tables/Tables";
import { DishesMenu } from "../../components/dishesMenu/DishesMenu";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Button, Snackbar, Alert } from "@mui/material";
import { useSnackBar } from "../../hooks/snackBarHook/useSnackBar";

export const Booking = () => {
  const [tablesImg, setTablesImg] = useState("");
  const [menuFood, setMenuFood] = useState("");
  const [rotate, setRotate] = useState(false);
  const [
    snackBar,
    handleOpenSnackBar,
    handleCloseErrorSnackBar,
    handleCloseSuccessSnackBar,
  ] = useSnackBar();

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
          <div className={styles.back} style={{ zIndex: rotate ? "1" : 0 }}>
            {dishesBack.map((dish) => (
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
              onClick={() => handleOpenSnackBar()}
            >
              Book Table
            </Button>
            {menuFood ? (
              <Snackbar
                open={snackBar}
                autoHideDuration={6000}
                onClose={() =>
                  handleCloseSuccessSnackBar(setTablesImg, setMenuFood)
                }
              >
                <Alert
                  onClose={() =>
                    handleCloseSuccessSnackBar(setTablesImg, setMenuFood)
                  }
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
                autoHideDuration={6000}
                onClose={handleCloseErrorSnackBar}
              >
                <Alert
                  onClose={handleCloseErrorSnackBar}
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
