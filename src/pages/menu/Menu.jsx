import { CoffeeCard } from "../../components/coffeeCard/CoffeeCard";
import styles from "./Menu.module.css";
import { useState, useEffect } from "react";
export const Menu = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(false);

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
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.coffee_container}>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      )}
    </>
  );
};
