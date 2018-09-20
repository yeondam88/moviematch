import React, { Component } from "react";
import Spinner from "../Layout/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";

const PROFILE_PATH = "http://image.tmdb.org/t/p/w138_and_h175_face";

class Casting extends Component {
  state = {
    cast: []
  };

  componentDidMount() {
    const { movie_id } = this.props;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=86fce8bfeb204a7e8c71d14290ae5016`
      )
      .then(res => res.data.cast)
      .then(cast => this.setState({ cast }))
      .catch(error => console.error(error));
  }

  render() {
    const { movie_id } = this.props;
    const { cast } = this.state;
    const top_5_actors = cast.filter(c => c.order < 5);
    if (cast === undefined || cast.length === 0) {
      return <Spinner />;
    } else {
      return (
        <ul className="top-billed-cast">
          {top_5_actors.map(c => {
            return (
              <li key={c.id} className="card shadow">
                <Link to={`/movie/${movie_id}`}>
                  <img
                    className="profile"
                    src={`${PROFILE_PATH}${c.profile_path}`}
                    alt={c.name}
                  />
                </Link>
                <p>
                  <b>{c.name}</b>
                </p>
                <p>{c.character}</p>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default Casting;
