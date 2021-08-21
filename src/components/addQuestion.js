import React, { Component } from "react";
import NavBar from "./nav";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

class AddQuestion extends Component {
  state = {
    firstOption: "",
    secondOption: "",
    home: false,
  };
  handleAddQuestion(e) {
    e.preventDefault();
    const { firstOption: optionOneText, secondOption: optionTwoText } =
      this.state;
    const { authedUser: author, dispatch } = this.props;
    dispatch(
      handleAddQuestion({
        optionOneText,
        optionTwoText,
        author,
      })
    );
    this.setState({ home: true });
  }
  render() {
    if (this.state.home === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: "40%",
            justifyContent: "space-around",
            border: "#0d6efd 1px solid",
            padding: "1rem",
            margin: "0 auto",
            marginTop: "4rem",
            borderRadius: "1rem",
          }}
        >
          <h1 style={{ margin: "1rem" }}>Would You Rather</h1>
          <Form.Control
            placeholder="Your First Option"
            value={this.state.firstOption}
            onChange={(e) => this.setState({ firstOption: e.target.value })}
          ></Form.Control>
          <h1 style={{ margin: "1rem" }}>Or</h1>
          <Form.Control
            placeholder="Your Second Option"
            value={this.state.secondOption}
            onChange={(e) =>
              this.setState({ secondOption: e.target.value, status: "" })
            }
          ></Form.Control>
          <Button
            style={{ margin: "2rem" }}
            disabled={
              this.state.firstOption === "" || this.state.secondOption === ""
            }
            onClick={this.handleAddQuestion.bind(this)}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(AddQuestion);
