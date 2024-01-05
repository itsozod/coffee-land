import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { NavLink } from "react-router-dom";
import { removeFromCart } from "../../store/features/cartSlice/cartSlice";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);
  const [darkMode] = useDarkMode();
  const totalPrice = cart.reduce(
    (currentPrice, { price, quantity }) => price * quantity + currentPrice,
    0
  );
  console.log(totalPrice);
  const totalQuantity = cart.reduce(
    (currentQuantity, { quantity }) => quantity + currentQuantity,
    0
  );
  console.log(totalQuantity);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      <section
        className={styles.cart_section}
        style={{
          backgroundColor: darkMode ? "#1a193a" : "bisque",
          transition: ".3s",
        }}
      >
        {cart.length === 0 && (
          <div
            className={styles.empty_cart}
            style={{
              color: darkMode ? "white" : "black",
              transition: ".3s",
            }}
          >
            <h3>No items were added yet!</h3>
            <button className={styles.empty_btn}>
              <NavLink className={styles.empty_link} to={"/menu"}>
                Visit our menu page to order!
              </NavLink>
            </button>
          </div>
        )}
        <div className={styles.cart_container}>
          {cart.map((item) => (
            <article key={item.id} className={styles.cart_card}>
              <p>{item.title}</p>
              <img className={styles.cart_img} src={item.img} alt="" />
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item)}>Remove</button>
            </article>
          ))}
        </div>
        <div className={styles.totalContainer}>
          <p>Total: ${totalPrice}</p>
        </div>
      </section>
    </>
  );
};
