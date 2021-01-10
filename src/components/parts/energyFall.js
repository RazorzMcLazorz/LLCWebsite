import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'



class EnergyFall extends Component {
  render() {
    return (
      <div className='energyBackground'>
        <div className='energy'/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
EnergyFall = connect(mapStateToProps, actions)(EnergyFall)
export default EnergyFall
