import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navbar'

class MobProjects extends Component {
  project(project) {
    
    return(
      <div className='mobProject-box'>
        <div className='mobProject-title'>
          {this.props.projects.title[project]}
        </div>
        <div className='mobProject-details'>
          <div className='mobProject-description'>
            {this.props.projects.summary[project]}
          </div>
          <div className='mobProject-buttons'>
            {this.props.projects.link[project] &&
              <a className='mobProject-button-component' onMouseOver={() => console.log('mouseover')} target='_blank' href={this.props.projects.link[project]}>
                 <i className="fas fa-pager"></i>
              </a>
            }
            {this.props.projects.dedicate[project] &&
              <a className='mobProject-button-component' href={this.props.projects.dedicate[project]}>
                <i className="far fa-newspaper"></i>
              </a>
            }
            {this.props.projects.github[project] &&
              <a className='mobProject-button-component' target='_blank' href={this.props.projects.github[project]}>
                <i className="fab fa-github"></i>
              </a>
            }
          </div>
        </div>
        <div className='mobProject-date'>
          {this.props.projects.date[project]}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id='mobProject'>
          <div id='mobAllProjects'>
            { this.props.bestProject &&
              <div className='mobProjectBox'>
              <div className='mobProjectBoxHeader'>
                Best Project
              </div>
              <div className='mobProjectBoxInformation'>
                {this.props.bestProject.map((project, key)=>
                  <div key={key}> {this.project(project)}</div>
                )}
              </div>
            </div>}

            { this.props.currentProject &&
              <div className='mobProjectBox'>
              <div className='mobProjectBoxHeader'>
                Current Projects
              </div>
              {this.props.currentProject.map((project, key)=>
                <div key={key}> {this.project(project)}</div>
              )} 
            </div>}

           {  this.props.pastOtherProject &&
            <div className='mobProjectBox'>
              <div className='mobProjectBoxHeader'>
                Past Projects
              </div>
              {this.props.pastOtherProject.map((project, key)=>
                <div key={key}> {this.project(project)}</div>
              )} 
            </div>}

            { this.props.pastPersonalProject &&
              <div className='mobProjectBox'>
              <div className='mobProjectBoxHeader'>
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
MobProjects = connect(mapStateToProps, actions)(MobProjects);
export default MobProjects;