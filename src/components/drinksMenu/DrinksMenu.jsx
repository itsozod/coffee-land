/* eslint-disable react/prop-types */
import styles from "./DrinksMenu.module.css";

export const DrinksMenu = ({ drink, onClick, menuDrink }) => {
  return (
    <>
      <button
        className={styles.drink}
        onClick={onClick}
        style={{ border: menuDrink === drink.drink ? "2px solid red" : "" }}
      >
        <p className={styles.drink_title}>{drink.title}</p>
        <img className={styles.drink_img} src={drink.drink}></img>
      </button>
    </>
  );
};
