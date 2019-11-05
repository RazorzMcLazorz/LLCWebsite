import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navbar'

class Wall extends Component {

  state = {
    bestProject: ['blackjack'],
    projects: {
      title: {
        'blackjack' : 'Black Jack',
      },
      link: {
        'blackjack' : '/',
      },
      dedicate: {
        'blackjack' : '/',
      },
      summary:{
        'blackjack' : 'im the summary',
      }
    }
  }

  project(project) {
    return(
      <div className='project'>
        <div className='project-title'>
          {this.state.projects.title[project]}
        </div>
        <div className='project-details'>
          <div>
            {this.state.projects.summary[project]}
          </div>
          <div>
            <div>
              {/* button component */}
            </div>
            <div>
              {/* button component */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id='wall'>
          <div id='allProjects'>
            <div className='projectBox'>
              <div className='projectBoxHeader'>
                Best Project
              </div>
              <div>
                {this.project(this.state.bestProject[0])}
              </div>
            </div>
            <div className='projectBox'>
              <div className='projectBoxHeader'>
                Current Projects
              </div>
            </div>
            <div className='projectBox'>
              <div className='projectBoxHeader'>
                Past Projects
              </div>
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
Wall = connect(mapStateToProps, actions)(Wall);
export default Wall;