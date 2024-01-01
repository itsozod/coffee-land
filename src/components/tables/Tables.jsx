/* eslint-disable react/prop-types */
import styles from "./Tables.module.css";

export const Tables = ({ table, onClick }) => {
  return (
    <>
      <article className={styles.table_container}>
        <h1 style={{ position: "relative", color: "#000" }}>{table.title}</h1>
        <button className={styles.btn_img} onClick={onClick}>
          <img className={styles.img_table} src={table.table} alt="Image" />
        </button>
      </article>
    </>
  );
};
