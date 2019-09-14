import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'

class Wall extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div id='wall'>
          Wall
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Wall = connect(mapStateToProps, actions)(Wall);
export default Wall;