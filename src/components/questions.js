import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Questions extends Component {
  render() {
    // console.log(this.props)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            width: "40%",
            justifyContent: "space-around",
            border: "#0d6efd 1px solid",
            padding: "1rem",
            margin: "2rem",
            borderRadius: "1rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "8rem" }}
              src={this.props.users[this.props.question.author].avatarURL}
              alt="Img"
            />
            <h3 style={{ marginTop: "1rem" }}>
              {this.props.users[this.props.question.author].name}
            </h3>
          </div>
          <div>
            <h2>Would You Rather</h2>
            <p>{this.props.question.optionOne.text}</p>
            <h4>Or</h4>
            <p>{this.props.question.optionTwo.text}</p>
            <Link to={"questions/" + this.props.id}>
              <Button variant="outline-primary">Answer</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    users,
    question,
  };
}

export default connect(mapStateToProps)(Questions);
