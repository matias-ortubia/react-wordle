import { PropTypes } from "prop-types";

const WordInputButton = ({ label, handleSubmit, input, setBuffer }) => {
    const handleClick = () => {
        if (input.length != 5) return;
            
        setBuffer(""); 
        handleSubmit(input) 
    };

    return (
        <button onClick={ handleClick }
                className="tryButton">{ label }</button>
    );
};

WordInputButton.propTypes = { 
    label: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    setBuffer: PropTypes.func.isRequired
};

export { WordInputButton };