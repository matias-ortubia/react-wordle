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
import { startSession, sendGuess } from "./api/game";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(null);
  const [sentWords, setSentWords] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const [isVictory, setVictory] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    startSession().then(() => {});
  }, []);

  const handleSubmit = async (word) => {
    const data = await sendGuess(word);

    setSentWords((prevSentWords) => [
      ...prevSentWords,
      { word: word, result: data.result },
    ]);

    if (data.is_game_over) {
      setGameOver(true);
      setVictory(data.is_win);
      setAnswer(data.answer);
    }
  };

  const handleReset = () => {
    setSentWords([]);
    setGameOver(false);
    setVictory(true);
    setAnswer(null);
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
          </ResultMessage>
        ) : (
          <WordInputPanel handleSubmit={handleSubmit} />
        )}
      </div>
      <InstructionsButton openModal={toggleModal}>CÓMO JUGAR</InstructionsButton>
    </main>
  );
}

export default App;
