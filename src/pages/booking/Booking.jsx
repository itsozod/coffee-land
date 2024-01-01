import styles from "./Booking.module.css";
import { tables, dishes } from "../../../tableAndDishes";
import { useState } from "react";
import { Tables } from "../../components/tables/Tables";
import { DishesMenu } from "../../components/dishesMenu/DishesMenu";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
export const Booking = () => {
  const [tablesImg, setTablesImg] = useState("");
  const [menuFood, setMenuFood] = useState("");
  const [rotate, setRotate] = useState(false);
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
          <button>Book</button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
