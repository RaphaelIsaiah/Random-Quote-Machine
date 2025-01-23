import React from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../redux/actions/actions";
import { debounce } from "lodash";
import PropTypes from "prop-types";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.debouncedFetchQuote = debounce(this.fetchQuote.bind(this), 200);
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount called!!!");
    // Fetches a quote on mount
    this.debouncedFetchQuote();
  }

  componentWillUnmount() {
    // Cleans up the debounced function on unmount
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

    return (
      <div id="quote-box">
        {error ? (
          <p>Error fetching quote {error}</p>
        ) : quote ? (
          <div>
            <p id="text">{quote?.content}</p>
            <p id="author">- {quote?.originator.name}</p>
            <button id="new-quote" onClick={this.handleNewQuote}>
              New Quote
            </button>
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${quote?.content} - ${quote?.originator.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet
            </a>
          </div>
        ) : (
          <p>Loading...</p>
        )}
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
