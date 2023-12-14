import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <section className={styles.section_home}>
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
  );
};
