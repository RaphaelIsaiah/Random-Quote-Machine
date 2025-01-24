import { SET_QUOTE, FETCH_QUOTE_ERROR } from "../actions/actionTypes";

const initialState = {
  quote: null,
  error: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTE:
      // console.log("Setting quote in state:", action.payload);
      // Reset error on successful fetch
      return { ...state, quote: action.payload, error: null };
    case FETCH_QUOTE_ERROR:
      // console.log("Setting error in state:", action.error);
      // Update error state
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default quoteReducer;
