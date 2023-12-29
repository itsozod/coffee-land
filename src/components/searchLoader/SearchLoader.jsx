import styles from "./SearchLoader.module.css";

export const SearchLoader = () => {
  return (
    <div className={styles.search_loader_container}>
      <span className={styles.search_loader}></span>
    </div>
  );
};

