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

    /**
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
         */

    const characters = input.length;
    const words = input.split(" ").length;
    const index = characters - 1;

    // TODO handle an edge case where yuo highlight the word and delete the entire word or words

    // underflow only handling back spaces as of now
    if(index<0){
      this.setState({testInfo:[{testLetter:this.state.testInfo[0].testLetter, status:"notAttempted"},
        ...this.state.testInfo.splice(1)],characters,words})

        return;
    }
    
    // overflow
    if(index>= this.state.selectedParagraph.length){
      this.setState({characters, words});
      return;
    }

    // Make a copy of testInfo

    const testInfo =this.state.testInfo;
    if(!index === this.state.selectedParagraph.length-1){
      testInfo[index+1].status="notAttempted";
    }

    // check for the correct type letters
    const isCorrect=input[index]===testInfo[index].testLetter;

    // update testInfo
    testInfo[index].status=isCorrect ? "correct":"incorrect"

    // update the state
    this.setState({
      testInfo,
      words,
      characters
    })


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
