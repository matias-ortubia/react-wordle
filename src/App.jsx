import { useState, useEffect } from "react";
import {
  WordsContainer,
  WordInputPanel,
  ResultMessage,
  WordsPlaceholder,
  Title,
  Instructions,
  InstructionsButton
} from "./components";
import { Word } from "./components";
import { compareWords, isAnswer, getWord } from "./utils";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(null);
  const [sentWords, setSentWords] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(1);
  const [isVictory, setVictory] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getWord(5).then((response) => setAnswer(response));
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
    setSentWords((prevSentWords) => [
      ...prevSentWords,
      { word: word, result: result },
    ]);
    setTurn((prevTurn) => prevTurn + 1);

    if (isAnswer(result)) {
      setGameOver(true);
    } else if (turn >= 6) {
      setVictory(false);
      setGameOver(true);
    }
  };

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };
  return (
    <main>
      <Title />
      {isModalOpen && <Instructions handleClose={toggleModal} />}
      <div className="game-container">
        <WordsPlaceholder listLength={6} wordLength={5} />
        <WordsContainer>
          {sentWords.map((word, i) => {
            return (
              <Word result={word.result} key={i}>
                {word.word}
              </Word>
            );
          })}
        </WordsContainer>
        {isGameOver ? (
          <ResultMessage
            bgColor={isVictory ? "victory" : "lose"}
            handleReset={handleReset}
          >
            {isVictory ? (
              <p>¡Ganaste!</p>
            ) : (
              <p>
                Perdiste :( La palabra era <strong>{answer}</strong>
              </p>
            )}
            <p className="reset-message">Reiniciar</p>
          </ResultMessage>
        ) : (
          <WordInputPanel handleSubmit={handleSubmit} />
        )}
      </div>
      <InstructionsButton openModal={toggleModal}>INSTRUCCIONES</InstructionsButton>
    </main>
  );
}

export default App;
