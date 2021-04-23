import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Navbar from './parts/navbar'
import ContactInfo from './contactComponents/ContactInfo'
import Refferences from './contactComponents/Refferences'
import ResumeInfo from './contactComponents/ResumeInfo'

class Contact extends Component {
  render() {
    return (
      <div id='contactMob'>
        <Navbar />
        <ContactInfo isMobile />
        <Refferences isMobile />
        <ResumeInfo isMobile />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
Contact = connect(mapStateToProps, actions)(Contact)
export default Contact
