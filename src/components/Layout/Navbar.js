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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item github-animated">
              <a
                href="https://github.com/yeondam88/moviematch"
                className="nav-link"
                style={{ color: "black", fontSize: "1em" }}
              >
                <span>
                  <i
                    className="fab fa-github"
                    style={{ fontSize: "2em", color: "black" }}
                  />
                </span>
              </a>
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
