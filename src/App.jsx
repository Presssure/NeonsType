import React from "react";
// import neon from "./assets/neon2.webp";
import styles from "./App.module.css";
import Nav from "./Nav/Nav";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import ChallengeSection from "./ChallengeSection/ChallengeSection";

const TotalTime = 60;

const url = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component {
  // const [selectedParagraph, setSelectedParagraph] = useState(
  //   "Just a test paragrpah!"
  // );
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timeRemaining, setTimeRemaining] = useState(TotalTime);
  // const [words, setWords] = useState(0);
  // const [characters, setCharacters] = useState(0);
  // const [wpm, setWpm] = useState(0);

  state = {
    selectedParagraph: "Hello World!",
    testInfo: [],
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
  };

  componentDidMount() {
    // fetch(url)
    //   .then((response) => response.text())
    //   .then((data) => {
    //     this.setState({ selectedParagraph: data });
    //   });

    const selectedParagraphArray = this.state.selectedParagraph.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    this.setState({ testInfo: testInfo });
  }

  render() {
    return (
      <div className={`${styles.app}`}>
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
