import {
  API_UPDATE,
  UPDATE_CURRENTMOVIES,
  UPDATE_SEARCH,
  UPDATE_MOVIE,
  CLEAR_SEARCH
} from "../constants/index";

export function clearSearch(payload) {
  return {
    type: CLEAR_SEARCH,
    payload
  };
}

export function updateCurrentMovies(payload) {
  return {
    type: UPDATE_CURRENTMOVIES,
    payload
  };
}

export function updateSearch(payload) {
  return {
    type: UPDATE_SEARCH,
    payload
  };
}

export function apiUpdate(payload) {
  return {
    type: API_UPDATE,
    payload
  };
}

export function updateMovie(payload) {
  return {
    type: UPDATE_MOVIE,
    payload
  };
}

