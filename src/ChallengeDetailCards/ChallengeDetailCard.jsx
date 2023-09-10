import styles from "./ChallengeDetailCard.module.css";

const ChallengeDetailCard = ({ cardName, cardValue }) => {
  return (
    <div className={styles.detailsCardContainer}>
      <div className={styles.cardNames}>{cardName}</div>
      <div className={styles.cardValues}>{cardValue}</div>
    </div>
  );
};

export default ChallengeDetailCard;
