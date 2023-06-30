import { useState } from "react";
import { WordsContainer, WordInputPanel, ResultMessage, WordsPlaceholder } from "./components";
import { Word } from "./components";
import { compareWords, isAnswer } from "./utils";
import "./App.css";

function App() {
  const [sentWords, setSentWords] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(1);
  const [isVictory, setVictory] = useState(true);

  const handleSubmit = (word) => {
    const result = compareWords(word);
    setSentWords((prevSentWords) => [...prevSentWords, { word: word, result: result }]);
    setTurn(prevTurn => prevTurn + 1);    

    if (isAnswer(result)) { 
      setGameOver(true);
    }
    else if (turn >= 6) {
      setVictory(false);
      setGameOver(true);
    }
  };

  const handleReset = () => {
    setSentWords([]);
    setGameOver(false);
    setTurn(1);
    if (isVictory == false) setVictory(true);
  };

  return (
    <main>
      <div className="game-container">
        <WordsPlaceholder listLength={ 6 } wordLength={ 5 } />
        <WordsContainer>
          { sentWords.map((word, i) => {
            return (
              <Word result={word.result} key={i}>
                {word.word}
              </Word>
            );
          }) }
        </WordsContainer>
        { isGameOver ? <ResultMessage bgColor={ isVictory ? "victory" : "lose" }
                                      handleReset={ handleReset }>
          <p>{ isVictory ? "You win!" : "You lose :("}</p>
          <p className="reset-message">Clic here to play again</p>
        </ResultMessage> :
        <WordInputPanel handleSubmit={handleSubmit} /> }
      </div>
    </main>
  );
}

export default App;
