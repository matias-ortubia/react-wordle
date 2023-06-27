import { PropTypes } from "prop-types";

const WordInputButton = ({ label, handleSubmit, input }) => {
    return (
        <button onClick={ () => handleSubmit(input) }
                className="tryButton">{ label }</button>
    );
};

WordInputButton.propTypes = { 
    label: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired 
};

export { WordInputButton };