/* eslint-disable react/prop-types */
import styles from "./DishesMenu.module.css";

export const DishesMenu = ({ dish, onClick }) => {
  return (
    <>
      <article className={styles.dish} onClick={onClick}>
        <p>{dish.title}</p>
        <img className={styles.dish_img} src={dish.food}></img>
      </article>
    </>
  );
};
