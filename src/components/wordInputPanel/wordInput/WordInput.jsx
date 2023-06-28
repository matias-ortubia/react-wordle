import { PropTypes } from 'prop-types';
import styles from './wordInput.module.css';

const WordInput = ({ input, handleTyping, handleSubmit, setBuffer }) => {

    const handleEnter = e => {
        if (e.key === "Enter") {
            if (input.length != 5) return;

            setBuffer("");
            handleSubmit(input);
        }
    };

    return (
        <input value={ input } 
               onChange={ e => handleTyping(e.target.value) } 
               className={ styles.wordInput } 
               placeholder="Write a word here" 
               onKeyDown={e => handleEnter(e)} />
    );
};

WordInput.propTypes = {
    input: PropTypes.string.isRequired,
    handleTyping: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    setBuffer: PropTypes.func.isRequired
};

export { WordInput };