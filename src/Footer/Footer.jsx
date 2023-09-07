import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <a
        href="https://github.com/Presssure/NeonsType"
        className={styles.footerLink}
        target="_blank"
        rel="noreferrer"
      >
        Looking for e boy
      </a>
    </div>
  );
};

export default Footer;
