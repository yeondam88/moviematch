import React, { Component } from "react";
import Search from "../Search";
import Movies from "../Movies";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="main-search-area">
          <div className="container main-banner">
            <h1 className="landing-page-title">
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
        </section>
        <section className="container mt-5">
          <Movies />
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
