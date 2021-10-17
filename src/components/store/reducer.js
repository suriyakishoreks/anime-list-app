import {
  API_UPDATE,
  UPDATE_CURRENTMOVIES,
  UPDATE_SEARCH,
  UPDATE_MOVIE,
  CLEAR_SEARCH
} from "../constants/index";

const defaultState = {
  search: "",
  clearSearch: 0,
  movie: null,
  currentMovies: [],
  movieList: []
};

function RUDUX_REDUCER(state = defaultState, action) {
  switch (action.type) {
    case CLEAR_SEARCH:
      return {
        ...state,
        clearSearch: action.payload
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case UPDATE_CURRENTMOVIES:
      return {
        ...state,
        currentMovies: action.payload
      };
    case API_UPDATE:
      return {
        ...state,
        movieList: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

export default RUDUX_REDUCER;
