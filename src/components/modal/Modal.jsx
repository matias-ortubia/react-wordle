import PropTypes from 'prop-types';
import styles from './modal.module.css';

const Modal = ({ children, handleClose }) => {
    return (
        <div className={ styles.modal }>
            { children }
            <button className={ styles.closeButton } onClick={ handleClose }>
                CERRAR
            </button>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
};

export { Modal };