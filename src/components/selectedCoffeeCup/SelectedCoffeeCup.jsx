import { useSelector, useDispatch } from "react-redux";
import styles from "./SelectedCoffeeCup.module.css";
import { v4 as uuid } from "uuid";
import {
  addToCart,
  updateCart,
} from "../../store/features/cartSlice/cartSlice";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";

export const SelectedCoffeeCup = () => {
  const coffeeCupImg = useSelector((state) => state.coffeeCup.coffeeCupImg);
  const coffeeName = useSelector((state) => state.coffeeCup.coffeeName);
  const coffeePrice = useSelector((state) => state.coffeeCup.coffeePrice);
  const coffeeQuantity = useSelector((state) => state.coffeeCup.coffeeQuantity);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [darkMode] = useDarkMode();
  console.log("cart:", cart);

  const handleAddToCart = () => {
    const coffeeItem = {
      id: uuid(),
      title: coffeeName,
      img: coffeeCupImg,
      price: coffeePrice,
      quantity: coffeeQuantity,
    };
    const checkedCart = cart.some(
      (cartItem) =>
        cartItem.title === coffeeItem.title && cartItem.img === coffeeItem.img
    );
    if (checkedCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.title === coffeeItem.title && cartItem.img === coffeeItem.img
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      dispatch(updateCart(updatedCart));
    } else {
      dispatch(addToCart(coffeeItem));
    }
  };
  return (
    <>
      {coffeeName && (
        <article
          className={styles.selectedCoffeeCup}
          style={{ color: darkMode ? "white" : "black" }}
        >
          <p>{coffeeName}</p>
          <img
            className={styles.selectedCoffeeCupImg}
            src={coffeeCupImg}
            alt="Selected Coffee Cup"
          />
          <p>Price: ${coffeePrice}</p>
          <button
            className={styles.selected_cup_cart}
            onClick={() => handleAddToCart()}
          >
            Add to cart
          </button>
        </article>
      )}
    </>
  );
};
