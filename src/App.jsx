import { useState } from 'react';
import { WordsContainer, WordInputPanel } from './components';
import { Word } from './components';
import { compareWords } from './utils/compareWord';
import './App.css';

function App() {
  /*const [words, setWords] = useState([]);
  const [currentResult, setCurrentResult] = useState([]);
*/
  const [tries, setTries] = useState([]);
/*
  const handleSubmit = (word) => {
    const result = compareWords(word);
    setCurrentResult(result);
    setWords(prevWords => [...prevWords, word]);
  };
*/

  const handleSubmit = (word) => {
    const result = compareWords(word);
    setTries(prevTries => [...prevTries, { word: word, result: result }]);
  };

  console.log("aa");

  return (
    <main>
      <WordsContainer>
        { tries.map((word, i) => {
          return (
            <Word result={ word.result } key={ i }>{ word.word }</Word>
          );
        }) }
      </WordsContainer>
      <WordInputPanel handleSubmit={ handleSubmit } />
    </main>
  );
}

export default App