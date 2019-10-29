import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import { Link } from 'react-router-dom'

class Home extends Component {

  state = {
  }

  // Swapp Original Website into this and this new one to mobile

  render() {
    return (
      <div id='Home'>
        { screen.width > 600 ?
        // Desktop
        <div id='DesktopHome'>
          {/* center block */}
          <div id='leftColumnApp'>
          {/* Left column */}
          
          <Link to='/about' className='rotatedLeft'>
            About me
          </Link>
        </div>
        <div id='middleColumnApp'>
          {/* Middle column */}
          <div id='projectApp'>
            {/* Top Row */}
            <Link to='/wall' className='content'>
              Projects
            </Link>
          </div>
          <div id='nameApp'>
            {/* Middle Row */}
            <div className='shake'>
              Nathaniel P. Young
            </div>
          </div>
          <div id='contactApp'>
            {/* Bottom Row */}
            <Link to='/contact' className='content'>
              Contact Me
            </Link>
          </div>
        </div>
        <div id='rightColumnApp'>
          {/* Right column */}
          <Link to='/skills' className='rotatedRight'>
            <div className='arrow'/>
            My Skills
          </Link>
        </div>
      </div> : 
      // Mobile
      <div id='MobileHome'>
        <div>
          Nathaniel P. Young
        </div>
        <div>
          About Me
        </div>
        <div>
          Projects
        </div>
        <div>
          Skills
        </div>
        <div>
          Contact Me
        </div>
      </div>}
      <Footer/>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Home = connect(mapStateToProps, actions)(Home);
export default Home;