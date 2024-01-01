/* eslint-disable react/prop-types */
import styles from "./Tables.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";

export const Tables = ({ table, onClick, tables }) => {
  const [darkMode] = useDarkMode();
  return (
    <>
      <article
        className={styles.table_container}
        style={{
          border: tables === table.table ? "2px solid red" : "",
          backgroundColor: darkMode ? "#1a193a" : "bisque",
        }}
      >
        <h1 style={{ position: "relative", color: darkMode ? "#fff" : "#000" }}>
          {table.title}
        </h1>
        <button className={styles.btn_img} onClick={onClick}>
          <img className={styles.img_table} src={table.table} alt="Image" />
        </button>
      </article>
    </>
  );
};
