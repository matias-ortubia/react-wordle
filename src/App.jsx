import { useState } from "react";
import { WordsContainer, WordInputPanel } from "./components";
import { Word } from "./components";
import { compareWords, isAnswer } from "./utils";
import "./App.css";
import { ResultMessage } from "./components/resultMessage/ResultMessage";

function App() {
  const [tries, setTries] = useState([]);
  const [isGameOver, setGameOver] = useState(false);

  const handleSubmit = (word) => {
    const result = compareWords(word);
    setTries((prevTries) => [...prevTries, { word: word, result: result }]);
    
    if (isAnswer(result)) setGameOver(true);
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
        { isGameOver ? <ResultMessage bgColor="victory">You win!</ResultMessage> :
                      <WordInputPanel handleSubmit={handleSubmit} /> }
      </div>
    </main>
  );
}

export default App;
