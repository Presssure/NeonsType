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
  onInputChange,
  startAgain,
  finished,
}) => {
  // const timeRemaining = 30;
  console.log(finished);
  return (
    <div className={styles.testContainer}>
      {!finished ? (
        <div data-aos="fade-up" className={styles.typingChallengeContainer}>
          <TypingChallengeContainer
            selectedParagraph={selectedParagraph}
            timerStarted={timerStarted}
            words={words}
            characters={characters}
            wpm={wpm}
            timeRemaining={timeRemaining}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className={styles.tryAgainContainer}>
          <TryAgain
            words={words}
            characters={characters}
            wpm={wpm}
            startAgain={startAgain}
          />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
