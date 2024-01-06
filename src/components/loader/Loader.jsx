import styles from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src="/coffee-gif.gif" alt="loader" />
    </div>
  );
};
