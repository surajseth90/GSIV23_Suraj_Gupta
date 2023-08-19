import { createStore } from "redux";

const initialState = {
  moviesList: [],
  currentPage: 1,
  totalPage: 1,
  isLoading: false,
  searchQuery: "",
  selectedMovieId: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_LIST":
      return {
        ...state,
        moviesList: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalPage: action.payload,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "SET_SELECTED_MOVIE_ID":
      return {
        ...state,
        selectedMovieId: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
