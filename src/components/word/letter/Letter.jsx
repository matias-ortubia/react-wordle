import PropTypes from 'prop-types';
import styles from './letter.module.css';

/* 
letter: string representing the letter to show.
    If it's length is more than 1, only the first letter is shown.

color: the color of the box. The options are: 'Green', 'Yellow', 'Grey'.
*/
const Letter = ({ color, children }) => {
    if (children.length > 1) {
        children = children[0];
    }

    let colorChosen = color.toString().toLowerCase();

    return (
        <div className={ `${styles.letterContainer} ${styles[colorChosen]}` }>
            { children }
        </div>
    );
};

Letter.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}


export { Letter };