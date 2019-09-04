import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'

class Footer extends Component {

  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Footer = connect(mapStateToProps, actions)(Footer);
export default Footer;