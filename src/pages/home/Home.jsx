import styles from "./Home.module.css";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { WelcomeContainer } from "../../components/welcomeContainer/WelcomeContainer";
import { WhyUsContainer } from "../../components/whyUsContainer/WhyUsContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const Home = () => {
  // custom hook to track the state for light/dark mode
  const [darkMode] = useDarkMode();
  console.log("Dark mode", darkMode);
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("username"));
  const loggedIn = useSelector((state) => state.signin.loggedIn);

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
                fill: darkMode ? "#003566" : "#fefae0",
                transition: ".3s ease",
              }}
            ></path>
          </svg>
        </div>
        <div className={styles.home_container}>
          <img
            className={styles.loader}
            src="/coffee-icon.png"
            alt="Coffee-icon"
          />
          <h1 className={styles.home_title}>
            Welcome to Coffeeland {loggedIn && username}
          </h1>
          <h1 className={styles.home_info}>Experience Coffee</h1>
          <button
            className={styles.menuBtnLink}
            onClick={() => navigate("/menu")}
          >
            Explore menu
          </button>
        </div>
      </section>
      <section
        className={styles.section_home1}
        style={{
          backgroundColor: darkMode ? "#003566" : "#fefae0",
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
                fill: darkMode ? "#003566" : "#fefae0",
                transition: ".3s ease",
              }}
            ></path>
          </svg>
        </div>
        <WelcomeContainer />
        <WhyUsContainer />
      </section>
    </>
  );
};
