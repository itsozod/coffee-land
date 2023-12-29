import { CoffeeCard } from "../../components/coffeeCard/CoffeeCard";
import styles from "./Menu.module.css";
import { useState, useEffect } from "react";
import { SearchLoader } from "../../components/searchLoader/SearchLoader";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
export const Menu = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("");
  const [darkMode] = useDarkMode();

  useEffect(() => {
    const getCoffees = async () => {
      try {
        console.log("Coffees");
        setLoading(true);
        const response = await fetch("http://localhost:3000/coffees");
        const data = await response.json();
        setCoffees(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    getCoffees();
  }, []);

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
      <section className={styles.menu_section}>
        {loading ? (
          <SearchLoader />
        ) : (
          <div
            className={styles.coffee_container}
            style={{
              backgroundColor: darkMode ? "#1a193a" : "bisque",
              transition: ".3s",
            }}
          >
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                onClick={() => handleClick(coffee.id)}
              />
            ))}
          </div>
        )}
        <h1>Coffee name for Order</h1>
        {order ? <p>Coffee: {order}</p> : <p>You did not order anything yet</p>}
      </section>
    </>
  );
};
