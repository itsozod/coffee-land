import { useSelector } from "react-redux";
import styles from "./BookedTable.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";

export const BookedTable = () => {
  const [darkMode] = useDarkMode();
  const orderedTables = useSelector((state) => state.tables.orderedTables);
  console.log(orderedTables);
  return (
    <section
      className={styles.booked_table_section}
      style={{
        backgroundColor: darkMode ? "#1a193a" : "bisque",
        transition: ".3s",
      }}
    >
      <div className={styles.ordered_table_container}>
        {/* Display selected values */}
        {orderedTables.map((entry) => (
          <div key={entry.id} className={styles.ordered_table_card}>
            <p>Time: {entry.time.toString()}</p>
            <p>Date: {entry.date.toString()}</p>
            <img
              className={styles.ordered_table_img}
              src={entry.tableImg}
              alt=""
            />
            {entry.tableFoodImg && (
              <img
                className={styles.ordered_tablefood_img}
                src={entry.tableFoodImg}
              ></img>
            )}
            {entry.tableDrinkImg && (
              <img
                className={styles.ordered_tabledrink_img}
                src={entry.tableDrinkImg}
              ></img>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
