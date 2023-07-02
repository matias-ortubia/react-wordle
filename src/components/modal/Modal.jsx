import PropTypes from 'prop-types';
import styles from './modal.module.css';

const Modal = ({ children, handleClose }) => {
    return (
        <div className={ styles.modal }>
            <button className={ styles.closeButton } onClick={ handleClose }>X</button>
            { children }
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
};

export { Modal };