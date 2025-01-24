import { useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../redux/actions/actions";
import { debounce } from "lodash";
import PropTypes from "prop-types";

const QuoteBox = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote);
  const error = useSelector((state) => state.quote.error);

  const debouncedFetch = useRef(
    debounce(() => dispatch(fetchQuote()), 500)
  ).current;

  const debouncedFetchQuote = useCallback(() => {
    debouncedFetch();
  }, [debouncedFetch]);

  useEffect(() => {
    debouncedFetchQuote();

    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetchQuote, debouncedFetch]);

  const handleNewQuote = () => {
    debouncedFetchQuote();
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div id="quote-box" className="quote_box rounded p-4 w-100">
        {error ? (
          <div className="alert alert-danger" role="alert">
            Error fetching quote {error}
          </div>
        ) : quote ? (
          <div className="card">
            <div className="card-body p-4">
              <p
                id="text"
                className="card-text animate__animated animate__fadeIn"
              >
                <i className="fa-solid fa-quote-left mx-3"></i>
                {quote?.content}
                <i className="fa-solid fa-quote-right mx-3"></i>
              </p>
              <p
                id="author"
                className="card-subtitle mb-2 mb-4 text-end animate__animated animate__fadeIn"
              >
                - {quote?.originator?.name}
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-4 mx-auto w-100">
                <button
                  className="btn primary"
                  id="new-quote"
                  onClick={handleNewQuote}
                >
                  New Quote
                </button>
                <a
                  id="tweet-quote"
                  className="btn secondary"
                  href={`https://twitter.com/intent/tweet?text=${quote?.content} - ${quote?.originator?.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter"></i> Tweet
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

QuoteBox.propTypes = {
  quote: PropTypes.object,
  error: PropTypes.string,
};

export default QuoteBox;
