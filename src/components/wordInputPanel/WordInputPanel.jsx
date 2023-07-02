import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { WordInput } from './wordInput/WordInput';
import { WordInputButton } from './wordInputButton/WordInputButton';
import styles from './wordInputPanel.module.css';

const WordInputPanel = ({ handleSubmit }) => {
    const [buffer, setBuffer] = useState("");

    const handleTyping = (input) => {
            setBuffer(input);
    };

    return (
        <div className={ styles.panelContainer }>
            <WordInput input={ buffer }
                       handleTyping={ handleTyping } 
                       handleSubmit={ handleSubmit }
                       setBuffer={ setBuffer } />
            <WordInputButton label="ENVIAR"
                             handleSubmit={ handleSubmit }
                             input={ buffer } 
                             setBuffer={ setBuffer } />
        </div>
    );
};

WordInputPanel.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export { WordInputPanel }