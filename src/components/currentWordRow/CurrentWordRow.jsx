import PropTypes from 'prop-types';
import styles from './currentWordRow.module.css';

const CurrentWordRow = ({ buffer, wordLength }) => {
    const letters = buffer.toUpperCase().split('');

    return (
        <div className={styles.wordContainer}>
            {Array.from({ length: wordLength }).map((_, i) => (
                <div className={styles.letterContainer} key={i}>
                    {letters[i] || ''}
                </div>
            ))}
        </div>
    );
};

CurrentWordRow.propTypes = {
    buffer: PropTypes.string.isRequired,
    wordLength: PropTypes.number.isRequired,
};

export { CurrentWordRow };