import React from "react";
// import neon from "./assets/neon2.webp";
import styles from "./App.module.css";
import Nav from "./Nav/Nav";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import ChallengeSection from "./ChallengeSection/ChallengeSection";
import { SAMPLE_PARAGRAPHS } from "./data/sampleParagraphs";

const TotalTime = 60;

const url = "http://metaphorpsum.com/paragraphs/2/10";

const DefaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
  finished: false,
  highest:0
};

class App extends React.Component {
  // const [selectedParagraph, setSelectedParagraph] = useState(
  //   "Just a test paragrpah!"
  // );
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timeRemaining, setTimeRemaining] = useState(TotalTime);
  // const [words, setWords] = useState(0);
  // const [characters, setCharacters] = useState(0);
  // const [wpm, setWpm] = useState(0);

  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    this.setState({ selectedParagraph: data });

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    this.setState({
      ...DefaultState,
      testInfo: testInfo,
      selectedParagraph: data,
    });
  };

  fetchNewParagraph = () => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        this.setState({ selectedParagraph: data });

        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });

        this.setState({
          ...DefaultState,
          testInfo: testInfo,
          selectedParagraph: data,
        });
      });
  };

  componentDidMount() {
    this.grabParagraph();
  }

  grabParagraph = () => {
    if (this.fetchNewParagraph()) {
    } else {
      this.fetchNewParagraphFallback();
    }
  };

  startAgain = () => {
    this.grabParagraph();
    this.setState({ finished: false });
  };

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


    if(index>this.state.highest){
      this.setState({highest:index});
    }
    
    // check if finished
    if (characters === this.state.testInfo.length) {
      this.setState({ finished: true });
      clearInterval(this.timer);
    }



    // TODO handle an edge case where yuo highlight the word and delete the entire word or words
    
    
    // console.log("Characters:   "+this.state.testInfo[1].testLetter);
    // console.log("Selected Paragraph:    "+this.state.selectedParagraph);
    // console.log(input.length);
    // if(this.state.testInfo[inputlength])




    // underflow
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.splice(1),
        ],
        characters,
        words,
      });

      return;
    }

    // overflow
    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

   

    
    const testInfo = this.state.testInfo;

     // Make a copy of testInfo
    
     // Handles back spaces

    // if (index !== this.state.selectedParagraph.length-1) {
    //   testInfo[index + 1].status = "notAttempted";
    // }
    for(var i=index; i<=this.state.highest;i++){
      testInfo[i+1].status="notAttempted"
    }



    // check for the correct type letters
    const isCorrect = input[index] === testInfo[index].testLetter;

    // update testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    

    // update the state
    this.setState({
      testInfo:testInfo,
      words:words,
      characters:characters,
    });

    if (!this.state.timerStarted) {
      this.startTimer();
    }
  };

  startTimer = () => {
    this.setState({ timerStarted: true });
    this.timer = setInterval(() => {
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
        this.setState({finished:true})
        clearInterval(this.timer);
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
          startAgain={this.startAgain}
          finished={this.state.finished}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
