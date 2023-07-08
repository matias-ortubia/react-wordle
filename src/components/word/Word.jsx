import { PropTypes } from 'prop-types';
import { Letter } from './letter/Letter';
import styles from './word.module.css';

const Word = ({ children, result }) => {
    const word = children.toString().toUpperCase().split('');

    return (
        <div className={ styles.wordContainer }>{ word.map((letter, i) => {
            return(
                <Letter color={ result[i] } key={ i }>{ letter }</Letter>
            );
        }) }
        </div>
    );
};

Word.propTypes = {
    children: PropTypes.string.isRequired,
    result: PropTypes.array.isRequired
};

export { Word };