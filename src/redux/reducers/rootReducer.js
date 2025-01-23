import { combineReducers } from "redux";
import quoteReducer from "./reducers";

const rootReducer = combineReducers({
  quote: quoteReducer,
});

export default rootReducer;
