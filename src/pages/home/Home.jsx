import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import { useDarkMode } from "../../hooks/UseDarkMode";
export const Home = () => {
  // custom hook to track the state for light/dark mode
  const [darkMode] = useDarkMode();
  console.log("Dark mode", darkMode);
  return (
    <>
      <section className={styles.section_home}>
        <div className={styles.custom_curve}>
          <svg
            className={styles.svg_home}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shape_fill}
              style={{
                fill: darkMode ? "#1a193a" : "bisque",
                transition: ".3s ease",
              }}
            ></path>
          </svg>
        </div>
        <div className={styles.home_container}>
          <img
            className={styles.loader}
            src="coffee-icon.png"
            alt="Coffee-icon"
          />
          <h1 className={styles.home_title}>Welcome to Coffeeland</h1>
          <h1 className={styles.home_info}>Experience Coffee</h1>
          <h1 className={styles.home_info2}>like never before</h1>
          <NavLink className={styles.menuBtnLink} to={"/menu"}>
            Explore menu
          </NavLink>
        </div>
      </section>
      <section
        className={styles.section_home1}
        style={{
          backgroundColor: darkMode ? "#1a193a" : "bisque",
          transition: ".3s ease",
        }}
      >
        <div className={styles.custom_curve1}>
          <svg
            className={styles.svg_home1}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shape_fill1}
              style={{
                fill: darkMode ? "#1a193a" : "bisque",
                transition: ".3s ease",
              }}
            ></path>
          </svg>
        </div>
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
        <div className={styles.pics_container}>
          <div className={styles.layout}>
              <img className={styles.coffee_img1} src="coffee-img1.jpg" alt="" />
              <img className={styles.coffee_img2} src="coffee-img2.jpg" alt="" />
            <img className={styles.coffee_img3} src="coffee-img3.jpg" alt="" />
            <img className={styles.coffee_img4} src="coffee-img4.jpg" alt="" />
            <img className={styles.coffee_img5} src="coffee-img5.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
