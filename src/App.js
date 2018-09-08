import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Fade from 'react-reveal/Fade';
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Layout/Home";
import Footer from "./components/Layout/Footer";
import DetailPage from "./components/DetailPage";

import "./App.css";
import "./devices.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={DetailPage} />
          </Switch>
          <Fade delay={1000}>
          <Footer />
          </Fade>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(App);
