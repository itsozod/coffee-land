import styles from "./Booking.module.css";
const images = ["dinner-table-design.png", "wooden-table.png"];
const food = ["egg-salmon-avocado.png"];
import { useState } from "react";
export const Booking = () => {
  const [image, setImage] = useState("");
  const [foods, setFoods] = useState("");
  return (
    <section className={styles.booking_section}>
      <h1 style={{ position: "relative", color: "#fff" }}>Book a table</h1>
      <div className={styles.img_container}>
        {images.map((img) => (
          <button
            className={styles.btn_img}
            key={img}
            onClick={() => setImage(img)}
          >
            <img className={styles.img_coffee} src={img} alt="Image" />
          </button>
        ))}
      </div>
      {food.map((food) => (
        <img
          style={{ width: "130px", position: "relative" }}
          key={food}
          src={food}
          onClick={() => setFoods(food)}
        ></img>
      ))}

      {image ? (
        <div>
          <img className={styles.booked_img} src={image} alt="Image"></img>
          {foods && (
            <img
              style={{ position: "absolute", top: "65%", left: "45%", width: "130px" }}
              src={food}
            ></img>
          )}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
