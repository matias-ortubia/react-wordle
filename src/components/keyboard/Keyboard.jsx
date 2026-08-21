import PropTypes from 'prop-types';
import { Key } from './key/Key';
import styles from './keyboard.module.css';

const ROWS = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫', 'ENTER'],
];

const Keyboard = ({ letterStatuses, onKeyPress, onEnter, onDelete }) => {
    const handleClick = (key) => {
        if (key === 'ENTER') return onEnter();
        if (key === '⌫') return onDelete();
        onKeyPress(key);
    };

    return (
        <div className={styles.keyboardContainer}>
            {ROWS.map((row, i) => (
                <div className={styles.keyboardRow} key={i}>
                    {row.map((key) => (
                        <Key
                            key={key}
                            label={key}
                            status={letterStatuses[key]}
                            wide={key === 'ENTER' || key === '⌫'}
                            handleClick={() => handleClick(key)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

Keyboard.propTypes = {
    letterStatuses: PropTypes.object.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export { Keyboard };