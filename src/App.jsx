import { useState } from "react";
import { WordsContainer, WordInputPanel } from "./components";
import { Word } from "./components";
import { compareWords, isAnswer } from "./utils";
import "./App.css";
import { ResultMessage } from "./components/resultMessage/ResultMessage";

function App() {
  const [tries, setTries] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const [turnCounter, setTurnCounter] = useState(1);
  const [isVictory, setVictory] = useState(true);

  const handleSubmit = (word) => {
    const result = compareWords(word);
    setTries((prevTries) => [...prevTries, { word: word, result: result }]);
    setTurnCounter(prevTurn => prevTurn + 1);    
    console.log("Words sent: " + turnCounter);

    if (isAnswer(result)) { 
      setGameOver(true);
    }
    else if (turnCounter >= 6) {
      setVictory(false);
      setGameOver(true);
    }
  };

  return (
    <main>
      <div className="game-container">
        <WordsContainer>
          {tries.map((word, i) => {
            return (
              <Word result={word.result} key={i}>
                {word.word}
              </Word>
            );
          })}
        </WordsContainer>
          { isGameOver ? <ResultMessage bgColor={ isVictory ? "victory" : "lose" }>{ isVictory ? "You win!" : "You lose :("}</ResultMessage> :
                      <WordInputPanel handleSubmit={handleSubmit} /> }
      </div>
    </main>
  );
}

export default App;
