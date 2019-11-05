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
        'blackjack' : 'https://black-jack-website.herokuapp.com/',
      },
      dedicate: {
        'blackjack' : '',
      },
      summary:{
        'blackjack' : 'Complete working Black Jack Game online, it will soon be hosted as an app on google play store, after I add animations and sound to the game itself. this game is created in React.JS, it takes the complete knowledge of my coding with JavaScript and React.JS combines it into one to build this fun game.',
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
          <div className='project-description'>
            {this.state.projects.summary[project]}
          </div>
          <div className='project-buttons'>
            {this.state.projects.link[project] &&
              <a className='project-button-component' onMouseOver={() => console.log('mouseover')} target="_blank" href={this.state.projects.link[project]}>
                 <i className="fas fa-pager"></i>
              </a>
            }
            {this.state.projects.dedicate[project] &&
              <a className='project-button-component' href={this.state.projects.dedicate[project]}>
                <i className="far fa-newspaper"></i>
              </a>
            }
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
              {this.project(this.state.bestProject[0])} 
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