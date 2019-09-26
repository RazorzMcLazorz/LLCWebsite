import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import { Link } from 'react-router-dom'

class App extends Component {

  state = {
    Mobile : screen.width
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = (window.innerWidth <= 600);
    if (currentHideNav !== this.state.Mobile) {
        this.setState({Mobile: currentHideNav});
    }
}

  DesktopMain = () => {
    return(
    <div id='desktopMain'>
      <div id='center'>
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
            Nathaniel P. Young
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
          <Link to='/skill' className='rotatedRight'>
            <div className='arrow'/>
            My Skills
          </Link>
        </div>
      </div>
      <Footer/>
    </div>)
  }
  MobileMain = () => {
    return (<div>
      hi
    </div>)
  }

  render() {
    return (
    <div>
      {
        this.state.Mobile > 600 ? 
          this.DesktopMain() :
          this.MobileMain()
      }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;