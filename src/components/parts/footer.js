import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'

class Footer extends Component {

  render() {
    return (
      <div id='footer'>
        <div id='footerLeft'>
          Created using React.js
        </div>
        <div id='footerRight'>
          Version: 0.0
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Footer = connect(mapStateToProps, actions)(Footer);
export default Footer;