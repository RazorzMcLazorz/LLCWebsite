import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'

class ResumeInfo extends Component {
  render() {
    return (
      <div className='ResumeInfo'>
        <div className='ResumeInfoName'>Resume</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
ResumeInfo = connect(mapStateToProps, actions)(ResumeInfo)
export default ResumeInfo
