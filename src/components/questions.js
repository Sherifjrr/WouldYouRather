import React , { Component } from 'react' 
// import { connect } from 'react- redux'
import img from '../imgs/sara.png'
import { Button  } from  'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Questions extends Component {
    render() { 
        return (
            <div style={{display: 'flex',justifyContent:'center'}}>
                <div style={{display : "flex", width: '40%',justifyContent: 'space-around', border:'#0d6efd 1px solid', padding: '1rem', margin: '2rem', borderRadius: '1rem'}}>
                    <div>
                        <img src={img} alt='Img'/>
                        <h3 style={{ marginTop:"1rem" }}>
                            {}
                        </h3>
                    </div>
                    <div>
                        <h2>Would You Rather</h2>
                        <p></p>
                        <h4>Or</h4>
                        <p></p>
                        <Button variant="outline-primary" href={'questions/'} >Answer</Button>{' '}
                    </div>
                </div>
            </div>
        )
    }
}

export default Questions 