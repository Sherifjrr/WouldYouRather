import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./nav";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import Page404 from "./404";
import { handleAnswerQuestion } from "../actions/questions";

class Poll extends Component {
  state = {
    checked: "",
  };
  handleAnswer = (e) => {
    e.preventDefault();
    const { checked: answer } = this.state;
    const {
      question: { id: qid },
      dispatch,
      authedUser,
    } = this.props;
    dispatch(handleAnswerQuestion({ authedUser, qid, answer }));
    this.props.history.push("/home");
  };
  render() {
    console.log(this.props);
    const { question, authedUser } = this.props;
    const Answered =
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser);
    const totalVoteOptionOne = question.optionOne.votes.length;
    const totalVoteOptionTwo = question.optionTwo.votes.length;
    const totalVotes = totalVoteOptionOne + totalVoteOptionTwo;
    const optionOnePercentage =
      Math.round((totalVoteOptionOne / totalVotes) * 10000) / 100;
    const optionTwoPercentage =
      Math.round((totalVoteOptionTwo / totalVotes) * 10000) / 100;

    if (question) {
      return (
        <div>
          <NavBar />
          <div
            style={{
              display: "flex",
              width: "40%",
              justifyContent: "space-around",
              border: "#0d6efd 1px solid",
              padding: "1rem",
              margin: "0 auto",
              marginTop: "3rem",
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
              {Answered ? (
                <div style={{ width: "20rem", textAlign: "center" }}>
                  <div style={{ margin: "1rem" }}>
                    {question.optionOne.votes.includes(authedUser) && (
                      <Badge pill bg="success">
                        Your Vote
                      </Badge>
                    )}
                    <p>{question.optionOne.text}</p>
                    <ProgressBar
                      now={optionOnePercentage}
                      label={`${optionOnePercentage}%`}
                    />
                    <p>{`${totalVoteOptionOne} Out of ${totalVotes}`}</p>
                  </div>
                  <div style={{ margin: "1rem" }}>
                    {question.optionTwo.votes.includes(authedUser) && (
                      <Badge pill bg="success">
                        Your Vote
                      </Badge>
                    )}
                    <p>{question.optionTwo.text}</p>
                    <ProgressBar
                      now={optionTwoPercentage}
                      label={`${optionTwoPercentage}%`}
                    />
                    <p>{`${totalVoteOptionTwo} Out of ${totalVotes}`}</p>
                  </div>
                </div>
              ) : (
                <div>
                  <h2>Would You Rather</h2>
                  <input
                    type="radio"
                    value="optionOne"
                    onChange={(e) => this.setState({ checked: e.target.value })}
                    id="one"
                    name="one"
                  />
                  <p>{question.optionOne.text}</p>
                  <h4>Or</h4>
                  <input
                    type="radio"
                    value="optionTwo"
                    onChange={(e) => this.setState({ checked: e.target.value })}
                    id="two"
                    name="one"
                  />
                  <p>{question.optionTwo.text}</p>
                  <Button
                    variant="outline-primary"
                    disabled={!this.state.checked}
                    onClick={this.handleAnswer.bind(this)}
                  >
                    Submit
                  </Button>{" "}
                </div>
              )}
            </div>
          </div>
          <Link to="/home">
            <Button variant="outline-primary" style={{ marginLeft: "10rem" }}>
              Back
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Page404 />;
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const id = props.match.params.id;
  const question = questions[id];

  // const vote = Answered
  //   ? question.optionOne.votes.includes(authedUser)
  //     ? "optionOne"
  //     : "optionTwo"
  //   : null;
  return {
    authedUser,
    users,
    question,
  };
}

export default connect(mapStateToProps)(Poll);
