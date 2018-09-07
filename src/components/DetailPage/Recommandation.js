import React, { Component } from "react";
import axios from "axios";

import Carousel from "./Carousel";
import Spinner from "../Layout/Spinner";

class Recommandation extends Component {
  state = {
    recommandations: []
  };

  componentDidMount() {
    const { movie_id } = this.props;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=86fce8bfeb204a7e8c71d14290ae5016&language=en-US&page=1`
      )
      .then(res => res.data.results)
      .then(recommandations => this.setState({ recommandations }))
      .catch(error => console.error(error));
  }

  render() {
    const { recommandations } = this.state;
    if (recommandations === undefined || recommandations.length === 0) {
      return <Spinner />;
    } else {
      return (
        <div>
          <Carousel recommandations={recommandations} />
        </div>
      );
    }
  }
}

export default Recommandation;
