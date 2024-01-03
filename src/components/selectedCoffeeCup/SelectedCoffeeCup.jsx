import { useSelector, useDispatch } from "react-redux";
import styles from "./SelectedCoffeeCup.module.css";
import { v4 as uuid } from "uuid";
import { addToCart } from "../../store/features/cartSlice/cartSlice";

export const SelectedCoffeeCup = () => {
  const coffeeCupImg = useSelector((state) => state.coffeeCup.coffeeCupImg);
  const coffeeName = useSelector((state) => state.coffeeCup.coffeeName);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log("cart:", cart);

  const handleAddToCart = () => {
    const coffeeItem = {
      id: uuid(),
      coffeeName,
      coffeeCupImg,
    };
    dispatch(addToCart(coffeeItem));
  };
  return (
    <>
      {coffeeName && (
        <article className={styles.selectedCoffeeCup}>
          <p>{coffeeName}</p>
          <img
            className={styles.selectedCoffeeCupImg}
            src={coffeeCupImg}
            alt="Selected Coffee Cup"
          />
          <button onClick={() => handleAddToCart()}>Add to cart</button>
        </article>
      )}
    </>
  );
};
