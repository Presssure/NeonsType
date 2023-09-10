import styles from "./ChallengeSection.module.css";
import TestContainer from "./../TestContainer/TestContainer";

const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
}) => {
  return (
    <div className={styles.challengeSectionContainer}>
      <h1 data-aos="fade-down" className={styles.challengeSectionHeader}>
        Take a speed test now!
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
      />
    </div>
  );
};

export default ChallengeSection;
