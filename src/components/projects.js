import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navbar'

class Projects extends Component {
  project(project) {
    
    return(
      <div className='project'>
        <div className='project-title'>
          {this.props.projects.title[project]}
        </div>
        <div className='project-details'>
          <div className='project-description'>
            {this.props.projects.summary[project]}
          </div>
          <div className='project-buttons'>
            {this.props.projects.link[project] &&
              <a className='project-button-component' onMouseOver={() => console.log('mouseover')} target='_blank' href={this.props.projects.link[project]}>
                 <i className="fas fa-pager"></i>
              </a>
            }
            {this.props.projects.dedicate[project] &&
              <a className='project-button-component' href={this.props.projects.dedicate[project]}>
                <i className="far fa-newspaper"></i>
              </a>
            }
            {this.props.projects.github[project] &&
              <a className='project-button-component' target='_blank' href={this.props.projects.github[project]}>
                <i className="fab fa-github"></i>
              </a>
            }
          </div>
        </div>
        <div className='project-date'>
          {this.props.projects.date[project]}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id='projectWall'>
          <div id='allProjects'>

            { this.props.bestProject &&
              <div className='projectBox'>
              <div className='projectBoxHeader'>
                Best Project
              </div>
              {this.props.bestProject.map((project, key)=>
                <div key={key}> {this.project(project)}</div>
              )} 
            </div>}

            { this.props.currentProject &&
              <div className='projectBox'>
              <div className='projectBoxHeader'>
                Current Projects
              </div>
              {this.props.currentProject.map((project, key)=>
                <div key={key}> {this.project(project)}</div>
              )} 
            </div>}

           {  this.props.pastOtherProject &&
            <div className='projectBox'>
              <div className='projectBoxHeader'>
                Past Projects
              </div>
              {this.props.pastOtherProject.map((project, key)=>
                <div key={key}> {this.project(project)}</div>
              )} 
            </div>}

            { this.props.pastPersonalProject &&
              <div className='projectBox'>
              <div className='projectBoxHeader'>
                Past Personal Projects
              </div>
              {this.props.pastPersonalProject.map((project, key)=>
                <div key={key}> {this.project(project)}</div>
              )} 
            </div>}

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Projects = connect(mapStateToProps, actions)(Projects);
export default Projects;