import { useDispatch, useSelector } from "react-redux";
import styles from "./IceCreamCard.module.css";
import { useEffect } from "react";
import { getIceCreams } from "../../store/features/iceCreamSlice/iceCreamSlice";
import { SearchLoader } from "../searchLoader/SearchLoader";

export const IceCreamCard = () => {
  const iceCreams = useSelector((state) => state.iceCreams.iceCreams);
  const iceLoader = useSelector((state) => state.iceCreams.iceLoader);
  console.log(iceCreams);
  const dispatch = useDispatch();
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
              <button className={styles.order_btn}>Order</button>
            </article>
          ))}
        </div>
      )}
    </>
  );
};
