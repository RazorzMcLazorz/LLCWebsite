import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'

/**
 * @param title string
 * @param summary string
 */
class SkillCreator extends Component {
  looper = (summary) => {
    console.log(summary)
    let sum2 = summary.split('[[')
    console.log(sum2)
    if (sum2.length <= 1) {
      return summary
    } else {
      for (i = 0; i < sum2.length; i++) {}
    }
  }

  render() {
    return (
      <div id='SkillCreator'>
        <div className='skillsBoxHeader'>{this.props.title}</div>
        <div className='skillsBoxContent'>{this.looper(this.props.summary)}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
SkillCreator = connect(mapStateToProps, actions)(SkillCreator)
export default SkillCreator
