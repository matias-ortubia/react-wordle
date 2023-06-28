import { useState } from 'react';
import { WordsContainer, WordInputPanel } from './components';
import { Word } from './components';
import './App.css';

function App() {
  const [words, setWords] = useState([]);

  const handleSubmit = (word) => {
    setWords(prevWords => [...prevWords, word]);
  };

  console.log("aa");

  return (
    <main>
      <WordsContainer>
        { words.map((word, i) => {
          return (
            <Word key={ i }>{ word }</Word>
          );
        }) }
      </WordsContainer>
      <WordInputPanel handleSubmit={ handleSubmit } />
    </main>
  );
}

export default App