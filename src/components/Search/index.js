import React, { Component } from "react";
import { connect } from "react-redux";

import { searchByMovieTitle } from "../../actions";

class Search extends Component {
  state = {
    movieTitle: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchByMovieTitle(this.state.movieTitle);
    this.setState({ movieTitle: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search-bar">
          <i className="fas fa-search" />
          <div className="search-bar__search-input">
            <input
              type="text"
              className="input-search-bar"
              name="movieTitle"
              value={this.state.trackTitle}
              placeholder="Type movie title"
              autoCapitalize={"off"}
              autoCorrect={"off"}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { searchByMovieTitle }
)(Search);
