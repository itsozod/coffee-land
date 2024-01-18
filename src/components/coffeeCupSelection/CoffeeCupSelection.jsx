import { useDispatch, useSelector } from "react-redux";
import styles from "./CoffeeCupSelection.module.css";
import { setCoffeeCupImg } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
const coffeeCups = [
  "/coffee-cup-bisque.png",
  "/coffee-cup-purple.png",
  "/coffee-cup-lightblue.png",
  "/coffee-cup-full-white.png",
  "/coffee-cup-white-black.png",
  "/coffee-cup-bisque-black.png",
  "/coffee-cup-green.png",
  "/coffee-cup-blue-white.png",
];

export const CoffeeCupSelection = () => {
  const coffeeName = useSelector((state) => state.coffeeCup.coffeeName);
  const coffeeCupImg = useSelector((state) => state.coffeeCup.coffeeCupImg);
  const dispatch = useDispatch();
  const [darkMode] = useDarkMode();
  return (
    <>
      {coffeeName && (
        <>
          <h2
            style={{
              textAlign: "center",
              color: darkMode ? "white" : "brown",
            }}
          >
            Coffee boxes
          </h2>

          <div className={styles.selected_coffee_container}>
            {coffeeCups.map((coffeeCup) => (
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
          </div>
        </>
      )}
    </>
  );
};
