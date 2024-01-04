// import { useSelector } from "react-redux";
// import styles from "./Cart.module.css";
import { useCart } from "react-use-cart";

export const Cart = () => {
  const { items, totalItems, cartTotal } = useCart();
  console.log(items);
  console.log(totalItems);
  console.log(cartTotal);
  // const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
  return (
    <>
      {/* <section className={styles.order_section}>
        {cart.length === 0 && <p>No items were added yet!</p>}
        {cart.map((item) => (
          <article key={item.id}>
            <p>{item.coffeeName}</p>
            <img style={{ width: "100px" }} src={item.coffeeCupImg} alt="" />
          </article>
        ))}
      </section> */}
    </>
  );
};
