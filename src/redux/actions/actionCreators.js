import { SET_QUOTE, FETCH_QUOTE_ERROR } from "./actionTypes";

export const setQuote = (quote) => ({
  type: SET_QUOTE,
  payload: quote,
});

export const fetchQuoteError = (error) => ({
  type: FETCH_QUOTE_ERROR,
  error,
});
