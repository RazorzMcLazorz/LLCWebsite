import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import { Link } from 'react-router-dom'

class HomeMob extends Component {
  state = {}

  // Swapp Original Website into this and this new one to mobile

  render() {
    return (
      <div id='homeMob'>
        <div id='mobile'>
          <div id='mobileName'>Nathaniel P. Young</div>
          <div id='mobileLinks'>
            <Link to='/projects' className='mobileLinkButtons'>
              Projects
            </Link>
            <Link to='/skills' className='mobileLinkButtons'>
              My Skills
            </Link>
            <Link to='/login' className='mobileLinkButtons'>
              Login
            </Link>
            <Link to='/contact' className='mobileLinkButtons'>
              Contact Me
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
HomeMob = connect(mapStateToProps, actions)(HomeMob)
export default HomeMob
