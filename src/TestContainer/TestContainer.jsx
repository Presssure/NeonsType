import styles from "./TestContainer.module.css";
import TryAgain from "./../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
}) => {
  // const timeRemaining = 30;
  return (
    <div className={styles.testContainer}>
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className={styles.typingChallengeContainer}>
          <TypingChallengeContainer
            selectedParagraph={selectedParagraph}
            timerStarted={timerStarted}
            words={words}
            characters={characters}
            wpm={wpm}
            timeRemaining={timeRemaining}
            testInfo={testInfo}
          />
        </div>
      ) : (
        <div className={styles.tryAgainContainer}>
          <TryAgain words={words} characters={characters} wpm={wpm} />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
