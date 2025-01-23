import { SET_QUOTE, FETCH_QUOTE_ERROR } from "../actions/actions";

const initialState = {
  quote: null,
  error: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTE:
      // Reset error on successful fetch
      return { ...state, quote: action.payload, error: null };
    case FETCH_QUOTE_ERROR:
      // Update error state
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default quoteReducer;
