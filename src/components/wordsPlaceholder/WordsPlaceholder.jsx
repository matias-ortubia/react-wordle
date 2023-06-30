import PropTypes from 'prop-types';
import styles from './wordsPlaceholder.module.css';

const WordsPlaceholder = ({ listLength, wordLength }) => {

    const renderWordPlaceholder = (wordLength) => {
        const wordPlaceholder = [];
        console.log("Enter");
        for (let i = 0; i < wordLength; i++) {
            wordPlaceholder.push(<div className={ styles.letterPlaceholder} />);
            console.log("rendered " + i + " placeholders");
        }
        return (<div className={ styles.wordPlaceholder}>{ wordPlaceholder }</div>);
    };

    const renderWordsPlaceholders = ( listLength ) => {
        const list = [];
        console.log(listLength);
        for (let i = 0; i < listLength; i++) {
            console.log("Entro");
            list.push(renderWordPlaceholder(wordLength));
        }
        return list;
    };

    return (
        <div className={ styles.placeholderContainer}>
            { renderWordsPlaceholders(listLength) }
        </div>
    );
/*
    return (
        <div className="placeholderContainer">
            <div className="wordPlaceholder">
                <div className="letterPlaceholder" />
            </div>
        </div>
        
    );*/
};

WordsPlaceholder.propTypes = {
    listLength: PropTypes.number.isRequired,
    wordLength: PropTypes.number.isRequired
};

export { WordsPlaceholder };