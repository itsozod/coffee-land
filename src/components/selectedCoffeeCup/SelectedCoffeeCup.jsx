import { useSelector } from "react-redux";
import styles from "./SelectedCoffeeCup.module.css";

export const SelectedCoffeeCup = () => {
  const coffeeCupImg = useSelector((state) => state.coffeeCup.coffeeCupImg);
  const coffeeName = useSelector((state) => state.coffeeCup.coffeeName);
  return (
    <article className={styles.selectedCoffeeCup}>
      <p>{coffeeName}</p>
      <img
        className={styles.selectedCoffeeCupImg}
        src={coffeeCupImg}
        alt="Selected Coffee Cup"
      />
      <button>Add to cart</button>
    </article>
  );
};
