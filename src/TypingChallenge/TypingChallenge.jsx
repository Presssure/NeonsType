import styles from "./TypingChallenge.module.css";
import TestLetter from "./../TestLetter/TestLetter";

const TypingChallenge = ({
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className={styles.typingChallenge}>
      <div className={styles.timerContainer}>
        <p className={styles.timer}>
          00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className={styles.timerInfo}>
          {!timerStarted ? "Start typing to start the test" : undefined}
        </p>
      </div>

      <div className={styles.textAreaContainer}>
        <div className={styles.textAreaLeft}>
          <div className={`${styles.textArea} ${styles.testParagraph}`}>
            {/* {selectedParagraph} */}
            {testInfo.map((individualLetterInfo, index) => {
              return (
                <TestLetter
                  key={index}
                  individualLetterInfo={individualLetterInfo}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.textAreaRight}>
          <textarea
            onChange={(event) => onInputChange(event.target.value)}
            className={styles.textArea}
            placeholder="Start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
