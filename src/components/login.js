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

  login = () => {
    this.props.changeState({ 
      email: this.state.emailLogin,
      password: this.state.passwordLogin
    })
    setTimeout(this.props.history.push('/'), 1000)
    console.log(this.props.email)
    console.log(this.props.password)
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id='login'>
          <form id='loginForm'>
            <input className='textBox' type='email' name='email' value={this.state.emailLogin} autoFocus onChange={(val) => this.setState({emailLogin : val.currentTarget.value})}/>
            <input className='textBox' type='password' name='password' value={this.state.passwordLogin} onChange={(val) => this.setState({passwordLogin : val.currentTarget.value})}/>
            <input className='submitBox' type='button' value='Login' onClick={() => this.props.changeState({ email: this.state.emailLogin, password: this.state.passwordLogin })}/>
            <div>
              This does not function yet
            </div>
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