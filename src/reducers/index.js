import {
  FETCH_TREND_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIE_DETAIL,
  FETCH_TOP_RATED,
  FETCH_NOW_PLAYING,
  FETCH_POPULAR_MOVIES,
  FETCH_UP_COMING_MOVIES,
  SEARCH_MOVIE_BY_TITLE
} from "../actions/actionTypes";

const initialState = {
  movies: [],
  heading: "Top Rated Movies",
  isLoading: true,
  movie: {},
  errors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOW_PLAYING:
      return {
        ...state,
        movies: action.payload,
        heading: "Now Playing Movies",
        isLoading: false
      };
    case FETCH_TOP_RATED:
      return {
        ...state,
        movies: action.payload,
        isLoading: false
      };
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload,
        heading: "Popular Movies",
        isLoading: false
      };
    case FETCH_UP_COMING_MOVIES:
      return {
        ...state,
        movies: action.payload,
        heading: "Up Coming Movies",
        isLoading: false
      };
    case FETCH_TREND_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isLoading: false
      };
    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movie: action.payload,
        isLoading: false
      };
    case SEARCH_MOVIE_BY_TITLE:
      return {
        ...state,
        movies: action.payload
      };
    case FETCH_MOVIES_FAIL:
      return {
        ...state,
        errors: action.payload.errors
      };
    default:
      return state;
  }
};
