import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { WordInput } from './wordInput/WordInput';
import { WordInputButton } from './wordInputButton/WordInputButton';

const WordInputPanel = ({ handleSubmit }) => {

    const [buffer, setBuffer] = useState("");

    const handleTyping = (input) => {
            setBuffer(input);
    };

    return (
        <div className="panelContainer">
            <WordInput input={ buffer }
                       handleTyping={ handleTyping } 
                       handleSubmit={ handleSubmit }/>
            <WordInputButton label="TRY"
                             handleSubmit={ handleSubmit }
                             input={ buffer } />
        </div>
    );
};

WordInputPanel.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export { WordInputPanel }