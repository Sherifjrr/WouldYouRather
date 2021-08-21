import React, { Component } from "react";
import { connect } from "react-redux";
import { handleData } from "../actions/shared";
import Login from "./login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import Leaderboard from "./leaderboard";
import AddQuestion from "./addQuestion";
import Poll from "./questionDetails";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleData());
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/home"} component={Home}>
              {this.props.authedUser === null ? <Redirect to="/" /> : <Home />}
            </Route>
            <Route exact path={"/leaderboard"} component={Leaderboard}>
              {this.props.authedUser === null ? (
                <Redirect to="/" />
              ) : (
                <Leaderboard />
              )}
            </Route>
            <Route exact path={"/add"} component={AddQuestion}>
              {this.props.authedUser === null ? (
                <Redirect to="/" />
              ) : (
                <AddQuestion />
              )}
            </Route>
            <Route path="/questions/:id" component={Poll} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
  };
}

export default connect(mapStateToProps)(App);
