import { useRef } from "react";
import PropTypes from "prop-types";

const TwitterBtn = ({ url }) => {
//   const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

  const handleClick = () => {
    buttonRef.current.blur()
    // setIsHovered(false);
    // if (buttonRef.current) {
    //   buttonRef.current.classList.remove("hover");
    // }
  };

  return (
    <a
      href={url}
      id="tweet-quote"
    //   className={`btn secondary ${isHovered ? "hover" : ""}`}
    className="btn secondary"
      target="_blank"
      rel="noopener noreferrer"
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <i className="fa-brands fa-x-twitter"></i> Tweet
    </a>
  );
};

TwitterBtn.propTypes = {
  url: PropTypes.string.isRequired,
};

export default TwitterBtn;
