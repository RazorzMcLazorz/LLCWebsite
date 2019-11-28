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
      <div id='home'>
        <div id='homeNav'>
          <Link to='projects' className='homeNavLink'>
            Projects
          </Link>
          <Link to='skills' className='homeNavLink'>
            Skills
          </Link>
          <Link to='login' className='homeNavLink'>
            Login
          </Link>
          <Link to='contact' className='homeNavLink'>
            Contact
          </Link>
        </div>
        <div id='homeBody'>
          <div className='homeNameBox'>
            <div className='homeName'>
              Nathaniel P. Young
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Home = connect(mapStateToProps, actions)(Home);
export default Home;