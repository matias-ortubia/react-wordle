import PropTypes from 'prop-types';
import styles from './wordsPlaceholder.module.css';

const WordsPlaceholder = ({ listLength, wordLength }) => {

    const renderWordPlaceholder = (wordLength, wordKey) => {
        const wordPlaceholder = [];
        for (let i = 0; i < wordLength; i++) {
            wordPlaceholder.push(<div className={ styles.letterPlaceholder} 
                                      key={ i } />);
        }
        return (
            <div className={ styles.wordPlaceholder} key={ wordKey }>
                { wordPlaceholder }
            </div>);
    };

    const renderWordsPlaceholders = ( listLength ) => {
        const list = [];
        for (let i = 0; i < listLength; i++) {
            list.push(renderWordPlaceholder(wordLength, i));
        }
        return list;
    };

    return (
        <div className={ styles.placeholderContainer}>
            { renderWordsPlaceholders(listLength) }
        </div>
    );
};

WordsPlaceholder.propTypes = {
    listLength: PropTypes.number.isRequired,
    wordLength: PropTypes.number.isRequired
};

export { WordsPlaceholder };