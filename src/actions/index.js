import axios from "axios";
import {
  FETCH_TREND_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIE_DETAIL,
  FETCH_TOP_RATED,
  FETCH_NOW_PLAYING,
  FETCH_POPULAR_MOVIES,
  FETCH_UP_COMING_MOVIES,
  SEARCH_MOVIE_BY_TITLE
} from "./actionTypes";

const fetchMovies = movies => ({
  type: FETCH_TREND_MOVIES,
  payload: movies
});

const fetchMoviesFail = error => ({
  type: FETCH_MOVIES_FAIL,
  payload: error
});

const fetchMovie = movie => ({
  type: FETCH_MOVIE_DETAIL,
  payload: movie
});

const getTopRated = movies => ({
  type: FETCH_TOP_RATED,
  payload: movies
});

const getPopular = movies => ({
  type: FETCH_POPULAR_MOVIES,
  payload: movies
});

const getNowPlaying = movies => ({
  type: FETCH_NOW_PLAYING,
  payload: movies
});

const getUpcoming = movies => ({
  type: FETCH_UP_COMING_MOVIES,
  payload: movies
});

const searchMovies = movies => ({
  type: SEARCH_MOVIE_BY_TITLE,
  payload: movies
});

export const fetchTrendMovies = () => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=86fce8bfeb204a7e8c71d14290ae5016&region=us`
    )
    .then(res => res.data.results)
    .then(movies => {
      dispatch(fetchMovies(movies));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};

export const fetchMovieDetail = movie_id => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=86fce8bfeb204a7e8c71d14290ae5016&language=en-US`
    )
    .then(res => res.data)
    .then(movie => {
      dispatch(fetchMovie(movie));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};

export const fetchTopRatedMovies = () => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=86fce8bfeb204a7e8c71d14290ae5016&language=en-US&page=1&region=us`
    )
    .then(res => res.data.results)
    .then(movies => {
      dispatch(getTopRated(movies));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};

export const fetchPopularMovies = () => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=86fce8bfeb204a7e8c71d14290ae5016&language=en-US&page=1&region=us`
    )
    .then(res => res.data.results)
    .then(movies => {
      dispatch(getPopular(movies));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};

export const fetchNowPlayingMovies = () => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=86fce8bfeb204a7e8c71d14290ae5016&language=en-US&page=1&region=us`
    )
    .then(res => res.data.results)
    .then(movies => {
      dispatch(getNowPlaying(movies));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};

export const fetchUpComingMovies = () => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=86fce8bfeb204a7e8c71d14290ae5016&language=en-US&page=1&region=us`
    )
    .then(res => res.data.results)
    .then(movies => {
      dispatch(getUpcoming(movies));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};

export const searchByMovieTitle = movieTitle => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=86fce8bfeb204a7e8c71d14290ae5016&language=en-US&query=${movieTitle}&page=1&include_adult=false&region=us`
    )
    .then(res => res.data.results)
    .then(movies => {
      dispatch(searchMovies(movies));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};
