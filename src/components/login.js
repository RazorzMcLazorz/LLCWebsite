import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navbar'

class Login extends Component {

  state = {
    emailLogin : 'sdajkhsdjka',
    passwordLogin: ''
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id='login'>
          <form>
            <input type='text' name='email' value={this.state.emailLogin} autofocus onChange={(val) => this.setState({emailLogin : val.target.value})}/>
            <input type='text' name='password' value={this.state.passwordLogin}/>
            <input type='submit'/>
          </form>
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