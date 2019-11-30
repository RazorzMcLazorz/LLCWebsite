import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import { Link } from 'react-router-dom'

class Home extends Component {

  state = {
    langColLeft: ['JavaScript', 'Node.js', 'TypeScript', 'React', 'Redux', 'MySQL', 'ClearDB'],
    langColRight: ['HTML 5', 'CSS', 'SCSS', 'Bash Terminal', 'PowerShell', 'Command Prompt', 'C++'],
    website: {
      'JavaScript' : 'https://www.javascript.com/',
      'Node.js' : 'https://nodejs.org/en/',
      'TypeScript' : 'https://www.typescriptlang.org/',
      'React' : 'https://reactjs.org/',
      'Redux' : 'https://redux.js.org/',
      'MySQL' : 'https://www.mysql.com/',
      'ClearDB' : 'https://www.cleardb.com/',
      'SCSS' : 'https://sass-lang.com/',
      'PowerShell' : 'https://powershell.org/',
      'C++' : 'http://www.cplusplus.com/'
    }
  }

  languages(lang) {
    return(
      <a target='_blank' href={this.state.website[lang]} className='homeLanguagesListColumnItem'>
        {lang}
      </a>
    )
  }

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
            <h1 className='homeName'>
              Nathaniel P. Young
            </h1>
            <h5>
              Frontend Developer
            </h5>
          </div>
          <div className='homeGoal'>
            <div className='homeGoalName'>
              My Goal
            </div>
            <div className='homeGoalBody'>
              I believe in simplicity to the user interface, but displaying all information to those users with out cluttering there screen.
            </div>
            <div className='homeGoalBody'>
              This goal can never end as every project can spark new ideas and better ways to improve the user interface.
            </div>
          </div>
          <div className='homeLanguages'>
            <div className='homeLanguagesName'>
              Languages I Know
            </div>
            <div className='homeLanguagesList'>
              <div className='homeLanguagesListColumn'>
              {this.state.langColLeft.map((project, key) => 
                <div className='homeLanguagesListColumnItem' key={key}>
                  {this.languages(project)}
                </div>
              )}
              </div>
              <div className='homeLanguagesListColumn'>
              {this.state.langColRight.map((project, key) => 
                <div className='homeLanguagesListColumnItem' key={key}>
                  {this.languages(project)}
                </div>
              )}
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
Home = connect(mapStateToProps, actions)(Home);
export default Home;