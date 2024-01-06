/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import styles from "./CoffeeCard.module.css";
import { SearchLoader } from "../../components/searchLoader/SearchLoader";
import { useEffect } from "react";
import { getDatas } from "../../store/features/coffees/coffeesSlice";
import { setCoffeeName } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { setCoffeePrice } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { setCoffeeQuantity } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { CoffeeCupSelection } from "../coffeeCupSelection/CoffeeCupSelection";
import { SelectedCoffeeCup } from "../selectedCoffeeCup/SelectedCoffeeCup";

export const CoffeeCard = () => {
  const coffees = useSelector((state) => state.coffees.coffees);
  // const coffeeName = useSelector((state) => state.coffeeCup.coffeeName);
  const loader = useSelector((state) => state.coffees.loader);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Coffees");
    dispatch(getDatas());
  }, [dispatch]);
  console.log(coffees);

  const handleClick = (id) => {
    console.log("Id:", id);
    const orderedCoffee = coffees.map((coffee) => {
      if (coffee.id === id) {
        dispatch(setCoffeeName(coffee.title));
        dispatch(setCoffeePrice(coffee.price));
        dispatch(setCoffeeQuantity(coffee.quantity));
      } else {
        return coffee;
      }
    });
    return orderedCoffee;
  };
  return (
    <>
      {loader ? (
        <SearchLoader />
      ) : (
        <div className={styles.coffee_container}>
          {coffees.map((coffee) => (
            <article className={styles.coffee_card} key={coffee.id}>
              <p className={styles.coffee_title}>{coffee.title}</p>
              <img
                className={styles.coffee_img}
                src={coffee.img}
                alt={coffee.title}
              />
              <h3>${coffee.price}</h3>
              <button
                onClick={() => handleClick(coffee.id)}
                className={styles.order_btn}
              >
                Order
              </button>
            </article>
          ))}
        </div>
      )}
      <CoffeeCupSelection />
      <SelectedCoffeeCup />
    </>
  );
};
