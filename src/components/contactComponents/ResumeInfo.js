import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Resume from '../../../static/assets/Resume.pdf'

class ResumeInfo extends Component {
  render() {
    return (
      <div className='ResumeInfo'>
        <div className='ResumeInfoName'>Resume</div>
        <Document file={Resume} renderMode='canvas' renderTextLayer={false}>
          <Page pageNumber={1} height={500} renderMode='canvas' renderTextLayer={false} />
        </Document>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
ResumeInfo = connect(mapStateToProps, actions)(ResumeInfo)
export default ResumeInfo
