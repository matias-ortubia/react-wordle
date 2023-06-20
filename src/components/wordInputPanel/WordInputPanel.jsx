import { WordInput } from './wordInput/WordInput';
import { WordInputButton } from './wordInputButton/WordInputButton';

const WordInputPanel = () => {
    return (
        <div className="panelContainer">
            <WordInput />
            <WordInputButton label="TRY" />
        </div>
    );
};

export { WordInputPanel }