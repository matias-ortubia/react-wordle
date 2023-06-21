import { PropTypes } from 'prop-types'; 
import styles from './wordsContainer.module.css';

const WordsContainer = ({ children }) => {
    return (
        <div className={ styles.wordsContainer }>
            { children }
        </div>
    );
};

WordsContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export { WordsContainer };