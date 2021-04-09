import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'

const LanguageWords = ['React', 'Javascript', 'Python', 'HTML', 'SCSS', 'Typescript']

/**
 * @param small boolean
 */
class SkillsSpin extends Component {
  render() {
    return (
      <div id='skillsSpinContainer'>
        {LanguageWords.map((word, indx) => (
          <div
            className='spin'
            key={'skillSpin' + indx}
            style={{ animationDelay: '-' + indx + 's' }}>
            <div className='words'>{word}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
SkillsSpin = connect(mapStateToProps, actions)(SkillsSpin)
export default SkillsSpin
