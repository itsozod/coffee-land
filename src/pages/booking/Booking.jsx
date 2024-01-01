import styles from "./Booking.module.css";
import { tables, dishes } from "../../../tableAndDishes";
import { useState } from "react";
import { Tables } from "../../components/tables/Tables";
import { DishesMenu } from "../../components/dishesMenu/DishesMenu";
export const Booking = () => {
  const [tablesImg, setTablesImg] = useState("");
  const [foods, setFoods] = useState("");
  const [rotate, setRotate] = useState(false);
  return (
    <section className={styles.booking_section}>
      <h1 style={{ position: "relative", color: "#fff" }}>Book a table</h1>
      <article className={styles.img_container}>
        {tables.map((table) => (
          <Tables
            key={table.id}
            table={table}
            onClick={() => setTablesImg(table.table)}
          />
        ))}
      </article>
      <h1 style={{ position: "relative", color: "#fff" }}>Our dishes</h1>
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
                onClick={() => setFoods(dish.food)}
              />
            ))}
          </div>
          <div className={styles.back}>
            {dishes.map((dish) => (
              <DishesMenu
                key={dish.id}
                dish={dish}
                onClick={() => setFoods(dish.food)}
              />
            ))}
          </div>
        </div>
      </div>
      {tablesImg ? (
        <div className={styles.booked_img_container}>
          {foods && <img className={styles.table_dish} src={foods}></img>}
          <img className={styles.booked_img} src={tablesImg} alt="Image"></img>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
