import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'

class Skills extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div id='skills'>
          Skills
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Skills = connect(mapStateToProps, actions)(Skills);
export default Skills;