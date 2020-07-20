import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'
import { Link } from 'react-router-dom'

class SkillCreator extends Component {

  render() {
    return (
      <div id='SkillCreator'>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return state
}
SkillCreator = connect(mapStateToProps, actions)(SkillCreator)
export default SkillCreator