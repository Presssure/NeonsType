import styles from "./Landing.module.css";
import Neon from "./../assets/neon1.png";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingLeft}>
        <h1 className={styles.landingHeader}>Can you type...</h1>
        <div className={styles.typeWriterContainer}>
          <p>fast?</p>
          <p>Correct?</p>
          <p>Quick?</p>
        </div>
      </div>
      <div className={styles.landingRight}>
        <img className={styles.image} src={Neon} alt="neon" />
      </div>
    </div>
  );
};
export default Landing;
