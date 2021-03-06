import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Card, Button } from "react-bootstrap";
import Img from "../imgs/wouldYouRather.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { setAuthedUser } from "../actions/authedUser";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    authedUser: "",
    status: "disabled",
  };
  handleLogin(user) {
    const id = user.map((user) => user.id).toString();
    this.props.dispatch(setAuthedUser(id));
  }
  render() {
    const users = this.props.users;
    const usersList = Object.keys(users).map((user) => ({
      name: users[user].name,
      id: users[user].id,
    }));
    const { from } = this.props.location.state || {
      from: { pathname: "/home" },
    };

    return (
      <Card
        style={{
          width: "20rem",
          height: "30rem",
          margin: "0 auto",
          marginTop: "2rem",
          border: "none",
          justifyContent: "space-around",
        }}
      >
        <img src={Img} alt="Would You Rather" />
        <Dropdown
          className="myClassName"
          placeholder="Select User"
          options={usersList.map((user) => user.name)}
          onChange={(e) => this.setState({ authedUser: e.value, status: "" })}
        />
        <Link to={from} style={{ display: "contents" }}>
          <Button
            variant="success"
            disabled={this.state.status}
            size="lg"
            onClick={this.handleLogin(
              usersList.filter((user) => user.name === this.state.authedUser)
            )}
          >
            Login
          </Button>{" "}
        </Link>
      </Card>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users,
  };
}

export default connect(mapStateToProps)(Login);
