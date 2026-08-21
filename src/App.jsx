import { useState, useEffect, useMemo, useCallback } from "react";
import {
  WordsContainer,
  ResultMessage,
  WordsPlaceholder,
  Title,
  Instructions,
  InstructionsButton,
  CurrentWordRow,
  Keyboard,
} from "./components";
import { Word } from "./components";
import { startSession, sendGuess } from "./api/game";
import { computeLetterStatuses } from "./utils/keyboardStatus";
import "./App.css";

const WORD_LENGTH = 5;

function App() {
  const [answer, setAnswer] = useState(null);
  const [sentWords, setSentWords] = useState([]);
  const [buffer, setBuffer] = useState("");
  const [isGameOver, setGameOver] = useState(false);
  const [isVictory, setVictory] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    startSession().then(() => {});
  }, []);

  // Se recalcula solo cuando cambia sentWords, no en cada letra tipeada
  const letterStatuses = useMemo(
    () => computeLetterStatuses(sentWords),
    [sentWords]
  );

  const handleSubmit = useCallback(async (word) => {
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
  }, []);

  const isValidWord = useCallback(
    (word) => word.length === WORD_LENGTH && /^[a-zñ]+$/i.test(word),
    []
  );

  const handleKeyPress = useCallback((letter) => {
    setBuffer((prev) => (prev.length >= WORD_LENGTH ? prev : prev + letter));
  }, []);

  const handleDelete = useCallback(() => {
    setBuffer((prev) => prev.slice(0, -1));
  }, []);

  const handleEnter = useCallback(() => {
    if (!isValidWord(buffer)) return;
    handleSubmit(buffer.toLowerCase());
    setBuffer("");
  }, [buffer, isValidWord, handleSubmit]);

  const handleReset = () => {
    setSentWords([]);
    setBuffer("");
    setGameOver(false);
    setVictory(true);
    setAnswer(null);
  };

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handlePhysicalKey = (e) => {
      if (isGameOver) return;

      if (e.key === "Enter") {
        handleEnter();
      } else if (e.key === "Backspace") {
        handleDelete();
      } else if (/^[a-zñ]$/i.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handlePhysicalKey);
    return () => window.removeEventListener("keydown", handlePhysicalKey);
  }, [buffer, isGameOver, handleEnter, handleKeyPress, handleDelete]);

  return (
    <main>
      <Title />
      {isModalOpen && <Instructions handleClose={toggleModal} />}
      <div className="game-container">
        <WordsPlaceholder listLength={6} wordLength={WORD_LENGTH} />
        <WordsContainer>
          {sentWords.map((word, i) => (
            <Word result={word.result} key={i}>
              {word.word}
            </Word>
          ))}
          {!isGameOver && (
            <CurrentWordRow buffer={buffer} wordLength={WORD_LENGTH} />
          )}
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
          <Keyboard
            letterStatuses={letterStatuses}
            onKeyPress={handleKeyPress}
            onEnter={handleEnter}
            onDelete={handleDelete}
          />
        )}
      </div>
      <InstructionsButton openModal={toggleModal}>CÓMO JUGAR</InstructionsButton>
    </main>
  );
}

export default App;