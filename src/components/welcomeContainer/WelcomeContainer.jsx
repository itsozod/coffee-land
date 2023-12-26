import styles from "./WelcomeContainer.module.css";

export const WelcomeContainer = () => {
  return (
    <>
      <div className={styles.welcome_container}>
        <div className={styles.welcome_info1}>
          <h3 className={styles.small_welcome}>Welcome to Coffeeland</h3>
          <h1 className={styles.taste_message}>
            Experince a new way to taste coffee
          </h1>
        </div>
        <div className={styles.welcome_info2}>
          <h3 className={styles.sip_message}>
            Sip into a symphony of flavors, where every drop tells a tale of
            roasted perfection.
          </h3>
        </div>
      </div>
      {/*  pics container */}
      <div className={styles.pics_container}>
        <div className={styles.layout}>
          <img className={styles.coffee_img1} src="coffee-img1.jpg" alt="" />
          <img className={styles.coffee_img2} src="coffee-img2.jpg" alt="" />
          <img className={styles.coffee_img3} src="coffee-img3.jpg" alt="" />
          <img className={styles.coffee_img4} src="coffee-img4.jpg" alt="" />
          <img className={styles.coffee_img5} src="coffee-img5.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

