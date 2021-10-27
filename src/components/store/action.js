import {
  UPDATE_GENREFILTER,
  UPDATE_RATINGFILTER,
  UPDATE_SEARCHFILTER,
  CLEAR_FILTER,
  INITIALIZE_FILTER
} from "../constants/index";

export function clearFilter(payload) {
  return {
    type: CLEAR_FILTER,
    payload
  };
}

export function updateSearchFilter(payload) {
  return {
    type: UPDATE_SEARCHFILTER,
    payload
  };
}

export function updateGenreFilter(payload) {
  return {
    type: UPDATE_GENREFILTER,
    payload
  };
}

export function updateRatingFilter(payload) {
  return {
    type: UPDATE_RATINGFILTER,
    payload
  };
}

export function initializeFilter(payload) {
  return {
    type: INITIALIZE_FILTER,
    payload
  }
}
