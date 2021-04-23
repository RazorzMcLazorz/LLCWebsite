import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reducers from './reducers'
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

import Home from './components/home'
import Projects from './components/projects'
import Skills from './components/skills'
import Login from './components/login'
import Contact from './components/contact'

import HomeMob from './components/homeMob'
import MobProjects from './components/mobProject'
import SkillsMob from './components/skillsMob'
import ContactMob from './components/contactMob'

const createStoreWithMiddleware = applyMiddleware()(createStore)

import 'bootstrap/dist/css/bootstrap.css'
import './style/main.scss'

Sentry.init({
  dsn: 'https://b136804c52694113a4cf2700004f87f7@o570217.ingest.sentry.io/5716904',
  integrations: [new Integrations.BrowserTracing()],
  release: 'llcwebsite@1.1.0',
  environment: location.hostname === 'nateyoungdev.herokuapp.com' ? 'live' : 'local',
  tracesSampleRate: 1.0,
})

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        {screen.width < 600 ? (
          <Switch>
            <Route exact path='/' component={HomeMob} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/contact' component={ContactMob} />
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
