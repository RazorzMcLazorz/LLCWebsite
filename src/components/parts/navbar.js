import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div id='NavBar'>
        <Link className='NavBarBack' to='/'>
          <i className='fas fa-chevron-left'></i>
        </Link>
        <div></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
NavBar = connect(mapStateToProps, actions)(NavBar)
export default NavBar
