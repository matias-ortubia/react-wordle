import { useState } from "react";
import { WordsContainer, WordInputPanel } from "./components";
import { Word } from "./components";
import { compareWords } from "./utils/compareWord";
import "./App.css";

function App() {
  const [tries, setTries] = useState([]);
  // const [isGameOver, setGameOver] = useState(false);

  const handleSubmit = (word) => {
    const result = compareWords(word);
    setTries((prevTries) => [...prevTries, { word: word, result: result }]);
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
        <WordInputPanel handleSubmit={handleSubmit} />
      </div>
    </main>
  );
}

export default App;
