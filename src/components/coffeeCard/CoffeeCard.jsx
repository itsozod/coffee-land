/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import styles from "./CoffeeCard.module.css";
import { SearchLoader } from "../../components/searchLoader/SearchLoader";
import { useEffect } from "react";
import { getDatas } from "../../store/features/coffees/coffeesSlice";

export const CoffeeCard = () => {
  const coffees = useSelector((state) => state.coffees.coffees);
  const loader = useSelector((state) => state.coffees.loader);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Coffees");
    dispatch(getDatas());
  }, [dispatch]);
  console.log(coffees);
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
              <button className={styles.order_btn}>Order</button>
            </article>
          ))}
        </div>
      )}
    </>
  );
};
