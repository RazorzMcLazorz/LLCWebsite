import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'

class About extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div id='about'>
          About
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
About = connect(mapStateToProps, actions)(About);
export default About;