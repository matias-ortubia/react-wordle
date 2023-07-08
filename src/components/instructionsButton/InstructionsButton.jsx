import PropTypes from "prop-types";
import styles from "./instructionsButton.module.css";

const InstructionsButton = ({ children, openModal }) => {
  return (
    <button onClick={openModal} className={styles.instructionsButton}>
        {children}
    </button>
  );
};

InstructionsButton.propTypes = {
  children: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export { InstructionsButton };