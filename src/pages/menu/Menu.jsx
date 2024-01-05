import styles from "./Menu.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
// import { setCoffeeName } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
// import { CoffeeCupSelection } from "../../components/coffeeCupSelection/CoffeeCupSelection";
// import { SelectedCoffeeCup } from "../../components/selectedCoffeeCup/SelectedCoffeeCup";
// import { useCart } from "react-use-cart";
import { CoffeeCard } from "../../components/coffeeCard/CoffeeCard";
import { IceCreamCard } from "../../components/iceCreamCard/IceCreamCard";
import { useState } from "react";
export const Menu = () => {
  const [darkMode] = useDarkMode();
  // const { addItem } = useCart();
  const [show, setShow] = useState(true);
  // console.log(coffees);

  // const handleClick = (id) => {
  //   console.log("Id:", id);
  //   const orderedCoffee = coffees.map((coffee) => {
  //     if (coffee.id === id) {
  //       dispatch(setCoffeeName(coffee.title));
  //     } else {
  //       return coffee;
  //     }
  //   });
  //   return orderedCoffee;
  // };
  return (
    <>
      <section
        className={styles.menu_section}
        style={{
          backgroundColor: darkMode ? "#1a193a" : "bisque",
          transition: ".3s",
        }}
      >
        <div className={styles.menu_btn_container}>
          <button
            style={{ backgroundColor: show ? "lightblue" : "" }}
            className={styles.menu_btn}
            onClick={() => setShow(true)}
          >
            Coffees
          </button>
          <button
            style={{ backgroundColor: !show ? "lightblue" : "" }}
            className={styles.menu_btn}
            onClick={() => setShow(false)}
          >
            Ice-creams
          </button>
        </div>
        {show ? <CoffeeCard /> : <IceCreamCard />}
      </section>
    </>
  );
};

{
  /* get back to this */
}
{
  /* <div className={styles.paginate_container}>
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
        <div className={styles.coffeeCupContainer}>
          <CoffeeCupSelection />
        </div>
        <SelectedCoffeeCup /> */
}
