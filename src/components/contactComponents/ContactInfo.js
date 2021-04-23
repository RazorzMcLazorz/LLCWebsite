import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'

class ContactInfo extends Component {
  render() {
    return (
      <div className='ContactInfo'>
        <div className={this.props.isMobile ? 'ContactInfoNameMob' : 'ContactInfoName'}>
          My Contact Info
        </div>
        <div>You can find me at these links</div>
        <div className='MYLinks'>
          <a href='https://github.com/RazorzMcLazorz' target='_blank'>
            <i class='fab fa-github-square'></i>
          </a>
          <a href='https://www.facebook.com/RazorzMcLazorz' target='_blank'>
            <i class='fab fa-facebook'></i>
          </a>
          <a href='https://www.linkedin.com/in/nate-p-young/' target='_blank'>
            <i class='fab fa-linkedin'></i>
          </a>
        </div>
        <div>Or</div>
        <div className='MYLinksTop'>Manually message me at: </div>

        <div className='MYLinksTop3' type='text' id='email' value='nateyoungdev@gmail.com'>
          nateyoungdev@gmail.com
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
ContactInfo = connect(mapStateToProps, actions)(ContactInfo)
export default ContactInfo
