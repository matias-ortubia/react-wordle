import { useState } from 'react';
import styles from './wordInput.module.css';

const WordInput = () => {
    const [buffer, setBuffer] = useState('');

    function handleInput(input) {
        setBuffer(input);
    }

    return (
        <input value={ buffer } 
               onChange={ e => handleInput(e.target.value) } 
               className={ styles.wordInput } 
               placeholder="Write a word here" />
    );
};

export { WordInput };