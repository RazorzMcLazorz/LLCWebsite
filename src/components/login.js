import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navbar'

class About extends Component {

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
About = connect(mapStateToProps, actions)(About);
export default About;