import { useDispatch, useSelector } from "react-redux";
import styles from "./IceCreamCard.module.css";
import { useEffect } from "react";
import { getIceCreams } from "../../store/features/iceCreamSlice/iceCreamSlice";
import { SearchLoader } from "../searchLoader/SearchLoader";
import {
  addToCart,
  updateCart,
} from "../../store/features/cartSlice/cartSlice";

export const IceCreamCard = () => {
  const iceCreams = useSelector((state) => state.iceCreams.iceCreams);
  const iceLoader = useSelector((state) => state.iceCreams.iceLoader);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const checkCart = (item) => {
    const checkedCart = cart.some((cartItem) => cartItem.id === item.id);
    if (checkedCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      dispatch(updateCart(updatedCart));
    } else {
      dispatch(addToCart(item));
    }
  };
  useEffect(() => {
    dispatch(getIceCreams());
  }, [dispatch]);
  return (
    <>
      {iceLoader ? (
        <SearchLoader />
      ) : (
        <div className={styles.ice_cream_container}>
          {iceCreams.map((iceCream) => (
            <article className={styles.iceCream_card} key={iceCream.id}>
              <p className={styles.iceCream_title}>{iceCream.title}</p>
              <img
                className={styles.iceCream_img}
                src={iceCream.img}
                alt={iceCream.title}
              />
              <h3>${iceCream.price}</h3>
              <button
                onClick={() => checkCart(iceCream)}
                className={styles.order_btn}
              >
                Add to cart
              </button>
            </article>
          ))}
        </div>
      )}
    </>
  );
};
