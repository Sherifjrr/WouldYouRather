import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button, Nav } from "react-bootstrap";
import { removeAuthedUser } from "../actions/authedUser";

class NavBar extends Component {
  render() {
    const { authedUser, users, dispatch } = this.props;

    const authedName = users[authedUser].name;
    return (
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Link to={"/home"}>
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to={"/add"}>
            <Navbar.Brand>New Question</Navbar.Brand>
          </Link>
          <Link to={"/leaderboard"}>
            <Navbar.Brand>Leaderboard</Navbar.Brand>
          </Link>
          <Nav>
            <Navbar.Text style={{ marginRight: "1rem" }}>
              Hello, {authedName}{" "}
            </Navbar.Text>
            <Button
              onClick={() => {
                dispatch(removeAuthedUser());
              }}
            >
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(NavBar);
