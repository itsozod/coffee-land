/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
export const Header = ({ onClick }) => {
  return (
    <header className={styles.header}>
      <div onClick={onClick} className={styles.headerInfo}>
        <h1 className={styles.header_title}>Coffeeland</h1>
        <img
          className={styles.coffee_icon}
          src="coffee-icon.png"
          alt="Coffee"
        />
      </div>
    </header>
  );
};
