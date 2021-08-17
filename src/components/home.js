import React , { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './nav'
import Questions from './questions'

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {this.props.questionsIds.map((id) => (
                    <Questions key={id} props={this.props.questions}/>
                ) )}
            </div>
        )
    }
}


function mapStateToProps({ authedUser , users, questions}) {
    return {
        authedUser, users,
        questionsIds: Object.keys(questions).sort((a, b) =>  questions[b].timestamp -  questions[a].timestamp),
        questions
    }
} 
export default connect(mapStateToProps)(Home) 