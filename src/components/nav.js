import React , { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Button , Nav  } from 'react-bootstrap'

class NavBar extends Component {
    
    render() {
        const authedUser = this.props.authedUser
        const users = this.props.users
        const authedName = users[authedUser].name
        return (
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Navbar.Brand href="/new">New Question</Navbar.Brand>
                    <Navbar.Brand href="/leaderboard">Leaderboard</Navbar.Brand>
                    <Nav>
                    <Navbar.Text style={{marginRight:'1rem'}}>Hello, {authedName} </Navbar.Text>
                    <Button>Logout</Button>
                    </Nav>
                </Container>
            </Navbar>

        )
    }
}

function mapStateToProps({ authedUser , users}) {
    return {
        authedUser , 
        users
    }
}

export default connect(mapStateToProps)(NavBar) 





