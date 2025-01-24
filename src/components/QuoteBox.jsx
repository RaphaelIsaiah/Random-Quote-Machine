import React from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../redux/actions/actions";
import { debounce } from "lodash";
import PropTypes from "prop-types";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.debouncedFetchQuote = debounce(this.fetchQuote.bind(this), 500);
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount called!!!");
    // Fetches a quote on mount
    this.debouncedFetchQuote();
  }

  componentWillUnmount() {
    // Cleans up the debounced function on unmount
    console.log("componentWillUnmount called");
    this.debouncedFetchQuote.cancel();
  }

  fetchQuote() {
    // Dispatches the fetchQuote action
    this.props.fetchQuote();
  }

  handleNewQuote() {
    this.debouncedFetchQuote();
    // Logs the current quote
    console.log(this.props.quote);
  }

  render() {
    // Destructuring props
    const { quote, error } = this.props;
    console.log("Rendering QuoteBox with props:", this.props);

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
                <p id="text" className="card-text ">
                  <i className="fa-solid fa-quote-left mx-3"></i>
                  {quote?.quote?.content}
                  <i className="fa-solid fa-quote-right mx-3"></i>
                </p>

                <p id="author" className="card-subtitle mb-2 mb-4 text-end ">
                  - {quote?.quote?.originator?.name}
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-4 mx-auto w-100">
                  <button
                    className="btn btn-primary "
                    id="new-quote"
                    onClick={this.handleNewQuote}
                  >
                    New Quote
                  </button>
                  <a
                    id="tweet-quote"
                    className="btn btn-secondary "
                    href={`https://twitter.com/intent/tweet?text=${quote?.quote?.content} - ${quote?.quote?.originator?.name}`}
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
  }
}

// Define PropTypes for the component
QuoteBox.propTypes = {
  quote: PropTypes.object,
  error: PropTypes.string,
  fetchQuote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  quote: state.quote,
  error: state.error,
});

const mapDispatchToProps = {
  fetchQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);
