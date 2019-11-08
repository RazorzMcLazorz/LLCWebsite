import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navbar'

class Login extends Component {

  state = {
    emailLogin : '',
    passwordLogin: ''
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id='login'>
          <form style={{marginTop: 50}}>
            <input className='textBox' type='email' name='email' value={this.state.emailLogin} autoFocus onChange={(val) => this.setState({emailLogin : val.currentTarget.value})}/>
            <input className='textBox' type='password' name='password' value={this.state.passwordLogin} onChange={(val) => this.setState({passwordLogin : val.currentTarget.value})}/>
            <input className='submitBox' type='submit' value='Login' onClick={() => this.props.history("/")}/>
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