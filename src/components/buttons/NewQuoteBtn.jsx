import { useState, useRef } from "react";
import PropTypes from "prop-types";

const NewQuoteBtn = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsHovered(false); // Reset the hover state on click
    onClick();
    buttonRef.current.blur();
    // Manually reset the hover state after click
    if (buttonRef.current) {
      buttonRef.current.blur();
      buttonRef.current.classList.remove("hover");
    }
  };

  return (
    <button
      ref={buttonRef}
      id="new-quote"
      className={`btn primary ${isHovered ? "hover" : ""}`}
      // className="btn primary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      New Quote
    </button>
  );
};

NewQuoteBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewQuoteBtn;
