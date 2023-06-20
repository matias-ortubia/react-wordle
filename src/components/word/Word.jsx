import { PropTypes } from 'prop-types';
import { Letter } from './letter/Letter';
import styles from './word.module.css';

const Word = ({children}) => {
    const word = children.toString().toUpperCase().split('');

    return (
        <div className={ styles.wordContainer }>{ word.map((letter, i) => {
            return(
                <Letter color="green" key={ i }>{ letter }</Letter>
            );
        }) }
        </div>
    );
};

Word.propTypes = {
    children: PropTypes.string.isRequired
};

export { Word };