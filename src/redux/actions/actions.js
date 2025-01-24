import { setQuote, fetchQuoteError } from "./actionCreators";

export const fetchQuote = () => {
  return async (dispatch) => {
    const url =
      "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ca75bbee7fmsha1b7744774f1d2fp1d182djsncb7a5ce7f0b6",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      // console.log(response);

      const data = await response.json();

      // console.log("Fetched quote data:", data);

      dispatch(setQuote(data));
    } catch (error) {
      dispatch(fetchQuoteError(error.message));
      console.error("Error:", error);
    }
  };
};
