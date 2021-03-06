import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import Recommandation from "./Recommandation";
import Casting from "./Casting";
import { connect } from "react-redux";
import axios from "axios";
import ModalVideo from "react-modal-video";

import { fetchMovieDetail } from "../../actions";
import { formatRunTime } from "../../utils";

const POSTER_PATH = "http://image.tmdb.org/t/p/w342";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class DetailPage extends Component {
  state = {
    movie_trailer: null,
    isOpen: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetail(id);
    this.getMovieTrailers(id);
  }

  getMovieTrailers = movie_id => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=86fce8bfeb204a7e8c71d14290ae5016&language=en-US`
      )
      .then(res => {
        const trailers = res.data.results.filter(movie => {
          return movie.type === "Trailer";
        });
        this.setState({ movie_trailer: trailers[0] });
      });
  };

  openPlayer = () => {
    this.setState({
      isOpen: true
    });
  };

  closePlayer = () => {
    this.setState(
      {
        isOpen: false
      },
      () => console.log(this.state.isOpen)
    );
  };

  render() {
    const { id } = this.props.match.params;
    const { movie } = this.props;
    const { movie_trailer, isOpen } = this.state;
    if (movie === undefined || Object.keys(movie).length === 0) {
      return (
        <Spinner
          styles={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}
        />
      );
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
                  <div className="col-5 movie-poster">
                    <img
                      style={{ height: "100%" }}
                      src={`${POSTER_PATH}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                  <div className="col movie-info-section">
                    <h1 className="movie-title">{movie.original_title}</h1>
                    <a className="movie-tagline">{movie.tagline} </a>
                    <p>
                      {formatRunTime(movie.runtime)} |{" "}
                      <span>
                        {movie.original_language === "en" ? "English" : ""}
                      </span>
                    </p>
                    <p>
                      Box offices: $
                      {movie.revenue
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </p>
                    <div className="movie-information">
                      <p>
                        <b>Overview</b>
                      </p>
                      <p>{movie.overview}</p>
                      <p className="font-weight-light font-italic mt-1">
                        <small>Release Date: {movie.release_date}</small>
                      </p>
                      <div className="trailer-button" onClick={this.openPlayer}>
                        <span style={{ marginRight: "10px" }}>
                          <i className="fas fa-play" />
                        </span>
                        Play Trailer{" "}
                      </div>
                      {movie_trailer && (
                        <ModalVideo
                          isOpen={isOpen}
                          videoId={movie_trailer.key}
                          onClose={this.closePlayer}
                        />
                      )}
                    </div>
                    <div>Genres</div>
                    {movie.genres.map(genre => {
                      return (
                        <div key={genre.id} className="genre-box">
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
              <div className="genre-box mb-5">
                <div className="genre-button go-back-btn">
                  <i className="fas fa-arrow-left" />
                  <Link to="/">Back</Link>
                </div>
              </div>
              <div className="text-center">
                <h3>Top Billed Casts</h3>
                <div className="row">
                  <div className="panel col">
                    <Casting movie_id={id} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="movie-container">
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
