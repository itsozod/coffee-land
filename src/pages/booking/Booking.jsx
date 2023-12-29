import styles from "./Booking.module.css";
const images = ["black-coffee.jpg", "cappucino.jpg", "americano.jpg"];
import { useState } from "react";
export const Booking = () => {
  const [image, setImage] = useState("");
  return (
    <section className={styles.booking_section}>
      <h1>Book a table</h1>
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

      {image ? <img className={styles.booked_img} src={image} alt="Image"></img> : ""}
    </section>
  );
};
