import styles from "./Footer.module.css";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 style={{ color: "brown" }}>Our socials</h2>
      <div className={styles.socials_container}>
        <Facebook sx={{ fontSize: "35px" }} className={styles.facebook} />
        <Instagram sx={{ fontSize: "35px" }} className={styles.insta} />
        <Twitter sx={{ fontSize: "35px" }} className={styles.twitter} />
        <YouTube sx={{ fontSize: "35px" }} className={styles.youtube} />
      </div>
      <div className={styles.github_container}>
        <h3>
          Copyright &copy; <span>{new Date().getFullYear()}</span> itsozod
        </h3>
        <a
          href="https://github.com/itsozod"
          rel="noreferrer"
          target="_blank"
          className={styles.github_link}
        >
          <GitHub
            sx={{
              transition: "0.3s ease-in-out",
              "&:hover": {
                transform: "rotate(360deg) scale(1.2)",
              },
            }}
          />
        </a>
      </div>
    </footer>
  );
};
