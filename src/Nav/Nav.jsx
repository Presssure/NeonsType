import styles from "./Nav.module.css";
import logo from "./../assets/neon-anya.webp";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLeft}>
        <img className={styles.logo} src={logo} alt="logo" />
        <p className={styles.logoText}>NeonType</p>
      </div>
      <div className={styles.navRight}>
        <a
          target="_blank"
          className={styles.navLink}
          href="https://github.com/Presssure/NeonsType"
          rel="noreferrer"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default Nav;
