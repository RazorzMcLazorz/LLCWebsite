import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reducers from './reducers'

import Home from './components/home'
import Projects from './components/projects'
import Skills from './components/skills'
import Login from './components/login'
import Contact from './components/contact'

import HomeMob from './components/homeMob'
import MobProjects from './components/mobProject'
import SkillsMob from './components/skillsMob'

const createStoreWithMiddleware = applyMiddleware()(createStore)

import 'bootstrap/dist/css/bootstrap.css'
import './style/main.scss'

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        {screen.width < 600 ? (
          <Switch>
            <Route exact path='/' component={HomeMob} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/projects' component={MobProjects} />
            <Route exact path='/skills' component={SkillsMob} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        )}
      </BrowserRouter>
    </Provider>,
    document.querySelector('.app-wrapper')
  )
}

document.addEventListener('DOMContentLoaded', main)
