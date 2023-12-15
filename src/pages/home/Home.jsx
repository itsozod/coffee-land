import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
export const Home = () => {
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
      <section className={styles.section_home1}>
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
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};
