import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navbar'

class Projects extends Component {

  state = {
    bestProject: ['blackjack'],
    currentProject: [],
    pastOtherProject: ['ww1Sim'],
    pastPersonalProject: ['wwOutpostSingle', 'blackjack'],
    projects: {
      title: {
        'blackjack' : 'Black Jack',
        'ww1Sim' : 'WW1 Simulation Tracker',
        'wwOutpostSingle' : 'World War Outpost',
      },
      link: {
        'blackjack' : 'https://black-jack-website.herokuapp.com/',
        'ww1Sim' : 'https://ww1sim.herokuapp.com/',
        'wwOutpostSingle' : 'https://wwoutpost.herokuapp.com/',
      },
      dedicate: {
        'blackjack' : '',
        'ww1Sim' : '',
        'wwOutpostSingle' : '',
      },
      github: {
        'blackjack' : 'https://github.com/RazorzMcLazorz/BlackJackWebsite',
        'ww1Sim' : 'https://github.com/RazorzMcLazorz/WW1SimulationGame',
        'wwOutpostSingle' : 'https://github.com/RazorzMcLazorz/WWOutpost',
      },
      summary:{
        'blackjack' : "Complete working Black Jack Game online, it will soon be hosted as an app on google play store, after I add animations and sound to the game itself. this game is created in React.JS, it takes the complete knowledge of my coding with JavaScript and React.JS combines it into one to build this fun game.",
        'ww1Sim' : "My first Database Website, using Node.js and mysql hosted via ClearDB servers, The Game is for my highschool History Teacher, to help him with his WW1 game making it easier to keep track of everything while being completely online allowing use anywhere. It deals with player groups, choice decison's for the groups and resource managements per group while at the end sorting everyone into the specific ranking for the next round.",
        'wwOutpostSingle' : "This is a Colony Simulator Game that takes place sort of in the WW's its only 12 rounds and the goal is to gain as much supplys / research by the end of the game. this game is cut short due to the new WWOutpost2 game taking place but i will eventually finish with new ideas in the future. This dives head first into complexity with multiple types of buildings to create along with Research, Production and little fast war battles against the very simple Random Enemy/AI",
      },
      date: {
        'blackjack' : 'Sep/1/2018 - Oct/15/2018',
        'ww1Sim' : 'Nov/28/2018 - Aug/28/2019',
        'wwOutpostSingle' : 'Sep/25/2018 - Dec/1/2018',
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
              <a className='project-button-component' onMouseOver={() => console.log('mouseover')} target='_blank' href={this.state.projects.link[project]}>
                 <i className="fas fa-pager"></i>
              </a>
            }
            {this.state.projects.dedicate[project] &&
              <a className='project-button-component' href={this.state.projects.dedicate[project]}>
                <i className="far fa-newspaper"></i>
              </a>
            }
            {this.state.projects.github[project] &&
              <a className='project-button-component' target='_blank' href={this.state.projects.github[project]}>
                <i className="fab fa-github"></i>
              </a>
            }
          </div>
        </div>
        <div className='project-date'>
          {this.state.projects.date[project]}
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

            { this.state.bestProject &&
              <div className='projectBox'>
              <div className='projectBoxHeader'>
                Best Project
              </div>
              {this.state.bestProject.map((project, key)=>
                <div key={key}> {this.project(project)}</div>
              )} 
            </div>}

            { this.state.currentProject &&
              <div className='projectBox'>
              <div className='projectBoxHeader'>
                Current Projects
              </div>
              {this.state.currentProject.map((project, key)=>
                <div key={key}> {this.project(project)}</div>
              )} 
            </div>}

           {  this.state.pastOtherProject &&
            <div className='projectBox'>
              <div className='projectBoxHeader'>
                Past Projects
              </div>
              {this.state.pastOtherProject.map((project, key)=>
                <div key={key}> {this.project(project)}</div>
              )} 
            </div>}

            { this.state.pastPersonalProject &&
              <div className='projectBox'>
              <div className='projectBoxHeader'>
                Past Personal Projects
              </div>
              {this.state.pastPersonalProject.map((project, key)=>
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