import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navbar'

class Login extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id='login'>
          Login
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Login = connect(mapStateToProps, actions)(Login);
export default Login;