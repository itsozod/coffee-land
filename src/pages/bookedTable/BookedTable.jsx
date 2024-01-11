import { useDispatch, useSelector } from "react-redux";
import styles from "./BookedTable.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { Button } from "@mui/material";
import { clearOrderedTables } from "../../store/features/tablesSlice/tablesSlice";
import { useNavigate } from "react-router-dom";

export const BookedTable = () => {
  const [darkMode] = useDarkMode();
  const orderedTables = useSelector((state) => state.tables.orderedTables);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(orderedTables);
  return (
    <section
      className={styles.booked_table_section}
      style={{
        backgroundColor: darkMode ? "#1a193a" : "bisque",
        transition: ".3s",
      }}
    >
      {orderedTables.length === 0 && (
        <div
          className={styles.empty_ordered_tables}
          style={{ color: darkMode ? "white" : "black" }}
        >
          <h1>No tables were ordered yet!</h1>
          <Button variant="contained" onClick={() => navigate("/booking")}>
            Visit booking page!
          </Button>
        </div>
      )}
      <div className={styles.ordered_table_container}>
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
      {orderedTables.length > 0 && (
        <div className={styles.clearOrderedTables}>
          <Button
            onClick={() => dispatch(clearOrderedTables([]))}
            variant="contained"
          >
            Clear Tables
          </Button>
        </div>
      )}
    </section>
  );
};
