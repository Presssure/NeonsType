import styles from "./TryAgain.module.css";

const TestContainer = ({ words, characters, wpm, startAgain }) => {
  return (
    <div className={styles.tryAgainContainer}>
      <h1>Test Results</h1>
      <div className={styles.resultsContainer}>
        <p>
          <b>characters: </b> {characters}
        </p>
        <p>
          <b>Words:</b>
          {words}
        </p>
        <p>
          <b>Speed:</b>
          {wpm}
        </p>
      </div>
      <div>
        <button
          onClick={() => startAgain()}
          className={`${styles.endBtn} ${styles.startAgainBtn}`}
        >
          Re-Try
        </button>
        <button
          className={`${styles.endBtn} ${styles.shareBtn}`}
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com/aam",
              "facebook-share-dialog",
              "width=800,height=600"
            );
          }}
        >
          Share
        </button>
        <button
          className={`${styles.endBtn} ${styles.tweetBtn}`}
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?text=theleanprogrammer.com",
              "Twitter",
              "width=800,height=600"
            );
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TestContainer;
