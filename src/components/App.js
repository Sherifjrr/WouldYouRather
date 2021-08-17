import React , { Component } from 'react'
import { connect } from 'react-redux'
import { handleData } from '../actions/shared'
import Login from './login'
import { BrowserRouter,Switch,Route, Redirect }  from 'react-router-dom'
import Home from './home'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleData())
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
          <Route exact path={'/'} component={Login}/>
          <Route exact path={'/home'} component={Home}>
            {this.props.authedUser === null ? <Redirect to='/' /> : <Home />}
          </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ authedUser , users, questions}) {
  return {
    authedUser, users,
    questionsIds: Object.keys(questions).sort((a, b) =>  questions[b].timestamp -  questions[a].timestamp),
    questions
  }
}

export default connect(mapStateToProps)(App)
