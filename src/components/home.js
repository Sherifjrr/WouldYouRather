import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./nav";
import Questions from "./questions";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class Home extends Component {
  render() {
    const unAnsweredQuestions = Object.keys(this.props.questions)
      .sort(
        (a, b) =>
          this.props.questions[b].timestamp - this.props.questions[a].timestamp
      )
      .filter(
        (questionId) =>
          !this.props.questions[questionId].optionOne.votes.includes(
            this.props.authedUser
          ) &&
          !this.props.questions[questionId].optionTwo.votes.includes(
            this.props.authedUser
          )
      );
    const AnsweredQuestions = Object.keys(this.props.questions)
      .sort(
        (a, b) =>
          this.props.questions[b].timestamp - this.props.questions[a].timestamp
      )
      .filter(
        (questionId) =>
          this.props.questions[questionId].optionOne.votes.includes(
            this.props.authedUser
          ) ||
          this.props.questions[questionId].optionTwo.votes.includes(
            this.props.authedUser
          )
      );
    return (
      <div>
        <NavBar />
        <Tabs
          defaultActiveKey="Answered"
          fill
          id="uncontrolled-tab-example"
          className="mb-3"
          style={{ marginTop: "2rem" }}
        >
          <Tab eventKey="Answered" title="Answered">
            {AnsweredQuestions.map((id) => (
              <Questions key={id} id={id} />
            ))}
          </Tab>
          <Tab eventKey="Not Answered" title="Not Answered">
            {unAnsweredQuestions.map((id) => (
              <Questions key={id} id={id} />
            ))}
          </Tab>
        </Tabs>
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
export default connect(mapStateToProps)(Home);
