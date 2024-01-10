import styles from "./Booking.module.css";
import { Tables } from "../../components/tables/Tables";
import { DishesContainer } from "../../components/dishesContainer/DishesContainer";
import { DateTimePicker } from "../../components/dateTimePicker/DateTimePicker";
import { useSelector } from "react-redux";

export const Booking = () => {
  const tableImg = useSelector((state) => state.tables.tableImg);
  const tableFoodImg = useSelector((state) => state.tables.tableFoodImg);
  const tableDrinkImg = useSelector((state) => state.tables.tableDrinkImg);

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
            <>
              <img className={styles.table_dish} src={tableFoodImg}></img>
            </>
          )}
          {tableDrinkImg && (
            <>
              <img className={styles.table_drink} src={tableDrinkImg}></img>
            </>
          )}
          <img className={styles.booked_img} src={tableImg} alt="Image"></img>
        </div>
      ) : null}
      <DateTimePicker />
    </section>
  );
};
