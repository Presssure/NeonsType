import styles from "./TypingChallengeContainer.module.css";
import ChallengeDetailCard from "../ChallengeDetailCards/ChallengeDetailCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
}) => {
  return (
    <div className={styles.typingChallengeContainer}>
      <div className={styles.detailsContainer}>
        <ChallengeDetailCard cardName="Words" cardValue={words} />
        <ChallengeDetailCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailCard cardName="Speed" cardValue={wpm} />
      </div>

      <div className={styles.typeWriterContainer}>
        <TypingChallenge
          selectedParagraph={selectedParagraph}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          testInfo={testInfo}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
