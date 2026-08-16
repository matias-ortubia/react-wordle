import { PropTypes } from 'prop-types';
import styles from './wordInput.module.css';

const WordInput = ({ input, handleTyping, handleSubmit, setBuffer }) => {

    const handleEnter = e => {
        if (e.key === "Enter") {
            if (input.length != 5 || /[^a-zA-Z]/g.test(input) == true) {
                return;
            }

            setBuffer("");
            handleSubmit(input.toLowerCase());
        }
    };

// replace(/[^a-zA-Z0-9]/g, '').

    return (
        <input value={ input } 
               onChange={ e => handleTyping(e.target.value) } 
               className={ styles.wordInput } 
               placeholder="Escribe una palabra..." 
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