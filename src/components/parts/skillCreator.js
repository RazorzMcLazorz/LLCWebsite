import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'
import { Link } from 'react-router-dom'

/**
 * @param title string
 * @param summary string
 */
class SkillCreator extends Component {
  looper = () => {}

  render() {
    return (
      <div id='SkillCreator'>
        <div className='skillsBoxHeader'>{this.props.title}</div>
        <div className='skillsBoxContent'>{this.looper}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
SkillCreator = connect(mapStateToProps, actions)(SkillCreator)
export default SkillCreator
