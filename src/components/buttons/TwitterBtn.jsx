import PropTypes from "prop-types";

const TwitterBtn = ({ url }) => {
  return (
    <a
      href={url}
      id="tweet-quote"
      className="btn secondary"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-x-twitter"></i> Tweet
    </a>
  );
};

TwitterBtn.propTypes = {
  url: PropTypes.string.isRequired,
};

export default TwitterBtn;
