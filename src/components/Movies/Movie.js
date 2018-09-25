import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import { truncate } from "../../utils";

const POSTER_PATH = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

const Movie = ({ movie }) => {
  return (
    <Fade bottom cascade>
      <div className="col-md-6 col-sm-12">
        <div className="card mb-5 shadow bg-white" style={{ border: "none" }}>
          <div className="row">
            <div className="col-5">
              <img
                className="card-img-top"
                src={`${POSTER_PATH}/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="col-7">
              <div className="card-body">
                <h5 style={{ color: "#4e5860" }}>{movie.title}</h5>
                <div className="card-text">
                  <span style={{ color: "#808b96" }}>
                    Release Date: {movie.release_date}
                  </span>
                  <p>Rating: {movie.vote_average}</p>
                </div>
                <p className="lead">{truncate(movie.overview, 80)}</p>
                <Link
                  className="btn btn-dark btn-block mt-2"
                  to={`movie/${movie.id}`}
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Movie;
