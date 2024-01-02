import { useSelector } from "react-redux";
import styles from "./CoffeeCupSelection.module.css";
const coffeeCups = [
  "coffee-cup-bisque.png",
  "coffee-cup-purple.png",
  "coffee-cup-lightblue.png",
];

export const CoffeeCupSelection = () => {
  const coffeeName = useSelector((state) => state.coffeeCup.coffeeName);
  return (
    <>
      {coffeeName &&
        coffeeCups.map((coffeeCup) => (
          <article className={styles.coffeeCupCard} key={coffeeCup}>
            <button className={styles.coffeeCupBtn}>
              <img
                className={styles.coffeeCupImg}
                src={coffeeCup}
                alt="Coffee cup"
              />
            </button>
          </article>
        ))}
    </>
  );
};
