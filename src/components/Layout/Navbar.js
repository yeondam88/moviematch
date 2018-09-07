import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./Asset 2.svg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <span className="navbar-brand mb-0">
            <a className="logo-link" href="/">
              <img src={logo} alt="logo" />{" "}
              <span className="logo">movieMatch</span>
            </a>
          </span>
          <ul className="navbar-nav mr-sm-2">
            <li className="nav-item" onClick={() => console.log("hi")}>
              Trend Movies
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  null,
  {}
)(Navbar);
