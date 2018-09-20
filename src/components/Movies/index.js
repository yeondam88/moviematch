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
      return (
        <Spinner
          styles={{
            width: "100%",
            height: "40vh",
            opacity: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        />
      );
    } else {
      return (
        <React.Fragment>
          <div className="movie-filter-container mb-5">
            <div className="box" onClick={() => fetchTopRatedMovies()}>
              <div className="box-button">
                <span className="title">Top Rated</span>
              </div>
            </div>
            <div className="box" onClick={() => fetchNowPlayingMovies()}>
              <div className="box-button">
                <span className="title">Now Playing</span>
              </div>
            </div>
            <div className="box" onClick={() => fetchUpComingMovies()}>
              <div className="box-button">
                <span className="title">Up coming</span>
              </div>
            </div>
            <div className="box" onClick={() => fetchPopularMovies()}>
              <div className="box-button">
                <span className="title">Popular</span>
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
