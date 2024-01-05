import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const [darkMode] = useDarkMode();
  return (
    <>
      <section
        className={styles.cart_section}
        style={{
          backgroundColor: darkMode ? "#1a193a" : "bisque",
          transition: ".3s",
        }}
      >
        {cart.length === 0 && <p>No items were added yet!</p>}
        {cart.map((item) => (
          <article key={item.id} className={styles.cart_card}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <img className={styles.cart_img} src={item.img} alt="" />
          </article>
        ))}
      </section>
    </>
  );
};
