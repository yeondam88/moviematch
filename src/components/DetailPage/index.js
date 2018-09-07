import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import Recommandation from "./Recommandation";
import Casting from "./Casting";
import { connect } from "react-redux";

import { fetchMovieDetail } from "../../actions";

const POSTER_PATH = "http://image.tmdb.org/t/p/w342";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class DetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetail(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { movie } = this.props;
    if (movie === undefined || Object.keys(movie).length === 0) {
      return <Spinner />;
    } else {
      return (
        <div className="content">
          <div className="top-content-section">
            <div
              className="bg-filter"
              style={{
                backgroundImage: `url(${BACKDROP_PATH}/${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
            <div className="track-banner">
              <div
                className="container"
                style={{
                  background: "white",
                  filter: "grayscale(0%)",
                  padding: "0px"
                }}
              >
                <div className="row">
                  <div className="col-5">
                    <img
                      style={{ height: "100%" }}
                      src={`${POSTER_PATH}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                  <div className="col" style={{ padding: "2rem" }}>
                    <h1 className="lyrics-track-title">
                      {movie.original_title}
                    </h1>
                    <a className="lyrics-track-artist">{movie.tagline}</a>

                    <div className="movie-information">
                      <p>
                        <b>Overview</b>
                      </p>
                      <p>{movie.overview}</p>
                      <p className="font-weight-light font-italic mt-1">
                        <small>Release Date: {movie.release_date}</small>
                      </p>
                    </div>
                    <div>Genres</div>
                    {movie.genres.map(genre => {
                      return (
                        <div className="genre-box">
                          <div className="genre-button">
                            <span>{genre.name}</span>
                          </div>
                        </div>
                      );
                    })}

                    {movie.adult === 0 ? null : (
                      <div className="genre-box">
                        <div className="genre-button">
                          <span>Adult</span>
                        </div>
                      </div>
                    )}
                    <div className="movie-meta">
                      {movie.production_companies.map(production_company => {
                        return (
                          <span key={production_company.id}>
                            {production_company.logo_path ? (
                              <img
                                style={{
                                  maxHeight: "37px",
                                  marginRight: "10px",
                                  marginTop: "10px"
                                }}
                                src={`http://image.tmdb.org/t/p/w92/${
                                  production_company.logo_path
                                }`}
                                alt={production_company.name}
                              />
                            ) : null}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-content-section">
            <div className="container">
              <h3>Top Billed Cast</h3>
              <div className="row">
                <div className="panel col">
                  <Casting movie_id={id} />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div className="genre-box">
                    <div className="genre-button go-back-btn">
                      <i className="fas fa-arrow-left" />
                      <Link to="/">Back</Link>
                    </div>
                  </div>
                </div>
                <div className="col-9">
                  <div className="lyrics-container">
                    <p className="lead">{movie.overview}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="recommandation">
                    <h3>Recommandation</h3>
                    <Recommandation movie_id={id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { fetchMovieDetail }
)(DetailPage);
