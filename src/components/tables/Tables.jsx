/* eslint-disable react/prop-types */
import styles from "./Tables.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { useEffect } from "react";
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
  return (
    <>
      {tableLoader ? (
        <SearchLoader />
      ) : (
        tableDatas.map((table) => (
          <>
            <article
              key={table.id}
              className={styles.table_container}
              style={{
                border: tableImg === table.img ? "2px solid red" : "",
                backgroundColor: darkMode ? "#1a193a" : "bisque",
              }}
            >
              <h1
                style={{
                  position: "relative",
                  color: darkMode ? "#fff" : "#000",
                }}
              >
                {table.name}
              </h1>
              <p>{table.status}</p>
              <button
                className={styles.btn_img}
                onClick={() => dispatch(setTableImg(table.img))}
              >
                <img className={styles.img_table} src={table.img} alt="Image" />
              </button>
            </article>
          </>
        ))
      )}
    </>
  );
};
