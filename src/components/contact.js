import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'

class Contact extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div id='contact'>
          Contact
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Contact = connect(mapStateToProps, actions)(Contact);
export default Contact;