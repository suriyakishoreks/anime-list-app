import {
  UPDATE_GENREFILTER,
  UPDATE_RATINGFILTER,
  UPDATE_SEARCHFILTER,
  CLEAR_FILTER,
  INITIALIZE_FILTER,
  SET_WINDOW_VIEW,
  SET_MENU_STATUS,
  getViewType
} from "../constants/index";

const defaultState = {
  searchFilter: "",
  genreFilter: {
    filterSet: new Set(),
    value: ""
  },
  ratingFilter: {
    filterSet: new Set(),
    value: ""
  },
  clearFilter: false,
  initializeFilter: false,
  windowViewType: getViewType(window.innerWidth), 
  isMenuOpen: false
};

function RUDUX_REDUCER(state = defaultState, action) {
  switch (action.type) {
    case CLEAR_FILTER:
      return {
        ...state,
        clearFilter: action.payload
      };
    case UPDATE_SEARCHFILTER:
      return {
        ...state,
        searchFilter: action.payload
      };
    case UPDATE_RATINGFILTER:
      return {
        ...state,
        ratingFilter: action.payload
      };
    case UPDATE_GENREFILTER:
      return {
        ...state,
        genreFilter: action.payload
      };
    case INITIALIZE_FILTER:
      return {
        ...state,
        initializeFilter: action.payload
      };
    case SET_WINDOW_VIEW:
      return {
        ...state,
        windowViewType: action.payload
      };
    case SET_MENU_STATUS:
      return {
        ...state,
        isMenuOpen: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

export default RUDUX_REDUCER;
