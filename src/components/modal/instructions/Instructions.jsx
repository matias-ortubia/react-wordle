import PropTypes from "prop-types";
import { Modal } from "../Modal";
import styles from "./instructions.module.css";

const Instructions = ({ handleClose }) => {
  return (
    <Modal handleClose={handleClose}>
      <div className={styles.instructionsContainer}>
        <h2 className={styles.instructionsTitle}>Cómo jugar:</h2>
        <ul className={styles.instructionsList}>
          <li>
            El objetivo es adivinar una palabra de 5 letras elegida al azar.
          </li>
          <li>Al enviar un intento, cada letra será marcada con un color...</li>
          <li>
            Si es celeste, la letra está en la palabra y en el lugar correcto.
          </li>
          <li>
            Si es naranja, la letra está en la palabra, pero en otra posición.
          </li>
          <li>Si no está pintada, la letra no está en la palabra.</li>
          <li>Hay 6 intentos. ¡Mucha suerte!</li>
        </ul>
      </div>
    </Modal>
  );
};

Instructions.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export { Instructions };