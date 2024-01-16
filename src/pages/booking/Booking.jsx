import styles from "./Booking.module.css";
import { Tables } from "../../components/tables/Tables";
import { DishesContainer } from "../../components/dishesContainer/DishesContainer";
import { DateTimePicker } from "../../components/dateTimePicker/DateTimePicker";
import { useSelector } from "react-redux";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";

export const Booking = () => {
  const tableImg = useSelector((state) => state.tables.tableImg);
  const tableFoodImg = useSelector((state) => state.tables.tableFoodImg);
  const tableDrinkImg = useSelector((state) => state.tables.tableDrinkImg);
  const [darkMode] = useDarkMode();
  return (
    <section className={styles.booking_section}>
      <div className={styles.custom_curve}>
        <svg
          className={styles.svg_home}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shape_fill}
            style={{
              fill: darkMode ? "#003566" : "#fefae0",
              transition: ".3s ease",
            }}
          ></path>
        </svg>
      </div>
      <h1
        style={{
          position: "relative",
          color: "#fff",
          textAlign: "center",
          marginTop: "25px",
        }}
      >
        Book a table
      </h1>
      <article className={styles.img_container}>
        <Tables />
      </article>
      <h1
        style={{
          position: "relative",
          color: "#fff",
          textAlign: "center",
          marginTop: "25px",
        }}
      >
        Our dishes and drinks
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
