import React, { Component } from "react";
import Search from "../Search";
import Movies from "../Movies";
import Fade from "react-reveal/Fade";
import bg from "../../img/bg.png";

import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="main-search-area">
          <div className="container main-banner">
            <h1 className="landing-page-title mb-5">
              Explore the world's largest catalog of
              <br /> Movies powered by The movie DB{" "}
              <span>
                <img
                  height="50px"
                  src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
                  alt="themoviedb"
                />
              </span>
            </h1>
            <Search />
          </div>
          <Fade bottom delay={800}>
            <div className="phone-illustrate">
              <div className="phone-big">
                <img src={bg} width="253px" height="451px" alt="phone" />
              </div>
            </div>
          </Fade>
        </section>

        <section className="container mt-5 content-area">
          <h2 className="display-4 text-uppercase">{this.props.heading}</h2>
          <Movies />
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  heading: state.heading
});

export default connect(mapStateToProps)(Home);
