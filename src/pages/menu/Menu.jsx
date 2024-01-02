import { CoffeeCard } from "../../components/coffeeCard/CoffeeCard";
import styles from "./Menu.module.css";
import { useState, useEffect } from "react";
import { SearchLoader } from "../../components/searchLoader/SearchLoader";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { useDispatch, useSelector } from "react-redux";
import { getDatas } from "../../store/features/coffees/coffeesSlice";
export const Menu = () => {
  const coffees = useSelector((state) => state.coffees.coffees);
  const loader = useSelector((state) => state.coffees.loader);
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const [darkMode] = useDarkMode();

  useEffect(() => {
    console.log("Coffees");
    dispatch(getDatas());
  }, [dispatch]);
  console.log(coffees);

  const handleClick = (id) => {
    console.log("Id:", id);
    const orderedCoffee = coffees.map((coffee) => {
      if (coffee.id === id) {
        setOrder(coffee.title);
      } else {
        return coffee;
      }
    });
    return orderedCoffee;
  };
  return (
    <>
      <section
        className={styles.menu_section}
        style={{
          backgroundColor: darkMode ? "#1a193a" : "bisque",
          transition: ".3s",
        }}
      >
        {loader ? (
          <SearchLoader />
        ) : (
          <div className={styles.coffee_container}>
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                onClick={() => handleClick(coffee.id)}
              />
            ))}
          </div>
        )}
        {/* get back to this */}
        <div className={styles.paginate_container}>
          <button
            onClick={() => dispatch(getDatas())}
            className={styles.paginate_btn}
          >
            1
          </button>
          <button
            onClick={() => dispatch(getDatas(2))}
            className={styles.paginate_btn}
          >
            2
          </button>
        </div>
        <h1>Coffee name for Order</h1>
        {order ? <p>Coffee: {order}</p> : <p>You did not order anything yet</p>}
      </section>
    </>
  );
};
