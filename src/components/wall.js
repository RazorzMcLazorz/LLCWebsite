import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'

class Wall extends Component {

  state = {
    projects: {
      'blackJack' : {
        title: 'Black Jack',
        link: '',
        dedicatedPage: '',
        summary: ''
      }
    }
  }

  project(type) {
    return(
      <div>
        <div>
          
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='presetBackground'>
        <div id='wall'>
          <div id='allProjects'>
            <div>
              Best Project
            </div>
            
            <div>
              Current Projects
            </div>
            <div>
              Past Projects
            </div>
          </div>
          <div id='featuredProjects'>
            Nav Container
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Wall = connect(mapStateToProps, actions)(Wall);
export default Wall;