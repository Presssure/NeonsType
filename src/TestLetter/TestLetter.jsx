import "./TestLetter.css";

const TestLetter = ({ individualLetterInfo }) => {
  const status = individualLetterInfo.status;

  const statusClass = {
    correct: "testLetterCorrect",
    incorrect: "testLetterIncorrect",
    notAttempted: "testLetterNotAttempted",
  }[status];

  return (
    <span className={`testLetter ${statusClass}`}>
      {individualLetterInfo.testLetter}
    </span>
  );
};

export default TestLetter;
