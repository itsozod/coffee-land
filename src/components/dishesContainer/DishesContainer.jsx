import styles from "./DishesContainer.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { DishesMenu } from "../../components/dishesMenu/DishesMenu";
import {
  dishes,
  dishesBack,
  drinks,
  drinksBack,
} from "../../../DishesAndDrinks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTableFoodImg,
  setTableDrinkImg,
} from "../../store/features/tablesSlice/tablesSlice";
import { DrinksMenu } from "../drinksMenu/DrinksMenu";

export const DishesContainer = () => {
  const [rotate, setRotate] = useState(false);
  const tableFoodImg = useSelector((state) => state.tables.tableFoodImg);
  const tableDrinkImg = useSelector((state) => state.tables.tableDrinkImg);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => setRotate((prevRotate) => !prevRotate)}
        className={styles.rotate_btn}
      >
        {rotate ? <FaArrowAltCircleLeft /> : <FaArrowAltCircleRight />}
      </button>
      <div className={styles.dishes_container}>
        <div className={styles.container}>
          <div
            className={styles.card}
            style={{ transform: rotate ? "rotateY(180deg)" : "" }}
          >
            <div className={styles.front}>
              {dishes.map((dish) => (
                <DishesMenu
                  key={dish.id}
                  dish={dish}
                  menuFood={tableFoodImg}
                  onClick={() => dispatch(setTableFoodImg(dish.food))}
                />
              ))}
            </div>
            <div className={styles.back} style={{ zIndex: rotate ? "1" : 0 }}>
              {dishesBack.map((dish) => (
                <DishesMenu
                  key={dish.id}
                  dish={dish}
                  menuFood={tableFoodImg}
                  onClick={() => dispatch(setTableFoodImg(dish.food))}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={styles.card}
            style={{ transform: rotate ? "rotateY(180deg)" : "" }}
          >
            <div className={styles.front}>
              {drinks.map((drink) => (
                <DrinksMenu
                  key={drink.id}
                  drink={drink}
                  menuDrink={tableDrinkImg}
                  onClick={() => dispatch(setTableDrinkImg(drink.drink))}
                />
              ))}
            </div>
            <div className={styles.back} style={{ zIndex: rotate ? "1" : 0 }}>
              {drinksBack.map((drink) => (
                <DrinksMenu
                  key={drink.id}
                  drink={drink}
                  menuDrink={tableDrinkImg}
                  onClick={() => dispatch(setTableDrinkImg(drink.drink))}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
