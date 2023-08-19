import { createStore } from "redux";

const initialState = {
  moviesList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_LIST":
      return {
        ...state,
        moviesList: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
