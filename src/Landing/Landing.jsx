import styles from "./Landing.module.css";
import Neon from "./../assets/neon1.png";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div data-aos="fade-right" className={styles.landingLeft}>
        <h1 className={styles.landingHeader}>Can you type...</h1>
        <div className={styles.typeWriterContainer}>
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?", "Quick?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className={styles.landingRight}>
        <img
          data-aos="fade-left"
          className={styles.image}
          src={Neon}
          alt="neon"
        />
      </div>
    </div>
  );
};
export default Landing;
