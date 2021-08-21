import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./nav";
import sortBy from "sort-by";

class Leaderboard extends Component {
  render() {
    const users = this.props.users;
    return (
      <div>
        <NavBar />
        <h1 style={{ textAlign: "center", margin: "1rem" }}>Leader Board</h1>
        {Object.keys(users)
          .map((userId) => ({
            id: userId,
            name: users[userId].name,
            avatarURL: users[userId].avatarURL,
            answeredQuestions: Object.keys(users[userId].answers).length,
            askedQuestions: users[userId].questions.length,
            score:
              Object.keys(users[userId].answers).length +
              users[userId].questions.length,
          }))
          .sort(sortBy("-score"))
          .map((user) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  width: "60%",
                  justifyContent: "space-around",
                  alignItems: "center",
                  border: "#0d6efd 1px solid",
                  padding: "1rem",
                  margin: "2rem",
                  borderRadius: "1rem",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <img
                    style={{ width: "8rem" }}
                    src={user.avatarURL}
                    alt="userImg"
                  />
                  <h3 style={{ marginTop: "1rem" }}>{user.name}</h3>
                </div>
                <div>
                  <h2>Questions asked: {user.askedQuestions}</h2>
                  <h2>Questions answered: {user.answeredQuestions}</h2>
                </div>
                <div>
                  <h1>Score : {user.score}</h1>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
