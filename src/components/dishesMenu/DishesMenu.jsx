/* eslint-disable react/prop-types */
import styles from "./DishesMenu.module.css";

export const DishesMenu = ({ dish, onClick, menuFood }) => {
  return (
    <>
      <article
        className={styles.dish}
        onClick={onClick}
        style={{ border: menuFood === dish.food ? "2px solid red" : "" }}
      >
        <p className={styles.dish_title}>{dish.title}</p>
        <img className={styles.dish_img} src={dish.food}></img>
      </article>
    </>
  );
};
