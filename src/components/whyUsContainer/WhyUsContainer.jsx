import styles from "./WhyUsContainer.module.css";

export const WhyUsContainer = () => {
  return (
    <>
      <div className={styles.whyus_container}>
        <h2 className={styles.why_us}>Why us</h2>
        <h1 className={styles.special}>What makes our coffee</h1>
      </div>
      <section className={styles.special_container}>
        <article className={styles.special_img_container}>
          <img className={styles.special_img} src="tree.svg" alt="Tree" />
          <h1>Organic Coffee</h1>
          <p>
            Indulge in the pure, rich flavor of organic coffee—a conscientious
            choice that not only delights your palate but also promotes
            sustainability and supports the well-being of both the environment
            and the communities where it is cultivated.
          </p>
        </article>
        <article className={styles.special_img_container}>
          <img className={styles.special_img} src="milk.svg" alt="Milk" />
          <h1>Hand-made Selections</h1>
          <p>
            Savor the unique charm of hand-made selections, where craftsmanship
            meets individuality, offering a delightful experience that
            transcends the mass-produced, embracing the artistry and personal
            touch infused into each carefully crafted item.
          </p>
        </article>
        <article className={styles.special_img_container}>
          <img className={styles.special_img} src="pot.svg" alt="Pot" />
          <h1>Traditional Brewing</h1>
          <p>
            Embark on a journey of flavor with traditional brewing, where
            time-honored techniques transform every cup into a ritual, capturing
            the essence of craftsmanship and the rich heritage of brewing
            excellence.
          </p>
        </article>
      </section>
    </>
  );
};
