/* eslint-disable react/prop-types */
import styles from "./Tables.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTables,
  setTableImg,
} from "../../store/features/tablesSlice/tablesSlice";
import { SearchLoader } from "../searchLoader/SearchLoader";

export const Tables = () => {
  const [darkMode] = useDarkMode();
  const dispatch = useDispatch();
  const tableDatas = useSelector((state) => state.tables.tables);
  console.log(tableDatas);
  const tableLoader = useSelector((state) => state.tables.tableLoader);
  const tableImg = useSelector((state) => state.tables.tableImg);

  useEffect(() => {
    dispatch(getTables());
  }, [dispatch]);

  const TablesParser = useMemo(() => {
    return tableDatas.map((table) => (
      <article
        key={table.id}
        className={styles.table_container}
        style={{
          border: tableImg === table.img ? "2px solid red" : "",
          backgroundColor: darkMode ? "#003566" : "#fefae0",
        }}
      >
        <h1
          className={styles.table_status}
          style={{
            color: darkMode ? "#fff" : "#000",
          }}
        >
          {table.status}
        </h1>
        <button
          className={styles.btn_img}
          onClick={() => dispatch(setTableImg(table.img))}
        >
          <img className={styles.img_table} src={table.img} alt="Image" />
        </button>
      </article>
    ))

  }, [tableDatas])
  return (
    <>
      {tableLoader ? (
        <SearchLoader />
      ) : (
        TablesParser)}
    </>
  );
};
