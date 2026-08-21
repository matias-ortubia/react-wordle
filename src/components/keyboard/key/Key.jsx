import PropTypes from 'prop-types';
import styles from './key.module.css';

const Key = ({ label, status, wide, handleClick }) => {
    const isDisabled = status === 'notInWord';
    const statusClass = status ? styles[status] : '';

    const variantClass =
        label === '⌫' ? styles.deleteKey :
        label === 'ENTER' ? styles.enterKey :
        '';

    return (
        <button
            onClick={handleClick}
            disabled={isDisabled}
            className={`${styles.key} ${wide ? styles.wideKey : ''} ${variantClass} ${statusClass}`}
        >
            {label}
        </button>
    );
};

Key.propTypes = {
    label: PropTypes.string.isRequired,
    status: PropTypes.string,
    wide: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
};

export { Key };