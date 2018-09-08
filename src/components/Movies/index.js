import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchTrendMovies,
  fetchUpComingMovies
} from "../../actions";
import Movie from "./Movie";
import Spinner from "../Layout/Spinner";

class Movies extends Component {
  componentDidMount() {
    this.props.fetchTrendMovies();
  }

  render() {
    const {
      movies,
      fetchNowPlayingMovies,
      fetchPopularMovies,
      fetchTopRatedMovies,
      fetchUpComingMovies
    } = this.props;

    if (movies === undefined || movies.length === 0) {
      return <Spinner styles={{ width: '100%',height: '40vh', opacity: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>;
    } else {
      return (
        <React.Fragment>
          <div className="movie-filter-container mb-5">
            <div className="genre-box" onClick={() => fetchTopRatedMovies()}>
              <div className="genre-button">
                <span>Top Rated</span>
              </div>
            </div>
            <div className="genre-box" onClick={() => fetchNowPlayingMovies()}>
              <div className="genre-button">
                <span>Now Playing</span>
              </div>
            </div>
            <div className="genre-box" onClick={() => fetchUpComingMovies()}>
              <div className="genre-button">
                <span>Up coming</span>
              </div>
            </div>
            <div className="genre-box" onClick={() => fetchPopularMovies()}>
              <div className="genre-button">
                <span>Popular</span>
              </div>
            </div>
          </div>
          <div className="row">
            {movies.map((movie, i) => {
              return <Movie movie={movie} key={i} />;
            })}
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    fetchNowPlayingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchTrendMovies,
    fetchUpComingMovies
  }
)(Movies);
