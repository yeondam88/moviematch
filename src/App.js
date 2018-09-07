import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { store } from "./store";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Layout/Home";
import DetailPage from "./components/DetailPage";

import "./App.css";
import "./devices.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movie/:id" component={DetailPage} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
