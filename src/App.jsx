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

  // needs to be arrow function as arrow functions are have the same scope as the parent scope
  // whereas a normal function's scope is defined on run time and will have the scope of the instance that called it(TypingChallenge??)

  handleUserInput = (input) => {
    console.log(input);
    console.log(this.state.timerStarted);
    if (!this.state.timerStarted) {
      this.startTimer();
    }
  };

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // WPM
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;

        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  render() {
    // console.log(this.state.timerStarted);
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
          onInputChange={this.handleUserInput}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
