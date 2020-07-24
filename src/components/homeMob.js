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
          <div id='mobileName'>
            <h4 className='mobHomeName'>
              <span>N</span>
              <span>a</span>
              <span>t</span>
              <span>h</span>
              <span>a</span>
              <span>n</span>
              <span>i</span>
              <span>e</span>
              <span>l</span>
              <pre> </pre>
              <span>P</span>
              <span>.</span>
              <pre> </pre>
              <span>Y</span>
              <span>o</span>
              <span>u</span>
              <span>n</span>
              <span>g</span>
            </h4>
          </div>
          <h6>Frontend Developer</h6>
          <div id='mobileLogo'>
            <img src='assets/Logo 1.png' />
          </div>
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
