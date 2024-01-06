import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { NavLink } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/features/cartSlice/cartSlice";

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

  const handleIncQuantity = (item) => {
    const checkQuantity = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    dispatch(increaseQuantity(checkQuantity));
  };

  const handleDecQuantity = (item) => {
    const checkQuantity = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity !== 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    const filterQuantity = checkQuantity.filter(
      (cartItem) => cartItem.quantity !== 0
    );
    dispatch(decreaseQuantity(filterQuantity));
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
              <button
                className={styles.quantity_btn}
                onClick={() => handleDecQuantity(item)}
              >
                -
              </button>
              <p>Quantity: {item.quantity}</p>
              <button
                className={styles.quantity_btn}
                onClick={() => handleIncQuantity(item)}
              >
                +
              </button>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button
                className={styles.remove_cart_btn}
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            </article>
          ))}
        </div>
        {cart.length > 0 && (
          <div
            className={styles.totalContainer}
            style={{
              color: darkMode ? "white" : "black",
              transition: ".3s",
            }}
          >
            <p>Total: ${totalPrice}</p>
          </div>
        )}
      </section>
    </>
  );
};
