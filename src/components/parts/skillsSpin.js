import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'

const LanguageWordsOuter = [
  'React.js',
  'Javascript',
  'Python',
  'HTML',
  'SCSS',
  'Typescript',
  'Redux.js',
  'REST',
  'HTTP',
]
const LanguageWordsInner = ['AWS Amplify', 'BASH', 'ZSH', 'GIT', 'MySQL', 'Node.js']

/**
 * @param small boolean
 */
class SkillsSpin extends Component {
  render() {
    return (
      <div id='skillsSpinContainer'>
        {LanguageWordsOuter.map((word, indx) => (
          <div
            className='spin'
            key={'skillSpinOuter' + indx}
            style={{ animationDelay: '-' + indx * 1.1 + 's' }}>
            <div className='words'>{word}</div>
          </div>
        ))}
        {LanguageWordsInner.map((word, indx) => (
          <div
            className='spinInner'
            key={'skillSpinInner' + indx}
            style={{ animationDelay: '-' + indx * 1.65 + 's' }}>
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
