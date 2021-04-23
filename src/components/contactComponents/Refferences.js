import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'

class Refferences extends Component {
  render() {
    return (
      <div className='Refferences'>
        <div className='RefferenceName'>Refferences</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
Refferences = connect(mapStateToProps, actions)(Refferences)
export default Refferences
