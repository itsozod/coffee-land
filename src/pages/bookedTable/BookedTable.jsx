import { useSelector } from "react-redux";
import styles from "./BookedTable.module.css";

export const BookedTable = () => {
  const orderedTables = useSelector((state) => state.tables.orderedTables);
  console.log(orderedTables);
  return (
    <section className={styles.booked_table_section}>
      <div className={styles.booked_able_container}>
        {/* Display selected values */}
        {/* <div> */}
        {orderedTables.map((entry) => (
          <div key={entry.id}>
            <p>
              {entry.time.toString()} : {entry.date.toString()}
            </p>
            <img style={{ width: "100px" }} src={entry.tableImg} alt="" />
          </div>
        ))}
        {/* </div> */}
      </div>
    </section>
  );
};
