// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <>
      <section className={styles.order_section}>
        {cart.length === 0 && <p>No items were added yet!</p>}
        {cart.map((item) => (
          <article key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <img style={{ width: "100px" }} src={item.img} alt="" />
          </article>
        ))}
      </section>
    </>
  );
};
