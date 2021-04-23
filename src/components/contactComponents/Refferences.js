import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'

class Refferences extends Component {
  state = {
    refferences: [
      {
        name: 'Buck Brady',
        affiliation: 'CTO at Rovitracker.inc',
        phoneNumber: '385-207-6257',
        email: 'bbrady145@gmail.com',
        HIGTK: '',
      },
      {
        name: 'Taylor Millar',
        affiliation: 'Backend Developer at Rovitracker.inc',
        phoneNumber: '801-691-4362',
        email: '',
        HIGTK: '',
      },
    ],
  }

  render() {
    return (
      <div className='Refferences'>
        <div className='RefferenceName'>Refferences</div>
        {this.state.refferences.map((refference) => (
          <div className='RefferenceContainer'>
            <div>
              {refference.name} - {refference.phoneNumber}
            </div>
            <div>{refference.email}</div>
            <div>{refference.affiliation}</div>
            <div className='RefferenceDivder' />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
Refferences = connect(mapStateToProps, actions)(Refferences)
export default Refferences
