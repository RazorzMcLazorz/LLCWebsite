import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'

class Button extends Component {

  render() {
    return (
      <div
        style={{
            width: '15px',
            height: '15px',
            cursor: 'pointer',
        }}>
            
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Button = connect(mapStateToProps, actions)(Button);
export default Button;