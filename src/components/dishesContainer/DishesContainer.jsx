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
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTableFoodImg,
  setTableDrinkImg,
} from "../../store/features/tablesSlice/tablesSlice";
import { DrinksMenu } from "../drinksMenu/DrinksMenu";
import { Button } from "@mui/material";

export const DishesContainer = () => {
  const [rotate, setRotate] = useState(false);
  const tableFoodImg = useSelector((state) => state.tables.tableFoodImg);
  const tableDrinkImg = useSelector((state) => state.tables.tableDrinkImg);
  const dispatch = useDispatch();

  const DishesFrontParser = useMemo(() => {
    return dishes.map((dish) => (
      <DishesMenu
        key={dish.id}
        dish={dish}
        menuFood={tableFoodImg}
        onClick={() => dispatch(setTableFoodImg(dish.food))}
      />
    ))
  }, [dishes])

  const DishesBackParser = useMemo(() => {
    return dishesBack.map((dish) => (
      <DishesMenu
        key={dish.id}
        dish={dish}
        menuFood={tableFoodImg}
        onClick={() => dispatch(setTableFoodImg(dish.food))}
      />
    ))
  }, [dishesBack])

  const DrinksFrontParser = useMemo(() => {
    return drinks.map((drink) => (
      <DrinksMenu
        key={drink.id}
        drink={drink}
        menuDrink={tableDrinkImg}
        onClick={() => dispatch(setTableDrinkImg(drink.drink))}
      />
    ))
  }, [drinks])

  const DrinksBackParser = useMemo(() => {
    return drinksBack.map((drink) => (
      <DrinksMenu
        key={drink.id}
        drink={drink}
        menuDrink={tableDrinkImg}
        onClick={() => dispatch(setTableDrinkImg(drink.drink))}
      />
    ))
  }, [drinksBack])

  return (
    <>
      <button
        onClick={() => setRotate((prevRotate) => !prevRotate)}
        className={styles.rotate_btn}
      >
        {rotate ? <FaArrowAltCircleLeft /> : <FaArrowAltCircleRight />}
      </button>
      <div className={styles.clear_container}>
        <Button
          variant="contained"
          sx={{ margin: "5px" }}
          onClick={() => dispatch(setTableFoodImg(""))}
        >
          Clear Dish
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(setTableDrinkImg(""))}
        >
          Clear Drink
        </Button>
      </div>
      <div className={styles.dishes_container}>
        <div className={styles.container}>
          <div
            className={styles.card}
            style={{ transform: rotate ? "rotateY(180deg)" : "" }}
          >
            <div className={styles.front}>
              {DishesFrontParser
              }
            </div>
            <div className={styles.back} style={{ zIndex: rotate ? "1" : 0 }}>
              {DishesBackParser}
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={styles.card}
            style={{ transform: rotate ? "rotateY(180deg)" : "" }}
          >
            <div className={styles.front}>
              {DrinksFrontParser}
            </div>
            <div className={styles.back} style={{ zIndex: rotate ? "1" : 0 }}>
              {DrinksBackParser}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
