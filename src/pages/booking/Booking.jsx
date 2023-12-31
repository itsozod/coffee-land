import styles from "./Booking.module.css";
import { tables, dishes } from "../../../tableAndDishes";
import { useState } from "react";
export const Booking = () => {
  const [tablesImg, setTablesImg] = useState("");
  const [foods, setFoods] = useState("");
  return (
    <section className={styles.booking_section}>
      <h1 style={{ position: "relative", color: "#fff" }}>Book a table</h1>
      <article className={styles.img_container}>
        {tables.map((table) => (
          <article className={styles.table_container} key={table.id}>
            <h1 style={{ position: "relative", color: "#000" }}>
              {table.title}
            </h1>
            <button
              className={styles.btn_img}
              onClick={() => setTablesImg(table.table)}
            >
              <img className={styles.img_table} src={table.table} alt="Image" />
            </button>
          </article>
        ))}
      </article>
      <h1 style={{ position: "relative", color: "#fff" }}>Our dishes</h1>
      <article className={styles.dishes_container}>
        {dishes.map((dish) => (
          <article
            className={styles.dish}
            key={dish.id}
            onClick={() => setFoods(dish.food)}
          >
            <p>{dish.title}</p>
            <img className={styles.dish_img} src={dish.food}></img>
          </article>
        ))}
      </article>
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
