import { PropTypes } from "prop-types";
import styles from "./resultMessage.module.css";

const ResultMessage = ({ children, bgColor, handleReset }) => {
  return (
    <button className={`${styles.messageBox} ${styles[bgColor]}`}
            onClick={ handleReset }>
        {children}
    </button>
  );
};

ResultMessage.propTypes = {
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired
};

export { ResultMessage };