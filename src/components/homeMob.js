import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'

class HomeMob extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div id='homeMob'>
          im mobile
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
HomeMob = connect(mapStateToProps, actions)(HomeMob);
export default HomeMob;