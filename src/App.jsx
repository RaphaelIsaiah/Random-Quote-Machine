// import React from "react";
import { Provider } from "react-redux";
import QuoteBox from "./components/QuoteBox";
import "./App.css";
import store from "./redux/store/store";

function App() {
  return (
    <Provider className="App container-fluid" store={store}>
      <QuoteBox />
    </Provider>
  );
}

export default App;
