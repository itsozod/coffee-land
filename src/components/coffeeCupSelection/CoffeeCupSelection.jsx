import { useDispatch, useSelector } from "react-redux";
import styles from "./CoffeeCupSelection.module.css";
import { setCoffeeCupImg } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
const coffeeCups = [
  "coffee-cup-bisque.png",
  "coffee-cup-purple.png",
  "coffee-cup-lightblue.png",
];

export const CoffeeCupSelection = () => {
  const coffeeName = useSelector((state) => state.coffeeCup.coffeeName);
  const coffeeCupImg = useSelector((state) => state.coffeeCup.coffeeCupImg);
  const dispatch = useDispatch();
  return (
    <>
      {coffeeName &&
        coffeeCups.map((coffeeCup) => (
          <article
            style={{
              border: coffeeCupImg === coffeeCup ? "2px solid red" : "",
            }}
            className={styles.coffeeCupCard}
            key={coffeeCup}
          >
            <button
              className={styles.coffeeCupBtn}
              onClick={() => dispatch(setCoffeeCupImg(coffeeCup))}
            >
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
