import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import { Link } from 'react-router-dom'

class App extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div id='app'>
        <div id='center'>
          {/* center block */}
          <div id='leftColumnApp'>
            {/* Left column */}
            <div className='rotatedLeft'>
              About me
            </div>
          </div>
          <div id='middleColumnApp'>
            {/* Middle column */}
            <div id='skillsApp'>
              {/* Top Row */}
              <Link id='content' to="wall">
                Projects
              </Link>
            </div>
            <div id='nameApp'>
              {/* Middle Row */}
              Nathaniel P. Young
            </div>
            <div id='projectApp'>
              {/* Bottom Row */}
              <Link id='content'>
                Contact Me
              </Link>
            </div>
          </div>
          <div id='rightColumnApp'>
            {/* Right column */}
            <div className='rotatedRight'>
              <div className='arrow'/>
              My Skills
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;