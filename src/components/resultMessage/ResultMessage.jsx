import { PropTypes } from "prop-types";
import styles from "./resultMessage.module.css";

const ResultMessage = ({ children, bgColor }) => {
  return (
    <div className={`${styles.messageBox} ${styles[bgColor]}`}>{children}</div>
  );
};

ResultMessage.propTypes = {
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export { ResultMessage };