import { SET_MOVIES_DATA, LOADING, SET_SEARCH } from "../constants";

const initialState = {
  movies: [],
};

export default function MoviesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: payload?.loading || true,
      };
    case SET_MOVIES_DATA:
      return {
        ...state,
        movies: payload,
        isLoading: false,
      };
    case SET_SEARCH: {
      const moviesData = state.movies.filter(({ name }) =>
        name.toLowerCase().includes(payload?.searchString.toLowerCase())
      );
      return {
        ...state,
        filteredMovies: moviesData,
        searchString: payload?.searchString,
      };
    }
    default:
      return state;
  }
}
