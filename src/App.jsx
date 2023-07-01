import { useState, useEffect } from "react";
import { WordsContainer, WordInputPanel, ResultMessage, WordsPlaceholder } from "./components";
import { Word } from "./components";
import { compareWords, isAnswer, getWord } from "./utils";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(null);
  const [sentWords, setSentWords] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(1);
  const [isVictory, setVictory] = useState(true);

  useEffect(() => {
    getWord(5).then(response => setAnswer(response));
  }, []);

  const handleReset = async () => {
    setSentWords([]);
    setGameOver(false);
    setTurn(1);
    if (isVictory == false) setVictory(true);
    setAnswer(await getWord(5));
  };
/*
  const cachedHandleReset = useCallback(handleReset, [isVictory]); 

  useEffect(() => {
    document.onkeydown = e => {
      if (isGameOver) {
        if (e.key == "Enter") {
          cachedHandleReset();
        }
      }
    }
  }, [isGameOver, cachedHandleReset]);
*/
  const handleSubmit = (word) => {
    const result = compareWords(word, answer);
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
