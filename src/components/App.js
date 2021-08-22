import React, { Component } from "react";
import { connect } from "react-redux";
import { handleData } from "../actions/shared";
import Login from "./login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import Leaderboard from "./leaderboard";
import AddQuestion from "./addQuestion";
import Poll from "./questionDetails";
import Page404 from "./404";
import ProtectedRoute from "./protectedRoute";

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
            <ProtectedRoute exact path="/home" name="Home" component={Home} />
            <ProtectedRoute
              exact
              path="/leaderboard"
              name="Leaderboard"
              component={Leaderboard}
            />
            <ProtectedRoute
              exact
              path="/add"
              name="AddQuestion"
              component={AddQuestion}
            />
            <ProtectedRoute
              exact
              path="/questions/:id"
              name="QuestionDetails"
              component={Poll}
            />
            <Route exact path="/404" component={Page404} />
            <Redirect to="/404" />
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
