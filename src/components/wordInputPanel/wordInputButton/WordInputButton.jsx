import { PropTypes } from "prop-types";
import styles from './wordInputButton.module.css';

const WordInputButton = ({ label, handleSubmit, input, setBuffer }) => {
    const handleClick = () => {
        if (input.length != 5 || /[^a-zA-Z]/g.test(input) == true) {
                return;
            }
            
        setBuffer(""); 
        handleSubmit(input) 
    };

    return (
        <button onClick={ handleClick }
                className={ styles.tryButton }>{ label }</button>
    );
};

WordInputButton.propTypes = { 
    label: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    setBuffer: PropTypes.func.isRequired
};

export { WordInputButton };