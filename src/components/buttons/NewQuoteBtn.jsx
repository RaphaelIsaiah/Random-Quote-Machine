import PropTypes from "prop-types";

const NewQuoteBtn = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button id="new-quote" className="btn primary" onClick={handleClick}>
      New Quote
    </button>
  );
};

NewQuoteBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewQuoteBtn;
