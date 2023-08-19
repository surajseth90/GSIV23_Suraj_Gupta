export const setMovieList = (data) => {
  return { type: "SET_MOVIE_LIST", payload: data };
};

export const setCurrentPage = (data) => {
  return { type: "SET_CURRENT_PAGE", payload: data };
};

export const setTotalPages = (data) => {
  return { type: "SET_TOTAL_PAGES", payload: data };
};

export const setIsLoading = (data) => {
  return { type: "SET_IS_LOADING", payload: data };
};

export const setSearchQuery = (data) => {
  return { type: "SET_SEARCH_QUERY", payload: data };
};

export const setSelectedMovieId = (data) => {
  return { type: "SET_SELECTED_MOVIE_ID", payload: data };
};
