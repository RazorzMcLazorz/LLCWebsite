import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <div id='NavBar'>
        <div className='backto'>
          <Link to='/'>
            return
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
NavBar = connect(mapStateToProps, actions)(NavBar);
export default NavBar;