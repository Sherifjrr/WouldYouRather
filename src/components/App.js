import React , { Component } from 'react'
import { connect } from 'react-redux'
import { handleData } from '../actions/shared'
import Login from './login'
import { BrowserRouter,Switch,Route }  from 'react-router-dom'
import Home from './home'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleData())
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
          <Route exact path={'/'} component={Login}/>
          <Route exact path={'/home'} component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App)
